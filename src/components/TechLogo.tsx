import type { CSSProperties } from 'react'
import type { Tech } from '../data/skills'

export function TechLogo({ tech }: { tech: Tech }) {
  const color = `#${tech.color}`

  if (!tech.path) {
    return (
      <span className="tech-monogram" style={{ color, borderColor: color }} aria-hidden="true">
        {tech.monogram}
      </span>
    )
  }

  return (
    <svg className="tech-logo" viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d={tech.path} />
    </svg>
  )
}

export function TechChip({ tech }: { tech: Tech }) {
  return (
    <li className="tech-chip" style={{ '--tech-color': `#${tech.color}` } as CSSProperties}>
      <TechLogo tech={tech} />
      <span>{tech.name}</span>
    </li>
  )
}
