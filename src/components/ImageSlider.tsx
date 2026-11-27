import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useRef, useState } from 'react'

type Props = {
  images: string[]
  title: string
}

export function ImageSlider({ images, title }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState(0)
  const [zoomed, setZoomed] = useState<string | null>(null)

  if (images.length === 0) return null

  const goTo = (i: number) => {
    const track = trackRef.current
    if (!track) return
    const next = (i + images.length) % images.length
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

  const multiple = images.length > 1

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
        {images.map((src, i) => (
          <button
            type="button"
            className="slider-slide"
            key={src}
            onClick={() => openZoom(src)}
            aria-label={`Ampliar imagen ${i + 1} de ${images.length}`}
          >
            <img src={src} alt={`${title}, imagen ${i + 1}`} loading="lazy" draggable={false} />
          </button>
        ))}
      </div>

      {multiple && (
        <>
          <button
            type="button"
            className="slider-arrow slider-arrow-prev"
            onClick={() => goTo(index - 1)}
            aria-label="Imagen anterior"
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="slider-arrow slider-arrow-next"
            onClick={() => goTo(index + 1)}
            aria-label="Imagen siguiente"
          >
            <ChevronRight aria-hidden="true" />
          </button>
          <div className="slider-dots">
            {images.map((src, i) => (
              <button
                type="button"
                key={src}
                className={i === index ? 'is-active' : undefined}
                onClick={() => goTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
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
