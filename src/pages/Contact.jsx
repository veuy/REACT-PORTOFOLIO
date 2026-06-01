import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'

export default function Contact() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const emailParams = {
      to_email: 'vincentelyuy5@gmail.com',
      from_name: `${formData.firstName} ${formData.lastName}`,
      contact_number: formData.contactNumber,
      from_email: formData.email,
      message: formData.message
    }

    try {
      await emailjs.send(
        'service_wm4w9ow',
        'template_7azv6tt',
        emailParams,
        'Va76v6KUVo_IAjdBD'
      )
      
      navigate('/')
    } catch (err) {
      setError('Failed to send message.')
      console.error(err)
      setLoading(false)
    }
  }

  return (
    <main className="page-shell contact-page">
      <section className="content-grid">
        <article className="profile-card contact-info-card">
          <h1>Get In Touch</h1>
          <p>Feel free to reach out using the contact information below or submit the form to send me a message.</p>
          
          <div className="detail-panel">
            <h2>Contact Information</h2>
            <ul>
              <li>
                <strong>Email:</strong> <a href="mailto:vincentelyuy5@gmail.com">vincentelyuy5@gmail.com</a>
              </li>
              <li>
                <strong>Phone:</strong> <a href="tel:+16475129690">(647) 512-9690</a>
              </li>
            </ul>
          </div>
        </article>

        <article className="profile-card contact-form-card">
          <h2>Send a Message</h2>
          {error && <p style={{ color: '#ff6b6b', marginBottom: '1rem' }}>{error}</p>}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="button button-primary"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}
