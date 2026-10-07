import { FadeUp, SHOW_CAPABILITY_PACK, img } from '../lib/shared'

// Soft colour watermark behind the card text. Faded in from the right so copy stays legible.
function Watermark({ src }) {
  if (!src) return null
  return (
    <img
      src={img(src)}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none opacity-[0.23]"
      style={{ WebkitMaskImage: 'linear-gradient(to bottom left, #000 0%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.2) 100%)', maskImage: 'linear-gradient(to bottom left, #000 0%, rgba(0,0,0,0.55) 65%, rgba(0,0,0,0.2) 100%)' }}
    />
  )
}

export default function CaseStudyCard({ cs, delay }) {
  if (cs.placeholder) {
    return (
      <FadeUp delay={delay} className="relative isolate overflow-hidden bg-white border border-[#E2E3E1] p-8 md:p-9 flex flex-col h-full">
      <Watermark src={cs.watermark} />
        {cs.sector && (
          <span className="inline-block self-start font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-white bg-[#16171A] px-2.5 py-1 mb-3">
            {cs.sector}
          </span>
        )}
        <h3 className="font-display font-semibold text-[#16171A] text-xl mb-4 leading-snug">{cs.title}</h3>
        <p className="text-[#2E3135] leading-[1.7] font-normal text-[16px] italic flex-1">{cs.body}</p>
      </FadeUp>
    )
  }

  return (
    <FadeUp delay={delay} className="relative isolate overflow-hidden bg-white border border-[#E2E3E1] p-8 md:p-9 flex flex-col h-full">
      <Watermark src={cs.watermark} />
      {cs.sector && (
        <span className="inline-block self-start font-mono text-[12px] font-semibold tracking-[0.16em] uppercase text-white bg-[#16171A] px-2.5 py-1 mb-3">
          {cs.sector}
        </span>
      )}
      {cs.meta && (
        <p className="font-mono text-[12px] font-medium tracking-[0.14em] uppercase text-[#4B4F54] mb-3">
          {cs.meta.period} &middot; {cs.meta.commodity} &middot; {cs.meta.place} &middot; {cs.meta.role}
        </p>
      )}
      <h3 className="font-display font-semibold text-[#16171A] text-xl mb-6 leading-snug">{cs.title}</h3>

      <div className="space-y-4 flex-1">
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.14em] uppercase text-[#4B4F54] mb-2">Context</p>
          <p className="text-[#2E3135] leading-[1.7] font-normal text-[16px]">{cs.context}</p>
        </div>
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.14em] uppercase text-[#4B4F54] mb-2">What we own</p>
          <p className="text-[#2E3135] leading-[1.7] font-normal text-[16px]">{cs.owned}</p>
        </div>
        <div>
          <p className="font-mono text-[13px] font-semibold tracking-[0.14em] uppercase text-[#4B4F54] mb-2">Outcome</p>
          <p className="text-[#2E3135] leading-[1.7] font-normal text-[16px]">{cs.outcome}</p>
        </div>
      </div>

      {cs.pending && (
        <p className="font-mono text-[13px] text-[#4B4F54] italic mt-6 pt-5 border-t border-dotted border-[#D3D4D1]">
          {cs.pending}
        </p>
      )}

      {SHOW_CAPABILITY_PACK && (
        <a href="#capability-pack" className="mt-6 font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#16171A] hover:text-[#71767C] transition-colors inline-flex items-center gap-2">
          Read more
          <span className="w-4 h-px bg-current" />
        </a>
      )}
    </FadeUp>
  )
}
