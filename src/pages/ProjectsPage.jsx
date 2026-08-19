import { FadeUp, usePageMeta } from '../lib/shared'
import { caseStudies } from '../content/dumas'
import CaseStudyCard from '../components/CaseStudyCard'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

export default function ProjectsPage() {
  usePageMeta({
    title: 'Projects | Dumas Group South Africa',
    description: 'Case studies from Dumas Group: sustained coal supply at scale, the Campbell Limestone Project, and the AET off-grid power project in Namibia.',
    canonical: 'https://dumasgroup.co.za/projects/',
  })

  return (
    <>
      <section className="relative bg-[#FAFAF8] pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <FadeUp className="max-w-2xl">
            <h1 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-5" style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)' }}>
              Our experience over the years
            </h1>
            <p className="text-[#4B4F54] leading-[1.8] font-light" style={{ fontSize: '1.0625rem' }}>
              Three projects, each showing a different part of what the group can deliver.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="relative bg-[#F2F2EF] pb-24 md:pb-32">
        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((cs, i) => <CaseStudyCard key={cs.title} cs={cs} delay={i * 0.08} />)}
          </div>
        </div>
      </section>

      <CapabilityPackCTA />
    </>
  )
}
