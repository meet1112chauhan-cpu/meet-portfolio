import { useState, useEffect, useRef } from 'react'

function ContactSection() {
  const ref = useRef(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:meet1112chauhan@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const contactLinks = [
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      value: '@meetu_1110',
      href: 'https://www.instagram.com/meetu_1110?vrfl=MTc2OGk3ZGFyYzByaA==',
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'Meet Chauhan',
      href: 'https://www.linkedin.com/in/meet-chauhan-585ba0351?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'meet1112chauhan',
      href: 'https://github.com/meet1112chauhan-cpu',
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'meet1112chauhan@gmail.com',
      href: 'mailto:meet1112chauhan@gmail.com',
    },
  ]

  return (
    <>
      <hr className="section-divider" />
      <section id="contact" className="section reveal" ref={ref}>
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Quick Contact</h3>
            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item"
                >
                  <div className="contact-icon">
                    <i className={link.icon}></i>
                  </div>
                  <div>
                    <div className="contact-label">{link.label}</div>
                    <div className="contact-value">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form-card">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <textarea
                placeholder="Your Message"
                className="form-textarea"
                id="contact-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className="btn-submit" id="contact-submit">
                <i className="fas fa-paper-plane"></i>&nbsp; Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactSection
