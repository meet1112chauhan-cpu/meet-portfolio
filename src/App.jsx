import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import BackgroundParticles from './components/BackgroundParticles'

function App() {
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
