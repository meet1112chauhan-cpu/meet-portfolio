import { useState, useEffect, useRef } from 'react'

/* ─── Navbar Component ─── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.getElementById(targetId)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <div className="nav-logo" onClick={(e) => handleNavClick(e, 'hero')}>
          PARTH's Portfolio
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

/* ─── Typed Text Component ─── */
function TypedText() {
  const strings = ['College Student for IT.', 'Video Editor.', 'Trader.', 'Web Developer.']
  const [text, setText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[stringIndex]
    let timeout

    if (!isDeleting && charIndex < currentString.length) {
      timeout = setTimeout(() => {
        setText(currentString.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 50)
    } else if (!isDeleting && charIndex === currentString.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1500)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentString.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 30)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setStringIndex((stringIndex + 1) % strings.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, stringIndex])

  return (
    <div className="typed-text">
      {text}<span className="typed-cursor">|</span>
    </div>
  )
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">
            <span className="highlight">Patel Parth</span>
          </h1>
          <p className="hero-subtitle">and I am a passionate</p>
          <TypedText />
          <div className="hero-cta">
            <a href="/resume.jpeg" className="btn-primary" download>
              <i className="fas fa-download"></i> Download Resume
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}>
              <i className="fas fa-paper-plane"></i> Contact Me
            </a>
          </div>
          <div className="hero-socials">
            <a href="https://www.instagram.com/patel_parth1310/profilecard/?igsh=anI0ZXM5OTV6Y2tj" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/patel-parth-87b048250" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/parth64-71" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:patelparth4803@gmail.com" className="social-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/profile-pic.jpeg" alt="Patel Parth" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── About Section ─── */
function AboutSection() {
  const [showMore, setShowMore] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <hr className="section-divider" />
      <section id="about" className="section reveal" ref={ref}>
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/bg.png" alt="About Parth" className="about-img" />
          </div>
          <div className="about-text">
            <p className="about-description">
              I Study Information Technology in{' '}
              <span className="college-highlight">
                Sardar Vallabhbhai Patel Institute Of Technology in Vasad.
              </span>{' '}
              Skilled in front-end technologies like HTML, CSS, JavaScript, and frameworks.
            </p>
            <div className={`about-more-text ${showMore ? 'show' : ''}`}>
              <p className="about-description">
                Continuously learning and adapting to the latest web development trends and
                technologies and I also learn Python. I'm passionate about creating beautiful and
                functional user experiences.
              </p>
            </div>
            <button className="btn-readmore" onClick={() => setShowMore(!showMore)}>
              {showMore ? '← Read Less' : 'Read More →'}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

/* ─── Skills Section ─── */
function SkillsSection() {
  const ref = useRef(null)

  const skills = [
    { name: 'HTML', image: '/html.png' },
    { name: 'CSS', image: '/css.png' },
    { name: 'JavaScript', image: '/js.png' },
    { name: 'Python', image: '/python.png' },
    { name: 'MySQL', image: '/mysql.png' },
    { name: 'C', image: '/c.png' },
    { name: 'Java', image: '/java.png' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <hr className="section-divider" />
      <section id="skills" className="section reveal" ref={ref}>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={skill.name}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={skill.image} alt={skill.name} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

/* ─── Contact Section ─── */
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
    const mailtoLink = `mailto:patelparth4803@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  const contactLinks = [
    {
      icon: 'fab fa-instagram',
      label: 'Instagram',
      value: '@patel_parth1310',
      href: 'https://www.instagram.com/patel_parth1310/profilecard/?igsh=anI0ZXM5OTV6Y2tj',
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'Patel Parth',
      href: 'https://www.linkedin.com/in/patel-parth-87b048250',
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'parth64-71',
      href: 'https://github.com/parth64-71',
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'patelparth4803@gmail.com',
      href: 'mailto:patelparth4803@gmail.com',
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

/* ─── Footer Component ─── */
function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with <span className="footer-heart">❤</span> by Patel Parth © {new Date().getFullYear()}
      </p>
    </footer>
  )
}

/* ─── Background Particles ─── */
function BackgroundParticles() {
  return (
    <div className="bg-particles">
      <div className="particle"></div>
      <div className="particle"></div>
      <div className="particle"></div>
    </div>
  )
}

/* ─── Main App ─── */
function App() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
