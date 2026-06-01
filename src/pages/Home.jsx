import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="page-shell home-page">
      <section className="hero-panel">
        <p className="eyebrow">Software Engineering Portfolio</p>
        <h1 className="hero-title">Hi, I'm Vincent an aspiring Software Engineer.</h1>
        <p className="hero-copy">Welcome to my portfolio. Appreciate you for checking it out 🫡.</p>
        <div className="action-bar">
          <Link className="button button-primary" to="/about">About Me</Link>
          <Link className="button button-secondary" to="/projects">View Projects</Link>
        </div>
      </section>

      <section className="mission-card">
        <div>
          <h2>Mission Statement</h2>
          <p>Software engineering student dedicated to building and learning about robust foundational skills today, while innovating mobile app development for tomorrow.</p>
        </div>
      </section>
    </main>
  )
}
