import { FadeUp } from '../lib/shared'
import CompanySection from './CompanySection'

export default function SectorGroup({ sector, companies, showGaps, sectionFocusRefs, delay = 0 }) {
  return (
    <FadeUp delay={delay} className="py-14 md:py-16 border-t border-[#E2E3E1] first:border-t-0 first:pt-0">
      <h2 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-2" style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)' }}>
        {sector}
      </h2>
      <div>
        {companies.map((c, i) => (
          <CompanySection key={c.slug} company={c} showGaps={showGaps} sectionFocusRefs={sectionFocusRefs} delay={i * 0.05} />
        ))}
      </div>
    </FadeUp>
  )
}
