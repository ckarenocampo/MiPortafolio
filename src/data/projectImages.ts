// Loads every image placed in src/assets/projects/<number>/ automatically.
// Example: src/assets/projects/01/1-flujo.png, src/assets/projects/01/2-hoja.png
// Images are shown in filename order, so prefix them with 1-, 2-, 3-...
const files = import.meta.glob<string>(
  '../assets/projects/*/*.{png,jpg,jpeg,webp,avif,gif}',
  { eager: true, import: 'default' },
)

const byProject: Record<string, string[]> = {}

for (const path of Object.keys(files).sort((a, b) =>
  a.localeCompare(b, undefined, { numeric: true }),
)) {
  const folder = path.split('/').at(-2)!
  ;(byProject[folder] ??= []).push(files[path])
}

export function getProjectImages(projectNumber: string): string[] {
  return byProject[projectNumber] ?? []
}
