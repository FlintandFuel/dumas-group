import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export const img = (filename) => `${import.meta.env.BASE_URL}images/${filename}`

export function FadeUp({ children, delay = 0, className = '', ...rest }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      {...rest}
      initial={reduced ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: { opacity: 0, y: reduced ? 0 : 26 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
}

export const fadeUpItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export function SectionLabel({ number, label, dark = false }) {
  const tint = dark ? 'text-[#9BA0A6]' : 'text-[#71767C]'
  const line = dark ? 'bg-[#9BA0A6]' : 'bg-[#71767C]'
  const hasNumber = number && number !== '—'
  return (
    <p className={`font-mono flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] uppercase ${tint} mb-6 select-none`}>
      {hasNumber && <span>{number}</span>}
      <span className={`w-6 h-px inline-block ${line}`} />
      {label}
    </p>
  )
}

// Sets document title, meta description and canonical link per-route. No react-helmet
// dependency — this is a small enough surface to manage directly via useEffect.
export function usePageMeta({ title, description, canonical, noindex = false }) {
  useEffect(() => {
    if (title) document.title = title

    const setMeta = (name, content) => {
      if (!content) return
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute('name', name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }
    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }
  }, [title, description, canonical, noindex])
}
