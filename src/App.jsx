import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import References from './pages/References'
import Contact from './pages/Contact'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProjectList from './pages/admin/ProjectList'
import ProjectForm from './pages/admin/ProjectForm'
import ServiceList from './pages/admin/ServiceList'
import ServiceForm from './pages/admin/ServiceForm'
import ReferenceList from './pages/admin/ReferenceList'
import ReferenceForm from './pages/admin/ReferenceForm'
import UserList from './pages/admin/UserList'
import UserForm from './pages/admin/UserForm'
import logoImage from './assets/logo.png'

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/references', label: 'References' },
  { path: '/contact', label: 'Contact' },
  { path: '/admin', label: 'Admin' },
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
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<ProjectList />} />
        <Route path="/admin/projects/new" element={<ProjectForm />} />
        <Route path="/admin/projects/:id/edit" element={<ProjectForm />} />
        <Route path="/admin/services" element={<ServiceList />} />
        <Route path="/admin/services/new" element={<ServiceForm />} />
        <Route path="/admin/services/:id/edit" element={<ServiceForm />} />
        <Route path="/admin/references" element={<ReferenceList />} />
        <Route path="/admin/references/new" element={<ReferenceForm />} />
        <Route path="/admin/references/:id/edit" element={<ReferenceForm />} />
        <Route path="/admin/users" element={<UserList />} />
        <Route path="/admin/users/new" element={<UserForm />} />
        <Route path="/admin/users/:id/edit" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
