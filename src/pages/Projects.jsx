import { useEffect, useState } from 'react'
import { projectsApi } from '../api'

export default function Projects() {
  const [projectList, setProjectList] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    projectsApi
      .getAll()
      .then(setProjectList)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <main className="page-shell projects-page">
      <section className="page-panel">
        <h1>Projects</h1>
        <p>Explore some of my recent work, including games, productivity tools, and interactive learning experiences.</p>
        {error && <p className="admin-error">{error}</p>}
      </section>

      <section className="project-grid">
        {projectList.map((project) => (
          <article key={project._id || project.id} className="project-card">
            <div className="project-card-media">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-card-title">{project.title}</div>
            </div>

            <div className="project-card-body">
              <p className="project-description">{project.description}</p>
              <div className="project-stack-label">Completion</div>
              <div className="project-tags">
                <span className="project-tag">
                  {project.completion
                    ? new Date(project.completion).toLocaleDateString()
                    : '—'}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
