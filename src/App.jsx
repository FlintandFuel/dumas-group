import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import Home from './pages/Home'
import OurCompanies from './pages/OurCompanies'
import CSI from './pages/CSI'
import ContactPage from './pages/ContactPage'
import CapabilityPackPage from './pages/CapabilityPackPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { SHOW_CAPABILITY_PACK, SHOW_PRIVACY_NOTICE } from './lib/shared'
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
          {/* Retired and legacy URLs. The server (.htaccess) issues the real 301s; these keep the
              GitHub Pages preview and any in-app navigation consistent. */}
          <Route path="/commodities" element={<Navigate to="/our-companies/" replace />} />
          <Route path="/sector-focus" element={<Navigate to="/our-companies/" replace />} />
          <Route path="/projects" element={<Navigate to="/#projects" replace />} />
          <Route path="/boffin" element={<Navigate to="/our-companies/#company-boffin" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={SHOW_PRIVACY_NOTICE ? <PrivacyPolicy /> : <Navigate to="/" replace />} />
          <Route path="/cookie-policy-za" element={<Navigate to={SHOW_PRIVACY_NOTICE ? '/privacy-policy/#cookies' : '/'} replace />} />
          <Route path="/capability-pack" element={SHOW_CAPABILITY_PACK ? <CapabilityPackPage /> : <Navigate to="/contact" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  )
}
