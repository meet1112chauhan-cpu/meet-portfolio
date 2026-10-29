import { useState, useEffect } from 'react'

function TypedText() {
  const strings = ['MCA Student.', 'Video Editor.', 'Trader.', 'Web Developer.']
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

function HeroSection() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">👋 Hello, I'm</p>
          <h1 className="hero-name">
            <span className="highlight">Meet Chauhan</span>
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
            <a href="https://www.instagram.com/meetu_1110?vrfl=MTc2OGk3ZGFyYzByaA==" target="_blank" rel="noopener noreferrer" className="social-link" title="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/meet-chauhan-585ba0351" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/meet1112chauhan-cpu" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:meet1112chauhan@gmail.com" className="social-link" title="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img src="/profile-pic.jpeg" alt="Meet Chauhan" className="hero-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
