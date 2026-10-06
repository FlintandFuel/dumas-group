import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import OurCompanies from './pages/OurCompanies'
import CSI from './pages/CSI'
import CommoditiesPage from './pages/CommoditiesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import CapabilityPackPage from './pages/CapabilityPackPage'
import { SHOW_CAPABILITY_PACK } from './lib/shared'
import './index.css'

// Scrolls to a #hash target on navigation (client-side routing doesn't do this for you),
// or to the top of the page when there is none.
function ScrollManager() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      // Wait a tick so the destination page has rendered its DOM first.
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return () => cancelAnimationFrame(raf)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="font-sans bg-[#FAFAF8] text-[#16171A] antialiased">
      <ScrollManager />
      <Nav alwaysSolid={!isHome} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-companies" element={<OurCompanies />} />
          <Route path="/corporate-social-investment" element={<CSI />} />
          <Route path="/commodities" element={<CommoditiesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/capability-pack" element={SHOW_CAPABILITY_PACK ? <CapabilityPackPage /> : <Navigate to="/contact" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
