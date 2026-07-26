import { useEffect, useState } from 'react'
import { referencesApi } from '../api'

export default function References() {
  const [references, setReferences] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    referencesApi
      .getAll()
      .then(setReferences)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <main className="page-shell references-page">
      <section className="page-panel">
        <h1>References & Testimonials</h1>
        <p>Here are a few references from clients and collaborators who have worked with me on full-stack, mobile, and web development projects.</p>
        {error && <p className="admin-error">{error}</p>}
      </section>

      <section className="references-grid">
        {references.map((item) => (
          <article key={item._id} className="reference-card">
            <div className="reference-card-header">
              <h2>{item.name}</h2>
              <p className="reference-role">{item.position}</p>
              <p className="reference-company">{item.company}</p>
            </div>
            <p className="reference-text">{item.testimonial ? `"${item.testimonial}"` : ''}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
