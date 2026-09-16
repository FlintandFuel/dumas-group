import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { img } from '../lib/shared'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Our Companies', to: '/our-companies' },
  { label: 'CSI', to: '/corporate-social-investment' },
  { label: 'Contact', to: '/contact' },
]

export default function Nav({ topOffset = 0, alwaysSolid = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const solid = alwaysSolid || scrolled

  return (
    <>
      <header
        style={{ top: topOffset }}
        className={`fixed left-0 right-0 z-50 transition-colors duration-300 ${
          solid ? 'bg-[#0A0B0D]/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="max-w-[1240px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
          <Link to="/" aria-label="Dumas Group home" className="flex items-center min-h-[44px]">
            <img src={img('logo-white.png')} alt="Dumas Group" className="w-auto" style={{ height: '55px' }} />
          </Link>

          <div className="hidden min-[1100px]:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#9BA0A6] hover:text-white transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/capability-pack"
              className="ml-1 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 border border-white/70 text-white hover:bg-white hover:text-[#0A0B0D] transition-all duration-200 min-h-[44px] inline-flex items-center"
            >
              Request Capability Pack
            </Link>
          </div>

          <button
            className="min-[1100px]:hidden flex flex-col gap-[5px] p-2 min-h-[44px] min-w-[44px] items-center justify-center"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-200 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-[60] bg-[#0A0B0D] flex flex-col px-8 pt-10 pb-12 overflow-y-auto"
          >
            <div className="flex justify-end mb-10">
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="relative flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px]"
              >
                <span className="block w-7 h-px bg-white rotate-45 absolute" />
                <span className="block w-7 h-px bg-white -rotate-45 absolute" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.36 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-[2rem] font-light text-white/90 hover:text-white transition-colors tracking-wide min-h-[44px] flex items-center"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-10">
              <Link
                to="/capability-pack"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] font-semibold tracking-[0.2em] uppercase px-6 py-3 border border-white/70 text-white hover:bg-white hover:text-[#0A0B0D] transition-all duration-200"
              >
                Request Capability Pack
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
