import { FadeUp, SectionLabel, usePageMeta } from '../lib/shared'
import { focusAreas, initiatives, activityFeed, annotations, summaryPanel } from '../content/csi'
import SpecimenBanner, { SPECIMEN_BANNER_HEIGHT } from '../components/SpecimenBanner'
import ContentGapZone from '../components/ContentGapZone'

// §F.1: a hard build-time guard. This page is illustrative-only and must never ship live —
// if a production build somehow includes it, render a blocking notice instead of the content.
function SpecimenBlocked() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0A0B0D] px-6 text-center">
      <div className="max-w-md">
        <p className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F2F3F4] mb-4">
          Page unavailable
        </p>
        <p className="text-white/60 leading-relaxed font-light">
          This route contains illustrative specimen content only and is blocked from production builds.
        </p>
      </div>
    </section>
  )
}

function InitiativeCard({ initiative, delay }) {
  return (
    <FadeUp delay={delay} className="bg-white border border-[#E2E3E1] p-7">
      <h3 className="font-display font-semibold text-[#16171A] text-lg mb-4">{initiative.name}</h3>
      <dl className="space-y-2 font-mono text-[12px]">
        {[
          ['Focus area', initiative.focusArea],
          ['Location', initiative.location],
          ['Running since', initiative.since],
          ['Who benefits', initiative.beneficiaries],
          ['The number', initiative.figure],
          ['Status', initiative.status],
        ].map(([label, value]) => (
          <div key={label} className="flex gap-3">
            <dt className="text-[#8A8F94] w-28 flex-shrink-0">{label}</dt>
            <dd className="text-[#16171A] italic">{value}</dd>
          </div>
        ))}
      </dl>
    </FadeUp>
  )
}

const SHOW_GUIDANCE = true

export default function CSI() {
  usePageMeta({
    title: 'Corporate Social Investment (Specimen) | Dumas Group South Africa',
    description: 'Specimen structure for Dumas Group corporate social investment reporting. Illustrative only. See the summary panel for what is needed to make this page real.',
    canonical: 'https://dumasgroup.co.za/corporate-social-investment/',
    noindex: true,
  })

  if (import.meta.env.PROD) return <SpecimenBlocked />

  return (
    <>
      <SpecimenBanner />
      <div style={{ height: SPECIMEN_BANNER_HEIGHT }} />

      <section className="relative bg-[#FAFAF8] pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <FadeUp className="max-w-2xl mb-14">
            <h1 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)' }}>
              What we put back, and where
            </h1>
            <p className="text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
              Dumas Group operates in Mpumalanga, the Northern Cape, North West, the Free State and Gauteng. Our social investment is concentrated in the communities around those operations.
            </p>
          </FadeUp>

          {/* Focus areas */}
          <FadeUp className="mb-6">
            <SectionLabel number="01" label="Focus Areas" />
          </FadeUp>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {focusAreas.map((area, i) => (
              <FadeUp key={area.label} delay={i * 0.06} className="bg-white border border-[#E2E3E1] p-6">
                <h3 className="font-display font-semibold text-[#16171A] text-base mb-2">{area.label}</h3>
                <p className="text-[#4B4F54] leading-[1.7] font-light text-[14px]">{area.body}</p>
              </FadeUp>
            ))}
          </div>
          <ContentGapZone label={annotations.focusAreas.label} lines={annotations.focusAreas.lines} visible={SHOW_GUIDANCE} />

          {/* Initiative cards */}
          <div className="mt-20 mb-6">
            <SectionLabel number="02" label="Initiatives" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {initiatives.map((initiative, i) => (
              <InitiativeCard key={i} initiative={initiative} delay={i * 0.06} />
            ))}
          </div>
          <ContentGapZone label={annotations.initiatives.label} lines={annotations.initiatives.lines} visible={SHOW_GUIDANCE} />

          {/* Activity feed */}
          <div className="mt-20 mb-6">
            <SectionLabel number="03" label="Activity Feed" />
          </div>
          <FadeUp className="bg-white border border-[#E2E3E1] divide-y divide-[#E2E3E1] mb-6">
            {activityFeed.map((entry, i) => (
              <div key={i} className="flex flex-wrap gap-3 px-6 py-4">
                <span className="font-mono text-[12px] font-semibold text-[#16171A] w-24 flex-shrink-0">{entry.date}</span>
                <span className="font-mono text-[13px] text-[#4B4F54] italic">{entry.entry}</span>
              </div>
            ))}
          </FadeUp>
          <ContentGapZone label={annotations.activityFeed.label} lines={annotations.activityFeed.lines} visible={SHOW_GUIDANCE} />

          {/* Summary panel */}
          <FadeUp className="mt-24 bg-[#0A0B0D] p-8 md:p-10">
            <p className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-[#F2F3F4] mb-5">
              {summaryPanel.title}
            </p>
            <ul className="space-y-3">
              {summaryPanel.items.map((item, i) => (
                <li key={i} className="text-[#B7BBBF] leading-[1.7] font-light text-[14px] flex gap-3">
                  <span className="font-mono text-[#F2F3F4] flex-shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>
    </>
  )
}
