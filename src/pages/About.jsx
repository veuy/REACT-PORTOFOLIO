import faceImage from '../assets/face.png'

export default function About() {
  return (
    <main className="page-shell about-page">
      <section className="content-grid">
        <article className="profile-card">
          <div className="profile-header">
            <h1>Vincent Ely Uy</h1>
            <p className="profile-role">Software Engineering Student</p>
          </div>
          <p>I am a software engineering student focused on learning the full software engineering process of building applications, from planning and design to development and iteration. While my primary focus is understanding how to effectively build and structure applications, I am also developing skills in other areas of software engineering such as web development using HTML, CSS, and JavaScript, as well as version control with Git and GitHub. I am passionate about learning and building applications, particularly educational tools that can help others learn, and I also aspire to develop mobile apps and games in the future. I continuously work on improving my abilities by building projects and gaining hands-on experience. Outside of software engineering, I enjoy watching anime, listening to tech podcasts, and playing video games.</p>
          <a className="button button-primary" href="/resume.pdf" target="_blank" rel="noopener">Download Resume</a>
        </article>

        <aside className="profile-visual">
          <div className="avatar-wrapper">
            <img src={faceImage} alt="Portrait illustration" className="avatar-image" />
          </div>
        </aside>
      </section>
    </main>
  )
}
