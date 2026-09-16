import { useRef } from 'react'
import { FadeUp, usePageMeta } from '../lib/shared'
import { sectors, topLevelCompanies } from '../content/companies'
import Organogram from '../components/Organogram'
import SectorGroup from '../components/SectorGroup'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

const SHOW_GAPS = false

export default function OurCompanies() {
  const sectionFocusRefs = useRef({})

  usePageMeta({
    title: 'Our Companies | Dumas Group South Africa',
    description: 'How the Dumas Group companies fit together: Nyezi Mining Holdings, Nyezi Steel, AET Group, Apexion, Boffin and DVP Hub, across Mpumalanga, the Northern Cape and Gauteng.',
    canonical: 'https://dumasgroup.co.za/our-companies/',
  })

  return (
    <>
      <section className="relative bg-white pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <FadeUp className="max-w-2xl mb-10">
            <h1 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)' }}>
              How the group fits together
            </h1>
            <p className="text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
              Dumas Group holds and funds the businesses below. Each one operates independently, and each one strengthens what the others can deliver.
            </p>
          </FadeUp>

          <FadeUp delay={0.14}>
            <Organogram sectionFocusRefs={sectionFocusRefs} />
          </FadeUp>
        </div>
      </section>

      <section className="relative bg-white pb-24 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          {sectors.map((sector) => {
            const inSector = topLevelCompanies.filter((c) => c.sector === sector)
            if (inSector.length === 0) return null
            return (
              <SectorGroup
                key={sector}
                sector={sector}
                companies={inSector}
                showGaps={SHOW_GAPS}
                sectionFocusRefs={sectionFocusRefs}
              />
            )
          })}
        </div>
      </section>

      <CapabilityPackCTA />
    </>
  )
}
