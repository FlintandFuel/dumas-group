import { useState } from 'react'
import { FadeUp, SectionLabel, usePageMeta } from '../lib/shared'
import { contact } from '../content/dumas'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

const mapQuery = encodeURIComponent(contact.addressLines.join(', '))
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email'
    if (!form.message.trim()) nextErrors.message = 'Required'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      console.log('Contact enquiry', form)
      setSubmitted(true)
    }
  }

  const inputClass = (key) =>
    `w-full bg-transparent border ${errors[key] ? 'border-red-500' : 'border-[#D3D4D1]'} px-4 py-3 text-[#16171A] text-sm placeholder:text-[#8A8F94] focus:outline-none focus:border-[#16171A] transition-colors duration-200 min-h-[44px] font-light`

  const labelClass = 'block text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-[#8A8F94] mb-2'

  if (submitted) {
    return (
      <div className="border border-[#D3D4D1] p-10 text-center">
        <div className="w-8 h-px bg-[#16171A] mx-auto mb-6" />
        <p className="font-semibold text-[#16171A] text-lg mb-3">Thank you.</p>
        <p className="text-[#4B4F54] text-sm leading-relaxed max-w-xs mx-auto font-light">
          Your message has been received. We will be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input id="name" type="text" value={form.name} onChange={set('name')} className={inputClass('name')} placeholder="First and last name" />
        {errors.name && <p className="text-[11px] text-red-500 mt-1.5">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input id="email" type="email" value={form.email} onChange={set('email')} className={inputClass('email')} placeholder="you@company.com" />
        {errors.email && <p className="text-[11px] text-red-500 mt-1.5">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" rows={5} value={form.message} onChange={set('message')} className={`${inputClass('message')} resize-none`} placeholder="How can we help?" />
        {errors.message && <p className="text-[11px] text-red-500 mt-1.5">{errors.message}</p>}
      </div>
      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex items-center min-h-[44px] font-mono text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-3 bg-[#16171A] text-white hover:bg-[#333438] transition-all duration-200"
        >
          Send Message
        </button>
        <p className="text-[11px] text-[#8A8F94] leading-relaxed">
          Your information is used only to respond to your enquiry.
        </p>
      </div>
    </form>
  )
}

export default function ContactPage() {
  usePageMeta({
    title: 'Contact | Dumas Group South Africa',
    description: 'Contact Dumas Group South Africa. Sandhurst, Sandton, Gauteng.',
    canonical: 'https://dumasgroup.co.za/contact/',
  })

  return (
    <>
      <section className="relative bg-[#FAFAF8] pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <FadeUp className="max-w-2xl mb-14">
            <SectionLabel number="—" label="Contact" />
            <h1 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-3" style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)' }}>
              Get in touch
            </h1>
            <p className="text-[#4B4F54] font-light" style={{ fontSize: '1.0625rem' }}>{contact.tagline}</p>
          </FadeUp>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeUp>
                <dl className="space-y-5 mb-8">
                  <div>
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8A8F94] mb-1">Phone</dt>
                    <dd><a href={contact.phoneHref} className="text-[#16171A] text-lg hover:text-[#71767C] transition-colors">{contact.phone}</a></dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8A8F94] mb-1">Email</dt>
                    <dd><a href={`mailto:${contact.email}`} className="text-[#16171A] text-lg hover:text-[#71767C] transition-colors">{contact.email}</a></dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8A8F94] mb-1">Office</dt>
                    <dd className="text-[#4B4F54] text-lg leading-relaxed">
                      {contact.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
                    </dd>
                  </div>
                </dl>

                <div className="h-[280px] sm:h-[320px] md:h-[200px] lg:h-[300px] border border-[#D3D4D1] overflow-hidden">
                  <iframe
                    title="Dumas Group office location"
                    src={mapSrc}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </FadeUp>
            </div>

            <div className="lg:col-span-7">
              <FadeUp delay={0.1}>
                <ContactForm />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <CapabilityPackCTA />
    </>
  )
}
