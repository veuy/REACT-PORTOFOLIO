import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import References from './pages/References'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdminDashboard from './pages/admin/AdminDashboard'
import ProjectList from './pages/admin/ProjectList'
import ProjectForm from './pages/admin/ProjectForm'
import ServiceList from './pages/admin/ServiceList'
import ServiceForm from './pages/admin/ServiceForm'
import ReferenceList from './pages/admin/ReferenceList'
import ReferenceForm from './pages/admin/ReferenceForm'
import UserList from './pages/admin/UserList'
import UserForm from './pages/admin/UserForm'
import ProtectedRoute from './components/ProtectedRoute'
import { isAuthenticated } from './api'
import logoImage from './assets/logo.png'

const navItems = [
  { path: '/', label: 'Home', end: true },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/services', label: 'Services' },
  { path: '/references', label: 'References' },
  { path: '/contact', label: 'Contact' },
  ...(isAuthenticated() ? [{ path: '/admin', label: 'Admin' }] : []),
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
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path="/admin/projects" element={<ProtectedRoute><ProjectList /></ProtectedRoute>} />
        <Route path="/admin/projects/new" element={<ProtectedRoute><ProjectForm /></ProtectedRoute>} />
        <Route path="/admin/projects/:id/edit" element={<ProtectedRoute><ProjectForm /></ProtectedRoute>} />
        <Route path="/admin/services" element={<ProtectedRoute><ServiceList /></ProtectedRoute>} />
        <Route path="/admin/services/new" element={<ProtectedRoute><ServiceForm /></ProtectedRoute>} />
        <Route path="/admin/services/:id/edit" element={<ProtectedRoute><ServiceForm /></ProtectedRoute>} />
        <Route path="/admin/references" element={<ProtectedRoute><ReferenceList /></ProtectedRoute>} />
        <Route path="/admin/references/new" element={<ProtectedRoute><ReferenceForm /></ProtectedRoute>} />
        <Route path="/admin/references/:id/edit" element={<ProtectedRoute><ReferenceForm /></ProtectedRoute>} />
        <Route path="/admin/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
        <Route path="/admin/users/new" element={<ProtectedRoute><UserForm /></ProtectedRoute>} />
        <Route path="/admin/users/:id/edit" element={<ProtectedRoute><UserForm /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
