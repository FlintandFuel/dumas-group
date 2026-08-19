import { Link } from 'react-router-dom'
import { FadeUp, img } from '../lib/shared'

// Light teaser used on the homepage — name, one-line blurb, headline volume and market.
// Full specification tables live on the dedicated /commodities page (CommodityCard there).
export default function CommodityTeaserCard({ c, image, delay }) {
  return (
    <FadeUp delay={delay} className="flex flex-col">
      <div className="aspect-[4/3] overflow-hidden bg-[#E7E7E4]">
        <img src={img(image)} alt={`${c.name}, Dumas Group`} className="w-full h-full object-cover" loading="lazy" width={640} height={480} />
      </div>
      <div className="pt-6">
        <h3 className="font-display font-semibold text-[#16171A] text-xl mb-2">{c.name}</h3>
        <p className="text-[#4B4F54] leading-[1.75] font-light text-[15px] mb-4">{c.blurb}</p>
        <dl className="space-y-1.5 font-mono text-[12px] text-[#5B5F64] mb-5">
          <div className="flex gap-2"><dt className="text-[#8A8F94]">Volume</dt><dd>{c.volume}</dd></div>
          <div className="flex gap-2"><dt className="text-[#8A8F94]">Market</dt><dd>{c.market}</dd></div>
        </dl>
        <Link
          to={`/commodities#${c.slug}`}
          className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#16171A] hover:text-[#71767C] transition-colors inline-flex items-center gap-2"
        >
          Full specification
          <span className="w-4 h-px bg-current" />
        </Link>
      </div>
    </FadeUp>
  )
}
