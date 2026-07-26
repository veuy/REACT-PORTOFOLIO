import { useEffect, useState } from 'react'
import { servicesApi } from '../api'

const icons = ['💻', '🌐', '📱', '⚙️', '🔧', '🚀', '📊', '🎨']

export default function Services() {
  const [services, setServices] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    servicesApi
      .getAll()
      .then(setServices)
      .catch((err) => setError(err.message))
  }, [])

  return (
    <main className="page-shell services-page">
      <section className="page-panel">
        <h1>Services</h1>
        <p>These are the core capabilities I offer for digital product development, from application architecture to polished user experiences.</p>
        {error && <p className="admin-error">{error}</p>}
      </section>

      <section className="services-grid">
        {services.map((service, i) => (
          <article key={service._id} className="service-card">
            <div className="service-card-header">
              <span className="service-icon" aria-hidden="true">
                {service.icon || icons[i % icons.length]}
              </span>
              <h2>{service.title}</h2>
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
