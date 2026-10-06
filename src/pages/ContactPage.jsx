import { FadeUp, SectionLabel, usePageMeta } from '../lib/shared'
import { contact } from '../content/dumas'
import HubSpotForm from '../components/HubSpotForm'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

const mapQuery = encodeURIComponent(contact.addressLines.join(', '))
const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`

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
                <HubSpotForm />
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <CapabilityPackCTA />
    </>
  )
}
