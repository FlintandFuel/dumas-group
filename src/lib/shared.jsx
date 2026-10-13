import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

// Flip to true once the capability pack document is final. Hides every CTA, link and the section itself.
export const SHOW_CAPABILITY_PACK = false

// Privacy notice review state. While true the page shows a draft banner and is noindexed.
// Published 13 October 2026 with the client's company details; set back to true to re-draft.
export const PRIVACY_NOTICE_DRAFT = false

// The server (go-live) build sets VITE_HIDE_PRIVACY=1 so the draft page and its footer links stay out of
// the public site until the notice is approved. The GitHub Pages review build leaves it unset.
export const SHOW_PRIVACY_NOTICE = import.meta.env.VITE_HIDE_PRIVACY !== '1'

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

export function SectionLabel({ label, dark = false }) {
  const tint = dark ? 'text-[#9BA0A6]' : 'text-[#71767C]'
  return (
    <p className={`font-mono text-[11px] font-medium tracking-[0.22em] uppercase ${tint} mb-6 select-none`}>
      {label}
    </p>
  )
}

// Per-route SEO: document title, meta description, canonical, Open Graph / Twitter tags and
// optional JSON-LD. The static tags in index.html cover the homepage for crawlers that don't run
// JavaScript; scripts/prerender.cjs bakes each route's values into its own static HTML file.
export const SITE_URL = 'https://dumasgroup.co.za'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-dumas-group.jpg`

export function usePageMeta({ title, description, canonical, image = DEFAULT_OG_IMAGE, noindex = false, jsonLd }) {
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : ''

  useEffect(() => {
    if (title) document.title = title

    const setTag = (attr, key, content) => {
      if (!content) return
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setTag('name', 'description', description)
    setTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setTag('property', 'og:title', title)
    setTag('property', 'og:description', description)
    setTag('property', 'og:url', canonical)
    setTag('property', 'og:image', image)
    setTag('name', 'twitter:title', title)
    setTag('name', 'twitter:description', description)
    setTag('name', 'twitter:image', image)

    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', canonical)
    }

    // Drop the copy baked in by the prerender step (or by a previous route) before adding ours.
    document.querySelectorAll('script[data-page-jsonld]').forEach((n) => n.remove())
    let ld = null
    if (jsonLdText) {
      ld = document.createElement('script')
      ld.type = 'application/ld+json'
      ld.setAttribute('data-page-jsonld', '')
      ld.textContent = jsonLdText
      document.head.appendChild(ld)
    }
    return () => ld?.remove()
  }, [title, description, canonical, image, noindex, jsonLdText])
}
