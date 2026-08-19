import { Link } from 'react-router-dom'
import { FadeUp, SectionLabel } from '../lib/shared'
import OrganogramCompact from './OrganogramCompact'

// §5.6a / §C of the build brief addendum — placed after case studies, before "Where
// capital is going." Corporate structure is inward-looking: buyers don't care about it
// until they've already decided the group is credible, which is why it sits here and not
// near the top.
export default function GroupStructureSection() {
  return (
    <section className="relative bg-[#141517] py-24 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-14">
          <div className="lg:col-span-5">
            <FadeUp>
              <SectionLabel number="05" label="Organogram" dark />
              <h2 className="font-display font-semibold text-white leading-[1.1]" style={{ fontSize: 'clamp(1.75rem, 3.2vw, 3rem)' }}>
                Group Structure
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-7 lg:pt-2">
            <FadeUp delay={0.08}>
              <p className="text-[#B7BBBF] leading-[1.85] font-light mb-6" style={{ fontSize: '1.0625rem' }}>
                Dumas Group holds and funds each business below. Mining feeds steel and logistics. Logistics moves the minerals. Energy and property put the returns back to work.
              </p>
              <Link
                to="/our-companies"
                className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-white hover:text-[#B7BBBF] transition-colors inline-flex items-center gap-2"
              >
                See how the group fits together
                <span className="w-5 h-px bg-current" />
              </Link>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.16}>
          <OrganogramCompact />
        </FadeUp>
      </div>
    </section>
  )
}
