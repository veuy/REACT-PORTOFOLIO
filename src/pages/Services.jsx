const services = [
  {
    title: 'Full-Stack Development',
    icon: '💻',
    description: 'I build end-to-end applications that cover both frontend and backend. From designing intuitive user interfaces to implementing secure server-side logic and databases, I create complete solutions that are scalable, maintainable, and optimized for real-world use.',
  },
  {
    title: 'Web Development',
    icon: '🌐',
    description: 'I develop responsive, accessible, and visually clean websites using modern web technologies. Whether it’s a personal site, landing page, or web app, I focus on performance, usability, and clean code to create fast experiences that look great on all devices.',
  },
  {
    title: 'Mobile App Development',
    icon: '📱',
    description: 'I design and build mobile applications with smooth user experiences and practical functionality. Using cross-platform tools like React Native, I create apps that run on both iOS and Android with a single codebase.',
  },
]

export default function Services() {
  return (
    <main className="page-shell services-page">
      <section className="page-panel">
        <h1>Services</h1>
        <p>These are the core capabilities I offer for digital product development, from application architecture to polished user experiences.</p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <div className="service-card-header">
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <h2>{service.title}</h2>
            </div>
            <p>{service.description}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
