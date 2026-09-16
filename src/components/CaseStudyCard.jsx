import { FadeUp } from '../lib/shared'

export default function CaseStudyCard({ cs, delay }) {
  if (cs.placeholder) {
    return (
      <FadeUp delay={delay} className="bg-white border border-[#E2E3E1] p-8 md:p-9 flex flex-col h-full">
        <h3 className="font-display font-semibold text-[#16171A] text-lg mb-4 leading-snug">{cs.title}</h3>
        <p className="text-[#4B4F54] leading-[1.7] font-light text-[14px] italic flex-1">{cs.body}</p>
      </FadeUp>
    )
  }

  return (
    <FadeUp delay={delay} className="bg-white border border-[#E2E3E1] p-8 md:p-9 flex flex-col h-full">
      <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#8A8F94] mb-3">
        {cs.meta.period} &middot; {cs.meta.commodity} &middot; {cs.meta.place} &middot; {cs.meta.role}
      </p>
      <h3 className="font-display font-semibold text-[#16171A] text-lg mb-6 leading-snug">{cs.title}</h3>

      <div className="space-y-4 flex-1">
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8A8F94] mb-1.5">Context</p>
          <p className="text-[#4B4F54] leading-[1.7] font-light text-[14px]">{cs.context}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8A8F94] mb-1.5">What we owned</p>
          <p className="text-[#4B4F54] leading-[1.7] font-light text-[14px]">{cs.owned}</p>
        </div>
        <div>
          <p className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8A8F94] mb-1.5">Outcome</p>
          <p className="text-[#4B4F54] leading-[1.7] font-light text-[14px]">{cs.outcome}</p>
        </div>
      </div>

      <p className="font-mono text-[11px] text-[#8A8F94] italic mt-6 pt-5 border-t border-dotted border-[#D3D4D1]">
        {cs.pending}
      </p>

      <a href="#capability-pack" className="mt-5 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#16171A] hover:text-[#71767C] transition-colors inline-flex items-center gap-2">
        Read more
        <span className="w-4 h-px bg-current" />
      </a>
    </FadeUp>
  )
}
