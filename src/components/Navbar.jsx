import { useState, useEffect } from 'react'

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
          MEET's Portfolio
        </div>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={(e) => handleNavClick(e, 'hero')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
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

export default Navbar
