export default function References() {
  return (
    <main className="page-shell references-page">
      <section className="page-panel">
        <h1>References & Testimonials</h1>
        <p>Here are a few references from clients and collaborators who have worked with me on full-stack, mobile, and web development projects.</p>
      </section>

      <section className="references-grid">
        {testimonialData.map((item) => (
          <article key={item.name} className="reference-card">
            <div className="reference-card-header">
              <h2>{item.name}</h2>
              <p className="reference-role">{item.role}</p>
              <p className="reference-company">{item.company}</p>
            </div>
            <p className="reference-text">“{item.testimonial}”</p>
          </article>
        ))}
      </section>
    </main>
  )
}
