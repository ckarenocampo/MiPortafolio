import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useEffect, useRef, useState, type CSSProperties } from 'react'

/** How many phone screenshots are shown side by side in one slide. */
const PHONES_PER_SLIDE = 3

type Shot = { src: string; n: number; ratio: number }

type Slide =
  | { kind: 'landscape'; shot: Shot }
  | { kind: 'phones'; shots: Shot[] }

/** Reads each image's width/height ratio (null while still loading). */
function useImageRatios(images: string[]) {
  const [ratios, setRatios] = useState<Record<string, number>>({})

  useEffect(() => {
    let cancelled = false
    for (const src of images) {
      const img = new Image()
      img.onload = () => {
        if (!cancelled) setRatios((r) => ({ ...r, [src]: img.naturalWidth / img.naturalHeight }))
      }
      img.src = src
    }
    return () => {
      cancelled = true
    }
  }, [images])

  return images.every((src) => ratios[src]) ? ratios : null
}

/**
 * Landscape images (web screenshots) get a slide each and fill it.
 * Consecutive portrait images (mobile app screenshots) are grouped up to
 * PHONES_PER_SLIDE per slide and shown inside phone frames, uncropped.
 */
function buildSlides(images: string[], ratios: Record<string, number>): Slide[] {
  const slides: Slide[] = []
  images.forEach((src, i) => {
    const shot = { src, n: i + 1, ratio: ratios[src] }
    if (shot.ratio >= 0.87) {
      slides.push({ kind: 'landscape', shot })
      return
    }
    const last = slides.at(-1)
    if (last?.kind === 'phones' && last.shots.length < PHONES_PER_SLIDE) last.shots.push(shot)
    else slides.push({ kind: 'phones', shots: [shot] })
  })
  return slides
}

type Props = {
  images: string[]
  title: string
}

export function ImageSlider({ images, title }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState<string | null>(null)
  const ratios = useImageRatios(images)

  if (images.length === 0) return null

  const slides = ratios ? buildSlides(images, ratios) : []
  const total = images.length

  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track || slides.length === 0) return
    const next = (i + slides.length) % slides.length
    track.scrollTo({ left: next * track.clientWidth, behavior: 'smooth' })
  }

  const onScroll = () => {
    const track = trackRef.current
    if (!track) return
    setIndex(Math.round(track.scrollLeft / track.clientWidth))
  }

  const openZoom = (src: string) => {
    setZoomed(src)
    dialogRef.current?.showModal()
  }

  const alt = (shot: Shot) => `${title}, imagen ${shot.n}`
  const label = (shot: Shot) => `Ampliar imagen ${shot.n} de ${total}`

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carrusel"
      aria-label={`Imágenes de ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') goTo(index - 1)
        if (e.key === 'ArrowRight') goTo(index + 1)
      }}
    >
      <div className="slider-track" ref={trackRef} onScroll={onScroll} tabIndex={0}>
        {slides.map((slide) =>
          slide.kind === 'landscape' ? (
            <button
              type="button"
              className="slider-slide"
              key={slide.shot.src}
              onClick={() => openZoom(slide.shot.src)}
              aria-label={label(slide.shot)}
            >
              <img src={slide.shot.src} alt={alt(slide.shot)} draggable={false} />
            </button>
          ) : (
            <div className="slider-slide is-phones" key={slide.shots[0].src}>
              {slide.shots.map((shot) => (
                <button
                  type="button"
                  className="phone-frame"
                  key={shot.src}
                  onClick={() => openZoom(shot.src)}
                  aria-label={label(shot)}
                  style={{ '--ratio': shot.ratio } as CSSProperties}
                >
                  <img src={shot.src} alt={alt(shot)} draggable={false} />
                </button>
              ))}
            </div>
          ),
        )}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            className="slider-arrow slider-arrow-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Anterior"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow-next"
            onClick={() => goTo(index + 1)}
            aria-label="Siguiente"
          >
            <ChevronRight aria-hidden="true" />
          </button>
          <div className="slider-dots">
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={i === index ? 'is-active' : undefined}
                onClick={() => goTo(i)}
                aria-label={`Ir a la diapositiva ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
        </>
      )}

      <dialog
        ref={dialogRef}
        className="slider-lightbox"
        onClose={() => setZoomed(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close()
        }}
      >
        {zoomed && <img src={zoomed} alt={`${title}, imagen ampliada`} />}
        <button
          type="button"
          className="slider-lightbox-close"
          onClick={() => dialogRef.current?.close()}
          aria-label="Cerrar"
        >
          <X aria-hidden="true" />
        </button>
      </dialog>
    </div>
  )
}
