const testimonialData = [
  {
    name: 'Sarah Mitchell',
    company: 'BrightWave Digital',
    role: 'Senior Product Manager',
    testimonial: 'Vincent delivered clean, reliable code and communicated clearly throughout the entire project. Even as a student, he approaches software engineering with a level of professionalism and discipline that stands out. I would happily work with him again.',
  },
  {
    name: 'Daniel Reyes',
    company: 'CloudCore Solutions',
    role: 'Lead Software Engineer',
    testimonial: 'Vincent showed strong full-stack development skills and a great ability to learn quickly. He handled both frontend and backend tasks with confidence and produced high-quality work on tight timelines. His problem-solving mindset made him a valuable contributor.',
  },
  {
    name: 'Emily Carter',
    company: 'NovaTech Creative',
    role: 'Founder & Creative Director',
    testimonial: 'Vincent built a responsive, modern website for our agency and exceeded our expectations. He understood our vision, asked the right questions, and delivered a polished final product. His attention to detail and dedication were impressive.',
  },
  {
    name: 'Michael Tan',
    company: 'Apex Mobile Labs',
    role: 'Mobile App Developer',
    testimonial: 'Vincent assisted with mobile app development and quickly became a dependable part of the team. He writes clean code, tests thoroughly, and adapts well to new tools and frameworks. His enthusiasm for mobile development really shows.',
  },
  {
    name: 'Olivia Bennett',
    company: 'Northline Consulting',
    role: 'Operations Manager',
    testimonial: 'We hired Vincent to build a small internal tool, and he delivered exactly what we needed. He explained technical concepts in a simple way and made the entire process smooth. His professionalism and work ethic make him easy to recommend.',
  },
]

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
