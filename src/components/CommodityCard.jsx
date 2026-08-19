import { FadeUp, img } from '../lib/shared'

// Full detail card with an inline specification table — used on the dedicated
// /commodities page. The homepage uses the lighter CommodityTeaserCard instead.
export default function CommodityCard({ c, image, delay }) {
  return (
    <FadeUp delay={delay} className="flex flex-col scroll-mt-24" id={c.slug}>
      <div className="aspect-[4/3] overflow-hidden bg-[#E7E7E4]">
        <img src={img(image)} alt={`${c.name}, Dumas Group`} className="w-full h-full object-cover" loading="lazy" width={640} height={480} />
      </div>
      <div className="pt-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-[#16171A] text-xl mb-2">{c.name}</h3>
        <p className="text-[#4B4F54] leading-[1.75] font-light text-[15px] mb-4">{c.blurb}</p>
        <dl className="space-y-1.5 font-mono text-[12px] text-[#5B5F64] mb-6">
          <div className="flex gap-2"><dt className="text-[#8A8F94]">Volume</dt><dd>{c.volume}</dd></div>
          <div className="flex gap-2"><dt className="text-[#8A8F94]">Market</dt><dd>{c.market}</dd></div>
          <div className="flex gap-2"><dt className="text-[#8A8F94]">Asset</dt><dd>{c.asset}</dd></div>
        </dl>

        <div className="border-t border-[#D3D4D1] pt-5 mb-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <tbody>
                {c.spec.map((row) => (
                  <tr key={row.label} className="border-b border-[#E2E3E1]">
                    <td className="py-2.5 pr-4 font-mono text-[11px] text-[#8A8F94] whitespace-nowrap">{row.label}</td>
                    <td className={`py-2.5 font-mono text-[12px] ${row.confirmed ? 'text-[#16171A]' : 'text-[#8A8F94] italic border-b border-dotted border-[#8A8F94]/60 inline-block'}`}>
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {c.slug === 'limestone' ? (
          <p className="text-[#4B4F54] leading-[1.75] font-light text-[14px] mb-6 border-l-2 border-[#D3D4D1] pl-4">
            {c.applications}
          </p>
        ) : (
          <p className="text-[#4B4F54] leading-[1.75] font-light text-[14px] mb-6">
            {c.applications}
          </p>
        )}

        <a href="#capability-pack" className="mt-auto font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#16171A] hover:text-[#71767C] transition-colors inline-flex items-center gap-2">
          Request full specification
          <span className="w-4 h-px bg-current" />
        </a>
      </div>
    </FadeUp>
  )
}
