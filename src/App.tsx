import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import portraitImg from './assets/karen-portrait.webp'
import cvUrl from './utils/Karen_Ocampo_CV.pdf'
import { ImageSlider } from './components/ImageSlider'
import { TechChip } from './components/TechLogo'
import { getProjectImages } from './data/projectImages'
import { interests, learning, skillGroups } from './data/skills'
import './App.css'
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';

const projects = [
  {
    number: '01',
    category: 'Automatización',
    title: 'Consumo de Correos y Extracción Automatizada de Datos en Documentos',
    description:
      'El flujo monitorea una bandeja de correo de mensajes entrantes, identifica archivos adjuntos y extrae datos estructurados para enviarlos a una hoja de calculo.Elimina el copiado manual de datos desde correos y archivos, acelera el procesamiento y estandariza la información.',
    tags: ['n8n','Automatización']
  },
   {
    number: '02',
    category: 'Automatización',
    title: 'Sincronización y Actualización de Base de Datos vía Endpoint',
    description:
      'Recepción de datos mediante endpoint con validación de estructura y campos. Actualizando o insertando los registros evitando duplicados.Evita actualizaciones manuales, mantiene la información sincronizada entre servicios y reduce errores de captura.',
    tags: ['n8n','Automatización']
  },
  {
    number: '03',
    category: 'Dessarrollo web',
    title: 'Reconversión de sistema legacy a Arquitectura Moderna',
    description:
      'Migración de sistema heredado en .NET a una arquitectura moderna con React y Node.js, Personalización de componentes de diseño y creación de componentes propios reutilizables. Desarrollo de formularios y tablas configurables por parámetros para evitar duplicar código',
    tags: ['React js', 'Node.js','APIs REST','Migracion Legacy (.NET)'],
  },
  {
    number: '04',
    category: 'Desarrollo móvil',
    title: 'Módulo Móvil Offline para Gestión de Registros',
    description:
      'Descarga de datos maestros para autocompletar selectores, junto con captura de fecha y campos obligatorios en formulario. Almacenamiento en base local con soporte para trabajo offline y edición de registros antes de enviarlos.Envío posterior de registros pendientes al servidor al restablecerse la conexión, manteniendo trazabilidad del estado.',
    tags: ['React Native','SQLite','APIs REST']
  },
  {
    numer: '05',
    category: 'Desarrollo móvil',
    title: 'App Móvil de Gestión Financiera y Operativa (Carwash)',
    description:
      'Diseño de interfaz, estructura de navegación, lógica de negocio y persistencia de datos de principio a fin. Desarrollo integral de una aplicación móvil en React Native para administrar servicios realizados, ingresos, egresos y rentabilidad diaria de un negocio de lavado de autos.Panel de reportes con métricas filtradas por hoy, semana y mes para visualizar ingresos, egresos y utilidad neta al instante.',
    tags: ['React Native','SQLite','APIs REST']
  }
]

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Karen Ocampo, inicio">
          <span className="brand-mark">K</span>
          <span>Karen Ocampo</span>
        </a>
        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#proyectos">Proyectos</a>
        </nav>
        <a className="nav-contact" href="#contacto">
          Contáctame <ArrowUpRight aria-hidden="true" />
        </a>
      </header>

      <section className="hero-section page-width" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> Disponible para proyectos</p>
          <h1>
            Hola, soy <span>Karen</span>.
            <br />
            Creo experiencias
            <br className="desktop-break" /> para la web.
          </h1>
          <p className="hero-role">Systems Engineer · Full-Stack Developer</p>
          <p className="hero-description">
            Diseño, desarrollo e integro aplicaciones web y móviles eficientes,
            con buenas experiencias para quienes las usan.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#proyectos">
              Ver proyectos <ArrowDown aria-hidden="true" />
            </a>
            
            <a className="button button-secondary" href={cvUrl} download="Karen_Ocampo_CV.pdf">
              Descargar CV <Download aria-hidden="true" />
            </a>       
          </div>
          <div className="hero-socials" aria-label="Redes sociales">
            <a href="https://github.com/ckarenocampo" target="_blank" rel="noreferrer">
              <ArrowUpRight aria-hidden="true" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/karen-ocampo/"
              target="_blank"
              rel="noreferrer"
            >
              <ArrowUpRight aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-glow" aria-hidden="true" />
          <div className="art-ring art-ring-one" aria-hidden="true" />
          <div className="art-ring art-ring-two" aria-hidden="true" />
          <div className="hero-portrait">
            <img src={portraitImg} className="hero-image" alt="Retrato de Karen Ocampo" />
          </div>
          <span className="art-caption">Diseño · Código · Impacto</span>
        </div>
      </section>

      <section className="content-section page-width" id="sobre-mi">
        <div className="section-heading">
          <p className="eyebrow">Sobre mí</p>
          <h2>Ideas con intención.<br /><span>Código con propósito.</span></h2>
        </div>
        <div className="about-copy">
          <p>
            Soy Ingeniera en Sistemas y Desarrolladora
            Full-Stack con experiencia en el diseño, desarrollo e integración de
            aplicaciones web y móviles.
          </p>
          <p>
            Trabajo con tecnologías como React, React Native, Node.js, PHP y
            .NET, además de gestión de bases de datos y automatización de
            procesos mediante n8n.
          </p>
          <p>
            Me interesa crear soluciones tecnológicas eficientes, optimizar
            procesos y desarrollar aplicaciones que ofrezcan buenas
            experiencias. También disfruto colaborar con equipos, compartir
            conocimientos y explicar soluciones técnicas.
          </p>
          <a className="text-link" href="mailto:cindykarenocampo@gmail.com">
            Contáctame <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="skills-section" id="habilidades">
        <div className="page-width">
          <div className="skills-heading">
            <p className="eyebrow">Habilidades</p>
            <h2>Tecnologías y<br />herramientas.</h2>
          </div>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="tech-list">
                  {group.items.map((tech) => <TechChip key={tech.name} tech={tech} />)}
                </ul>
              </div>
            ))}
          </div>

          <div className="growth-grid">
            <div className="growth-card">
              <h3>Actualmente aprendiendo</h3>
              {learning.map((item) => (
                <div className="learning-item" key={item.techs[0].name}>
                  <ul className="tech-list">
                    {item.techs.map((tech) => <TechChip key={tech.name} tech={tech} />)}
                  </ul>
                  <ul className="learning-points">
                    {item.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div className="growth-card">
              <h3>Otras áreas de interés</h3>
              <ul className="interest-list">
                {interests.map((interest) => <li key={interest}>{interest}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section page-width" id="proyectos">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">Lo que puedo hacer</p>
            <h2>Proyectos e ideas</h2>
            <p className="project-description">
              Cada proyecto comienza con una buena pregunta y termina con algo
              que hace la vida un poco más fácil.
            </p>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              {/* <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <ArrowUpRight className="project-arrow" aria-hidden="true" />
              </div> */}
              <ImageSlider images={getProjectImages(String(project.number))} title={project.title} />
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer className="contact-section" id="contacto">
        <div className="page-width contact-inner">
          <div>
            <p className="eyebrow">¿Tienes una idea?</p>
            <h2>Hagamos algo<br /><span>increíble juntos.</span></h2>
          </div>
          <a className="button button-primary contact-button" href="mailto:cindykarenocampo@gmail.com">
            cindykarenocampo@gmail.com <ArrowUpRight aria-hidden="true" />
          </a>
          <div className="footer-bottom">
            <a className="brand" href="#inicio">
              <span className="brand-mark">K</span>
              <span>Karen Ocampo</span>
            </a>
            <p>Diseñado y desarrollado</p>
            <span>© {new Date().getFullYear()} Karen Ocampo</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
