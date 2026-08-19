import { Link } from 'react-router-dom'
import { img } from '../lib/shared'
import { contact } from '../content/dumas'

const navLinks = [
  ['Home', '/'],
  ['Our Companies', '/our-companies'],
  ['Commodities', '/commodities'],
  ['Projects', '/projects'],
  ['CSI', '/corporate-social-investment'],
  ['Contact', '/contact'],
]

export default function Footer() {
  return (
    <footer className="bg-[#0A0B0D] text-white/75">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-6 md:pb-8">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-4">
            <img src={img('logo-white.png')} alt="Dumas Group" className="w-auto mb-4" style={{ height: '55px' }} />
            <p className="text-sm text-white/70 font-medium mb-4">{contact.tagline}</p>
            <p className="text-sm text-white/55 leading-[1.75] max-w-xs font-light">
              South African mining and industrial holding group. Coal, chrome and limestone. Rights, extraction, processing and export, owned within the group.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">Navigate</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(([l, to]) => (
                <Link key={l} to={to} className="text-sm text-white/55 hover:text-white transition-colors font-medium">{l}</Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-5">
            <p className="text-[11px] font-mono font-semibold tracking-[0.2em] uppercase text-white/30 mb-5">Contact</p>
            <a href={contact.phoneHref} className="block text-sm text-white/55 hover:text-white transition-colors font-medium mb-2">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="block text-sm text-white/55 hover:text-white transition-colors font-medium mb-4">{contact.email}</a>
            <address className="not-italic text-sm text-white/55 leading-relaxed font-medium">
              {contact.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
            </address>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10">
          <p className="text-[11px] text-white/25 leading-relaxed text-center md:text-left">
            &copy; {new Date().getFullYear()} Dumas Group South Africa. All rights reserved.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="text-[11px] text-white/25 text-center">
          Website design by{' '}
          <a href="https://flintandfuel.co.za" target="_blank" rel="noopener" className="underline hover:text-white/50 transition-colors">
            Flint and Fuel Creative
          </a>
        </p>
      </div>
    </footer>
  )
}
