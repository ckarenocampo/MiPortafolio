import {
  siCodeigniter,
  siCss,
  siDart,
  siDotnet,
  siExpress,
  siFigma,
  siFlutter,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siN8n,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPostman,
  siPython,
  siReact,
  siTypescript,
} from 'simple-icons'

export type Tech = {
  name: string
  /** Hex color without '#', used to tint the logo. */
  color: string
  /** SVG path from simple-icons (24×24 viewBox). */
  path?: string
  /** Short text used instead of a logo when no official icon is available. */
  monogram?: string
}

// Brands whose official color is near-black are shown in a light tone so
// they stay visible on the dark background.
const LIGHT = 'ECE8F5'

const icon = (name: string, si: { hex: string; path: string }, color = si.hex): Tech => ({
  name,
  color,
  path: si.path,
})

export const skillGroups: { title: string; items: Tech[] }[] = [
  {
    title: 'Lenguajes',
    items: [
      icon('JavaScript', siJavascript),
      icon('TypeScript', siTypescript),
      icon('PHP', siPhp),
      { name: 'C#', color: '9B4F96', monogram: 'C#' },
    ],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      icon('React', siReact),
      icon('React Native', siReact),
      icon('HTML5', siHtml5),
      icon('CSS3', siCss, '1572B6'),
    ],
  },
  {
    title: 'Backend & Frameworks',
    items: [
      icon('Node.js', siNodedotjs),
      // icon('Express.js', siExpress, LIGHT),
      icon('Laravel', siLaravel),
      icon('CodeIgniter', siCodeigniter),
      icon('.NET', siDotnet, '8C6CEB'),
    ],
  },
  {
    title: 'Bases de datos',
    items: [
      { name: 'SQL Server', color: 'CC2927', monogram: 'SQL' },
      icon('PostgreSQL', siPostgresql, '5A8BE8'),
      icon('MySQL', siMysql, '5C9BD1'),
    ],
  },
  {
    title: 'Automatización & Herramientas',
    items: [
      icon('n8n', siN8n, 'EA4B71'),
      icon('Git', siGit),
      icon('GitHub', siGithub, LIGHT),
      icon('GitLab', siGitlab ),
      icon('Postman', siPostman),
    ],
  },
]

export const learning: { techs: Tech[]; points: string[] }[] = [
  // {
  //   techs: [icon('Python', siPython, '4B8BBE')],
  //   points: [
  //     'Fortaleciendo conocimientos en programación y estructuras de datos.',
  //     'Explorando el análisis de datos y la automatización de tareas con Python.',
  //   ],
  // },
  {
    techs: [icon('Flutter', siFlutter, '54C5F8'), icon('Dart', siDart, '40C4FF')],
    points: [
      'Aprendiendo desarrollo de aplicaciones móviles multiplataforma.',
      'Explorando Dart y los componentes (widgets) de Flutter.',
      'Creando interfaces móviles responsivas y amigables para el usuario.',
    ],
  },
]

export const interests = [
  'Arquitectura de software y patrones de diseño',
  'Diseño web responsive',
  'Buenas prácticas de desarrollo y testing',
  'Automatización e integración de sistemas',
  'Optimización de bases de datos y procesos',
]
