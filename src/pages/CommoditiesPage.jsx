import { FadeUp, usePageMeta } from '../lib/shared'
import { commodities } from '../content/dumas'
import CommodityCard from '../components/CommodityCard'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

// Migrated from the old /sector-focus page — see addendum §A.1. Sector Focus carried no
// search value; the commodity terms do, and lithium is removed per the client's instruction.
export default function CommoditiesPage() {
  const images = { coal: 'coal-excavator.jpg', chrome: 'chrome-ore1.jpg', limestone: 'limestone-quarry.jpg' }

  usePageMeta({
    title: 'Commodities | Coal, Chrome & Limestone Specifications | Dumas Group',
    description: 'Specification, volume, logistics and applications for the coal, chrome and limestone Dumas Group mines and moves out of Mpumalanga and the Northern Cape.',
    canonical: 'https://dumasgroup.co.za/commodities/',
  })

  return (
    <>
      <section className="relative bg-[#FAFAF8] pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <FadeUp className="max-w-2xl">
            <h1 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)' }}>
              Coal, chrome and limestone
            </h1>
            <p className="text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
              Specification, volume and logistics for each commodity we mine and move.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="relative bg-[#FAFAF8] pb-24 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {commodities.map((c, i) => (
              <CommodityCard key={c.slug} c={c} image={images[c.slug]} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CapabilityPackCTA />
    </>
  )
}
