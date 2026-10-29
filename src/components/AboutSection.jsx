import { useState, useEffect, useRef } from 'react'

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
            <img src="/bg.png" alt="About Meet" className="about-img" />
          </div>
          <div className="about-text">
            <p className="about-description">
              I am pursuing MCA (Master of Computer Applications) from{' '}
              <span className="college-highlight">
                UKA Tarsadia University
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

export default AboutSection
