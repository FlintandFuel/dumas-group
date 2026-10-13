import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { SHOW_PRIVACY_NOTICE } from '../lib/shared'

// Google tag carried over from the old WordPress site (Site Kit). It feeds the GA4 property.
const GA_ID = 'GT-MKPD8ZJT'
const STORAGE_KEY = 'dumas-cookie-consent'
// Analytics only ever loads on the real domain, so review copies (e.g. GitHub Pages) don't pollute the data.
const PROD_HOSTS = ['dumasgroup.co.za', 'www.dumasgroup.co.za']
export const OPEN_EVENT = 'dumas:cookie-settings'

const readChoice = () => {
  try { return localStorage.getItem(STORAGE_KEY) } catch { return null }
}
const saveChoice = (value) => {
  try { localStorage.setItem(STORAGE_KEY, value) } catch { /* private mode: choice lasts for this page view only */ }
}

function loadAnalytics() {
  if (!PROD_HOSTS.includes(window.location.hostname)) return
  window[`ga-disable-${GA_ID}`] = false
  if (document.getElementById('ga-gtag')) return
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID)
  const s = document.createElement('script')
  s.id = 'ga-gtag'
  s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
}

function stopAnalytics() {
  window[`ga-disable-${GA_ID}`] = true
  const host = window.location.hostname
  const domains = [host, `.${host}`, `.${host.replace(/^www\./, '')}`]
  const expired = 'expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/'
  document.cookie
    .split(';')
    .map((c) => c.trim().split('=')[0])
    .filter((name) => name.startsWith('_ga') || name === '_gid' || name.startsWith('_gat'))
    .forEach((name) => {
      document.cookie = `${name}=; ${expired}`
      domains.forEach((d) => { document.cookie = `${name}=; ${expired}; domain=${d}` })
    })
}

export default function CookieConsent() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const choice = readChoice()
    if (choice === 'granted') loadAnalytics()
    else if (choice === null) setOpen(true)
    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    return () => window.removeEventListener(OPEN_EVENT, reopen)
  }, [])

  if (!open) return null

  const choose = (value) => {
    saveChoice(value)
    if (value === 'granted') loadAnalytics()
    else stopAnalytics()
    setOpen(false)
  }

  const btn = 'inline-flex items-center justify-center min-h-[44px] px-6 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-200'

  return (
    <div
      data-cookie-banner
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] md:inset-x-auto md:left-6 md:bottom-6 md:max-w-[420px] bg-[#0A0B0D] text-white border border-white/20 shadow-2xl p-5"
    >
      <p className="text-sm leading-relaxed text-white/90">
        We would like to use Google Analytics cookies to understand how this site is used. They stay off unless you accept.
        {SHOW_PRIVACY_NOTICE && (
          <>
            {' '}
            <Link to="/privacy-policy/#cookies" className="underline hover:text-white">Read how we use cookies</Link>.
          </>
        )}
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose('granted')} className={`${btn} bg-white text-[#0A0B0D] hover:bg-[#C7CBCF]`}>
          Accept
        </button>
        <button type="button" onClick={() => choose('denied')} className={`${btn} border border-white/60 text-white hover:bg-white/10`}>
          Decline
        </button>
      </div>
    </div>
  )
}
