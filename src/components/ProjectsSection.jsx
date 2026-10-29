import { useEffect, useRef } from 'react'

function ProjectsSection() {
  const ref = useRef(null)

  const projects = [
    {
      title: 'Hostel Management System',
      description: 'A full-stack booking platform for desert safari experiences. Built with React.js for the frontend and Node.js/Express for the backend with MongoDB database.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      icon: 'fas fa-campground',
      color: '#f59e0b',
      github: 'https://github.com/meet1112chauhan-cpu',
      live: '#',
    },
    {
      title: 'Voting Management System',
      description: 'A modern, responsive portfolio website showcasing my skills and projects. Features smooth animations, typed text effects, and glassmorphism design.',
      tech: ['React.js', 'CSS3', 'Vite'],
      icon: 'fas fa-laptop-code',
      color: '#8b5cf6',
      github: 'https://github.com/meet1112chauhan-cpu',
      live: '#',
    },
    {
      title: 'Attendance Management System',
      description: 'Professional video editing work including promotional content, social media reels, and creative visual storytelling using modern editing tools.',
      tech: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'],
      icon: 'fas fa-video',
      color: '#ef4444',
      github: 'https://github.com/meet1112chauhan-cpu',
      live: '#',
    },
  ]

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

  return (
    <>
      <hr className="section-divider" />
      <section id="projects" className="section reveal" ref={ref}>
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className="project-card"
              key={project.title}
              style={{ '--accent': project.color, animationDelay: `${index * 0.15}s` }}
            >
              <div className="project-card-header">
                <div className="project-icon" style={{ background: `${project.color}20`, color: project.color }}>
                  <i className={project.icon}></i>
                </div>
                <div className="project-links">
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsSection
