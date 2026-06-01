import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import References from './pages/References'
import Contact from './pages/Contact'
import logoImage from './assets/logo.png'

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/references', label: 'References' },
  { path: '/contact', label: 'Contact' },
]

function App() {
  return (
    <BrowserRouter>
      <header className="site-header">
        <Link className="brand" to="/">
          <div className="logo">
            <img src={logoImage} alt="Vincent Ely Uy logo" />
          </div>
          <span>Vincent Ely Uy</span>
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/references" element={<References />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
