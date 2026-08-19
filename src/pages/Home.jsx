import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { FadeUp, SectionLabel, stagger, fadeUpItem, img, usePageMeta } from '../lib/shared'
import { proofFigures, valueChain, commodities, timeline, caseStudies, faqs } from '../content/dumas'
import { companies } from '../content/companies'
import CommodityTeaserCard from '../components/CommodityTeaserCard'
import CaseStudyCard from '../components/CaseStudyCard'
import GroupStructureSection from '../components/GroupStructureSection'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

// =====================================================================
// HERO
// =====================================================================
function Hero() {
  const reduced = useReducedMotion()

  const scrollToProof = (e) => {
    e.preventDefault()
    document.getElementById('proof')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <section id="hero">
      <div className="relative bg-[#0A0B0D] overflow-hidden">
        <img
          src={img('header1.jpg')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'contrast(1.05) brightness(0.65)' }}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0B0D]/55 via-[#0A0B0D]/65 to-[#0A0B0D]" />

        <div className="relative z-10 max-w-[1180px] mx-auto px-6 md:px-10 pt-40 pb-20 md:pt-48 md:pb-28 text-center">
          <motion.p
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-mono text-[11px] font-medium tracking-[0.28em] uppercase text-[#9BA0A6] mb-8"
          >
            South African Mining &amp; Industrial Group &middot; Est. 2008
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-[1.05] mb-8 mx-auto font-semibold"
            style={{ fontSize: 'clamp(2.25rem, 5.2vw, 4.5rem)', maxWidth: '20ch' }}
          >
            One contract between the quote and the cargo
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-[#C7CBCF] leading-[1.75] mx-auto mb-12 font-light"
            style={{ fontSize: '1.0625rem', maxWidth: '52ch' }}
          >
            Dumas Group is a South African mining and industrial group. Coal, chrome and limestone. From mining rights in Mpumalanga and the Northern Cape to buyers in twelve countries.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-wrap gap-5 items-center justify-center"
          >
            <a
              href="#capability-pack"
              className="inline-flex items-center min-h-[44px] font-mono text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3 bg-white text-[#0A0B0D] hover:bg-[#C7CBCF] transition-all duration-200"
            >
              Request the Capability Pack
            </a>
            <a
              href="#proof"
              onClick={scrollToProof}
              className="inline-flex items-center gap-2.5 min-h-[44px] font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[#9BA0A6] hover:text-white transition-colors duration-200"
            >
              See What We Move
              <span className="w-5 h-px bg-current" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="relative w-full aspect-[16/8] md:aspect-[16/6] overflow-hidden bg-[#0A0B0D]"
      >
        <img
          src={img('coal-excavator.jpg')}
          alt="Bucket-wheel excavator working a coal stockpile"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'grayscale(35%) contrast(1.05)' }}
          fetchPriority="high"
          width={1920}
          height={720}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D]/60 via-transparent to-transparent" />
      </motion.div>
    </section>
  )
}

// =====================================================================
// PROOF BAR
// =====================================================================
function ProofBar() {
  return (
    <section id="proof" className="bg-[#0A0B0D] pt-16 pb-14 md:pt-20 md:pb-16 scroll-mt-24">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10"
        >
          {proofFigures.map((f) => (
            <motion.div key={f.label} variants={fadeUpItem} className="text-center sm:text-left">
              <p className="font-poppins font-semibold text-white leading-none whitespace-nowrap" style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.875rem)' }}>
                {f.value}
              </p>
              <p className="mt-3 text-[13px] text-[#83898F] leading-snug font-light">{f.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// =====================================================================
// INTEGRATION / VALUE CHAIN
// =====================================================================
function Integration() {
  return (
    <section id="integration" className="relative bg-[#FAFAF8] py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <FadeUp>
              <SectionLabel number="01" label="Integration" />
              <h2
                className="font-display font-semibold text-[#16171A] leading-[1.1]"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}
              >
                One phone call moves the whole chain, not just one piece of it
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <FadeUp delay={0.08}>
              <p className="text-[#4B4F54] leading-[1.85] font-light" style={{ fontSize: '1.0625rem' }}>
                Mining rights. Wash plants. Rail and road. Port. We operate each stage ourselves or through partnerships built over thirty-five years. That means when we commit to a tonnage and a date, there is nobody standing between the promise and the delivery. Roughly 1,600 tons move every day. Around 20,000 tons pass through port each month.
              </p>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.16} className="mt-16 md:mt-20">
          <div className="lg:hidden max-w-sm">
            {valueChain.map((v, i) => (
              <div key={v.stage} className="flex items-stretch gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16171A] flex-shrink-0 mt-1.5" />
                  {i !== valueChain.length - 1 && <div className="w-px flex-1 bg-[#D3D4D1] my-1" />}
                </div>
                <p className="font-mono text-[13px] font-semibold tracking-[0.18em] uppercase text-[#16171A] pb-6">
                  {v.stage}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-stretch">
            {valueChain.map((v, i) => (
              <div key={v.stage} className="flex-1 flex flex-col items-center">
                <div className="flex items-center w-full">
                  <div className={`h-px flex-1 ${i === 0 ? 'opacity-0' : 'bg-[#D3D4D1]'}`} />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#16171A] flex-shrink-0" />
                  <div className={`h-px flex-1 ${i === valueChain.length - 1 ? 'opacity-0' : 'bg-[#D3D4D1]'}`} />
                </div>
                <p className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#16171A] mt-4 text-center">
                  {v.stage}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

// =====================================================================
// COMMODITIES (teaser)
// =====================================================================
function CommoditiesTeaser() {
  const images = { coal: 'coal-excavator.jpg', chrome: 'chrome-ore1.jpg', limestone: 'limestone-quarry.jpg' }
  return (
    <section id="commodities" className="relative bg-[#FAFAF8] py-24 md:py-32 border-t border-[#E2E3E1] scroll-mt-16">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <FadeUp className="mb-14 md:mb-16">
          <SectionLabel number="02" label="Commodities" />
          <h2 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
            Coal, chrome and limestone
          </h2>
        </FadeUp>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {commodities.map((c, i) => (
            <CommodityTeaserCard key={c.slug} c={c} image={images[c.slug]} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// TIMELINE
// =====================================================================
const TIMELINE_LINKS = [
  { pattern: 'Nyezi Mining', slug: 'nyezi-mining-holdings' },
  { pattern: 'Nyezi Steel', slug: 'nyezi-steel' },
  { pattern: 'AET Group', slug: 'aet-group' },
  { pattern: 'DVP Hub', slug: 'dvp-hub' },
]

// Hyperlinks company names within a timeline fact to their real site, where one exists.
function LinkedFact({ text }) {
  const regex = new RegExp(`(${TIMELINE_LINKS.map((e) => e.pattern).join('|')})`, 'g')
  return text.split(regex).map((part, i) => {
    const entry = TIMELINE_LINKS.find((e) => e.pattern === part)
    const company = entry && companies.find((c) => c.slug === entry.slug)
    if (!company?.externalUrl) return part
    return (
      <a
        key={i}
        href={company.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-[#D3D4D1] hover:decoration-[#16171A] transition-colors"
      >
        {part}
      </a>
    )
  })
}

function Timeline() {
  return (
    <section className="relative bg-[#FAFAF8] py-24 md:py-32 border-t border-[#E2E3E1]">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <FadeUp className="mb-14 md:mb-16">
          <SectionLabel number="03" label="Track Record" />
          <h2 className="font-display font-semibold text-[#16171A] leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
            Our History
          </h2>
        </FadeUp>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger}
          className="max-w-2xl"
        >
          {timeline.map((t, i) => (
            <motion.div
              key={t.year}
              variants={fadeUpItem}
              className={`flex gap-6 md:gap-10 py-5 ${i !== timeline.length - 1 ? 'border-b border-[#E2E3E1]' : ''}`}
            >
              <p className="font-mono font-semibold text-[#16171A] w-20 flex-shrink-0" style={{ fontSize: '1.0625rem' }}>
                {t.year}
              </p>
              <p className="text-[#4B4F54] leading-[1.7] font-light" style={{ fontSize: '1rem' }}>
                <LinkedFact text={t.fact} />
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// =====================================================================
// CASE STUDIES
// =====================================================================
function Projects() {
  return (
    <section id="projects" className="relative bg-[#F2F2EF] py-24 md:py-32 border-t border-[#E2E3E1] scroll-mt-16">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <FadeUp className="mb-14 md:mb-16">
          <SectionLabel number="04" label="Case Studies" />
          <h2 className="font-display font-semibold text-[#16171A] leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
            Our experience over the years
          </h2>
        </FadeUp>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((cs, i) => <CaseStudyCard key={cs.title} cs={cs} delay={i * 0.08} />)}
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// CAPITAL / RENEWABLES + PROPERTY
// =====================================================================
function Capital() {
  return (
    <section className="relative bg-[#141517] py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <FadeUp className="mb-14 md:mb-16 max-w-2xl">
          <SectionLabel number="06" label="Where Capital Is Going" dark />
          <h2 className="font-display font-semibold text-white leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
            Capability, not forecasts
          </h2>
          <p className="text-[#B7BBBF] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
            AET Group, Boffin and our EPC capability address two real shortfalls: power across the SADC region, and student accommodation in South Africa.
          </p>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-6">
          <FadeUp delay={0.06} className="bg-[#1A1B1E] border border-white/10">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={img('solar-farm-aerial.jpg')} alt="Solar array, aerial view" className="w-full h-full object-cover" loading="lazy" style={{ filter: 'grayscale(20%)' }} width={800} height={500} />
            </div>
            <div className="p-7">
              <h3 className="font-display font-semibold text-white text-lg mb-2">AET Group</h3>
              <p className="text-[#B7BBBF] leading-[1.75] font-light text-[14px]">
                Renewable and off-grid power development, including EPC capability, addressing the regional power shortfall across SADC.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.12} className="bg-[#1A1B1E] border border-white/10">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={img('boffin-property.png')} alt="Multi-unit residential development" className="w-full h-full object-cover" loading="lazy" style={{ filter: 'grayscale(20%)' }} width={800} height={500} />
            </div>
            <div className="p-7">
              <h3 className="font-display font-semibold text-white text-lg mb-2">Boffin</h3>
              <p className="text-[#B7BBBF] leading-[1.75] font-light text-[14px]">
                Property development, addressing the South African student accommodation shortfall.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// FAQ
// =====================================================================
function FAQ() {
  const [open, setOpen] = useState(null)
  const reduced = useReducedMotion()

  return (
    <section id="faq" className="relative bg-[#FAFAF8] py-24 md:py-32 border-t border-[#E2E3E1] scroll-mt-16">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <FadeUp className="mb-14">
          <SectionLabel number="07" label="What Buyers Ask Us" />
          <h2 className="font-display font-semibold text-[#16171A] leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
            Common questions
          </h2>
        </FadeUp>

        <div className="divide-y divide-[#E2E3E1] max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeUp key={faq.q} delay={i * 0.03}>
              <div className="py-6">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-6 text-left min-h-[44px] group focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#16171A] focus-visible:outline-offset-4"
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-[#16171A] leading-snug" style={{ fontSize: '1.0625rem' }}>
                    {faq.q}
                  </span>
                  <span className="font-mono text-[#16171A] text-xl leading-none flex-shrink-0 mt-0.5 select-none w-6 text-center">
                    {open === i ? '−' : '+'}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      key="answer"
                      initial={reduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1rem' }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

// =====================================================================
// ROOT
// =====================================================================
export default function Home() {
  usePageMeta({
    title: 'Dumas Group South Africa | Coal, Chrome & Limestone Mining and Export',
    description: 'Dumas Group is a South African mining and industrial holding group. 500,000t of coal exported annually, chrome and limestone from mining rights in Mpumalanga and the Northern Cape to buyers in 12+ export markets.',
    canonical: 'https://dumasgroup.co.za/',
  })

  return (
    <>
      <Hero />
      <ProofBar />
      <Integration />
      <CommoditiesTeaser />
      <Timeline />
      <Projects />
      <GroupStructureSection />
      <Capital />
      <FAQ />
      <CapabilityPackCTA number="08" />
    </>
  )
}
