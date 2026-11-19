import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import portraitImg from './assets/karen-portrait.webp'
import cvUrl from './utils/Karen_Ocampo_CV.pdf'
import './App.css'

const skills = ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Vite', 'Git']

const projects = [
  {
    number: '01',
    category: 'Desarrollo web',
    title: 'Tu próximo proyecto',
    description:
      'Una idea convertida en una experiencia digital clara, rápida y fácil de usar.',
    tags: ['React', 'Diseño responsive'],
  },
  {
    number: '02',
    category: 'Diseño de interfaces',
    title: 'Experiencias centradas en las personas',
    description:
      'Interfaces intuitivas que combinan una estética cuidada con funcionalidad.',
    tags: ['UI', 'Accesibilidad'],
  },
  {
    number: '03',
    category: 'En colaboración',
    title: 'Hagámoslo realidad',
    description:
      'Estoy abierta a colaborar en proyectos interesantes y seguir aprendiendo.',
    tags: ['Ideas', 'Colaboración'],
  },
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
          <p className="hero-description">
            Desarrolladora de software enfocada en crear sitios y aplicaciones
            atractivos, accesibles y fáciles de usar.
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
            Me apasiona construir productos digitales que se sientan tan bien
            como funcionan. Disfruto cada etapa: entender el problema, cuidar
            los detalles y convertir ideas en interfaces útiles.
          </p>
          <p>
            Siempre estoy aprendiendo y buscando nuevos retos que me permitan
            crecer como desarrolladora y aportar a proyectos con impacto.
          </p>
          <a className="text-link" href="mailto:cindykarenocampo@gmail.com">
            Contáctame <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="skills-section" id="habilidades">
        <div className="page-width skills-inner">
          <div>
            <p className="eyebrow">Habilidades</p>
            <h2>Habilidades para<br />crear en la web.</h2>
          </div>
          <ul className="skill-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="projects-section page-width" id="proyectos">
        <div className="projects-heading">
          <div>
            <p className="eyebrow">Lo que puedo hacer</p>
            <h2>Proyectos e ideas</h2>
          </div>
          <p>
            Cada proyecto comienza con una buena pregunta y termina con algo
            que hace la vida un poco más fácil.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">{project.number}</span>
                <ArrowUpRight className="project-arrow" aria-hidden="true" />
              </div>
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
            <p>Diseñado y desarrollado con intención.</p>
            <span>© {new Date().getFullYear()} Karen Ocampo</span>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
