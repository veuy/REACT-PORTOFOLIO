import zedImage from '../assets/ZedMmo.png'
import brainrotiedImage from '../assets/Brainrotied.png'
import camelImage from '../assets/CamelAlaPakaDuck.png'

const projectList = [
  {
    title: 'ZedMMO',
    description: 'A multiplayer zombie survival game where players scavenge for resources, build fortified bases, and fight to survive in a persistent post-apocalyptic world.',
    tech: ['Unity', 'C#', 'Java', 'Spring Boot', 'Netty', 'PostgreSQL', 'AWS', 'Blender'],
    image: zedImage,
  },
  {
    title: 'Brainrotied',
    description: 'A gamified productivity app that helps users reduce screen time through focus challenges, streaks, achievements, and brainrot-themed rewards.',
    tech: ['Kotlin', 'Jetpack Compose', 'Java', 'Spring Boot', 'REST API', 'PostgreSQL', 'FCM', 'Figma', 'Git'],
    image: brainrotiedImage,
  },
  {
    title: 'CamelAlaPakaDuck',
    description: 'A gamified language-learning platform that teaches animal names, sounds, and phonetics through rapid-fire mini-games.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Java', 'Spring Boot', 'PostgreSQL', 'Firebase Auth', 'Web Speech API', 'Docker', 'AWS', 'Figma', 'Git', 'GitHub'],
    image: camelImage,
  },
]

export default function Projects() {
  return (
    <main className="page-shell projects-page">
      <section className="page-panel">
        <h1>Projects</h1>
        <p>Explore some of my recent work, including games, productivity tools, and interactive learning experiences.</p>
      </section>

      <section className="project-grid">
        {projectList.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card-media">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-card-title">{project.title}</div>
            </div>

            <div className="project-card-body">
              <p className="project-description">{project.description}</p>
              <div className="project-stack-label">Tech Stack</div>
              <div className="project-tags">
                {project.tech.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
