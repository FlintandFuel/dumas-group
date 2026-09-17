import { useState } from 'react'
import { FadeUp, SectionLabel } from '../lib/shared'

export default function CapabilityPackCTA({ number = '—' }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', country: '', interest: 'Coal' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    if (!form.name.trim()) nextErrors.name = 'Required'
    if (!form.company.trim()) nextErrors.company = 'Required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email'
    if (!form.country.trim()) nextErrors.country = 'Required'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) {
      console.log('Capability pack request', form)
      setSubmitted(true)
    }
  }

  const inputClass = (key) =>
    `w-full bg-transparent border ${errors[key] ? 'border-red-400' : 'border-white/25'} px-4 py-3 text-white text-sm placeholder:text-white/35 focus:outline-none focus:border-white transition-colors duration-200 min-h-[44px] font-light`

  const labelClass = 'block text-[11px] font-mono font-medium tracking-[0.2em] uppercase text-white/50 mb-2'

  return (
    <section id="capability-pack" className="relative bg-[#131417] py-24 md:py-32 scroll-mt-16">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            <FadeUp>
              <SectionLabel number={number} label="Capability Pack" dark />
              <h2 className="font-display font-semibold text-white leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
                Get the full picture
              </h2>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              {submitted ? (
                <div className="border border-white/20 p-12 text-center">
                  <div className="w-8 h-px bg-white mx-auto mb-6" />
                  <p className="font-semibold text-white text-lg mb-3">Thank you.</p>
                  <p className="text-[#B7BBBF] text-sm leading-relaxed max-w-xs mx-auto font-light">
                    Your request has been received. We will be in touch with the capability pack shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClass}>Name</label>
                      <input id="name" type="text" value={form.name} onChange={set('name')} className={inputClass('name')} placeholder="First and last name" />
                      {errors.name && <p className="text-[11px] text-red-400 mt-1.5">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input id="company" type="text" value={form.company} onChange={set('company')} className={inputClass('company')} placeholder="Company name" />
                      {errors.company && <p className="text-[11px] text-red-400 mt-1.5">{errors.company}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email</label>
                      <input id="email" type="email" value={form.email} onChange={set('email')} className={inputClass('email')} placeholder="you@company.com" />
                      {errors.email && <p className="text-[11px] text-red-400 mt-1.5">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="country" className={labelClass}>Country</label>
                      <input id="country" type="text" value={form.country} onChange={set('country')} className={inputClass('country')} placeholder="Country" />
                      {errors.country && <p className="text-[11px] text-red-400 mt-1.5">{errors.country}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="interest" className={labelClass}>Interest</label>
                    <select
                      id="interest"
                      value={form.interest}
                      onChange={set('interest')}
                      className="w-full bg-[#0A0B0D] border border-white/25 px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors duration-200 min-h-[44px] font-light"
                    >
                      {['Coal', 'Chrome', 'Limestone', 'Energy', 'Property', 'Other'].map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center min-h-[44px] font-mono text-[11px] font-semibold tracking-[0.2em] uppercase px-8 py-3 bg-white text-[#0A0B0D] hover:bg-[#C7CBCF] transition-all duration-200"
                    >
                      Request Capability Pack
                    </button>
                    <p className="text-[11px] text-white/40 leading-relaxed">
                      Your information is used only to respond to your enquiry.
                    </p>
                  </div>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
