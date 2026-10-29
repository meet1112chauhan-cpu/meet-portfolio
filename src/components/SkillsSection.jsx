import { useEffect, useRef } from 'react'

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

export default SkillsSection
