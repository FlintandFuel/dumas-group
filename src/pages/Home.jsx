import { useState, useRef, useEffect } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { User } from 'lucide-react'
import { FadeUp, SectionLabel, stagger, fadeUpItem, img, usePageMeta, SHOW_CAPABILITY_PACK } from '../lib/shared'
import { proofFigures, valueChain, timeline, caseStudies, faqs, team } from '../content/dumas'
import { companies } from '../content/companies'
import CaseStudyCard from '../components/CaseStudyCard'
import GroupStructureSection from '../components/GroupStructureSection'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

// =====================================================================
// HERO
// =====================================================================
function Hero() {
  const reduced = useReducedMotion()

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
            className="font-mono text-[16px] font-medium tracking-[0.28em] uppercase text-[#9BA0A6] mb-8"
          >
            Established 2008
          </motion.p>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white leading-[1.05] mb-8 mx-auto font-semibold"
            style={{ fontSize: 'clamp(2.25rem, 5.2vw, 4.5rem)', maxWidth: '26ch' }}
          >
            Dumas Group is a diversified holdings company, investing in the foundation of long-term growth.
          </motion.h1>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-5 items-center justify-center"
          >
            {SHOW_CAPABILITY_PACK && (
<a
                href="#capability-pack"
                className="inline-flex items-center min-h-[44px] font-mono text-[11px] font-semibold tracking-[0.2em] uppercase px-7 py-3 bg-white text-[#0A0B0D] hover:bg-[#C7CBCF] transition-all duration-200"
              >
                Request the Capability Pack
              </a>
            )}
          </motion.div>
        </div>
      </div>
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-10 max-w-2xl mx-auto"
        >
          {proofFigures.map((f) => (
            <motion.div key={f.label} variants={fadeUpItem} className="text-center">
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
              <h2
                className="font-display font-semibold text-[#16171A] leading-[1.1]"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}
              >
                About Us
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <FadeUp delay={0.08}>
              <p className="text-[#4B4F54] leading-[1.85] font-light" style={{ fontSize: '1.0625rem' }}>
                We invest where long-term value is built in the ground, in the grid, and in the home. Dumas Group&rsquo;s portfolio spans mineral exploration, energy generation, and housing development. Sectors that form the backbone of developing economies and share a common thread of essential, long-cycle infrastructure investment.
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

        <FadeUp delay={0.22} className="mt-16 md:mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14"
          >
            {team.map((t, i) => (
              <motion.div key={i} variants={fadeUpItem}>
                <div className="aspect-square w-full max-w-[240px] md:max-w-none bg-[#EFEFEA] border border-[#E2E3E1] flex items-center justify-center mb-5 overflow-hidden">
                  {t.image ? (
                    <img src={img(t.image)} alt={`${t.name}, ${t.title}`} loading="lazy" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-8 h-8 text-[#B7BBBF]" strokeWidth={1.25} />
                  )}
                </div>
                <p className="font-mono text-[13px] font-semibold tracking-[0.1em] uppercase text-[#16171A]">
                  {t.name}
                </p>
                <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#6B7075] mt-1 mb-4">
                  {t.title}
                </p>
                <div className="space-y-3">
                  {t.bio.map((p, j) => (
                    <p key={j} className="text-[#4B4F54] leading-[1.7] font-light text-[15px]">{p}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </FadeUp>
      </div>
    </section>
  )
}

// =====================================================================
// TIMELINE
// =====================================================================
const TIMELINE_LINKS = [
  { pattern: 'Nyezi Mining Holdings', slug: 'nyezi-mining-holdings' },
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
const VISIBLE_CARDS = 3

function Projects() {
  const scrollRef = useRef(null)
  const cardRefs = useRef([])
  const [active, setActive] = useState(0)
  const pageCount = Math.max(1, caseStudies.length - VISIBLE_CARDS + 1)

  const scrollToIndex = (i) => {
    const el = scrollRef.current
    const card = cardRefs.current[i]
    if (!el || !card) return
    const target = card.getBoundingClientRect().left - el.getBoundingClientRect().left + el.scrollLeft
    el.scrollTo({ left: target, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      let closest = 0
      let closestDist = Infinity
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const dist = Math.abs(card.getBoundingClientRect().left - el.getBoundingClientRect().left)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      setActive(Math.min(closest, pageCount - 1))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => el.removeEventListener('scroll', onScroll)
  }, [pageCount])

  return (
    <section id="projects" className="relative bg-[#F2F2EF] py-24 md:py-32 border-t border-[#E2E3E1] scroll-mt-16">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <FadeUp className="mb-14 md:mb-16">
          <h2 className="font-display font-semibold text-[#16171A] leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
            Investment over the years
          </h2>
        </FadeUp>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:mx-0 md:px-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {caseStudies.map((cs, i) => (
            <div key={i} ref={(node) => (cardRefs.current[i] = node)} className="snap-start shrink-0 w-[85%] sm:w-[360px]">
              <CaseStudyCard cs={cs} delay={i * 0.08} />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-10">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={active === i}
              className={`h-2.5 rounded-full transition-all duration-300 min-h-[44px] min-w-[16px] flex items-center justify-center`}
            >
              <span className={`block rounded-full transition-all duration-300 ${active === i ? 'w-6 h-2.5 bg-[#16171A]' : 'w-2.5 h-2.5 bg-[#C7CBCF] hover:bg-[#8A8F94]'}`} />
            </button>
          ))}
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
          <SectionLabel number="06" label="What Buyers Ask Us" />
          <h2 className="font-display font-semibold text-[#16171A] leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
            Common Questions
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
      <Timeline />
      <Projects />
      <GroupStructureSection />
      <FAQ />
      <CapabilityPackCTA number="07" />
    </>
  )
}
