import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import TransformationsSection from './components/TransformationsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className='.body'>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TransformationsSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
      </div>
  )
}

export default App
