import { Link } from 'react-router-dom'
import { topLevelCompanies } from '../content/companies'

// Two views only: a horizontal tree at true desktop widths (no-wrap — nodes size to their
// own content, never break a company name across the row), and a left-root / vertical-list
// layout at everything narrower. The vertical list is a single-column grid sized to
// `max-content`, so every block shares one uniform width (the widest company name's) —
// short names like "Apexion" get a block the same width as "Boffin Property Development
// & Construction", not one shrink-wrapped to their own text.
export default function OrganogramCompact() {
  const nodeClass = 'px-4 py-3 text-center bg-[#24262A] border border-[#3A3C40] hover:border-[#F2F3F4] transition-colors inline-block whitespace-nowrap'
  const nodeClassFit = 'px-4 py-3 text-left bg-[#24262A] border border-[#3A3C40] hover:border-[#F2F3F4] transition-colors block w-full'

  const renderNode = (c, fit) => {
    const cls = fit ? nodeClassFit : nodeClass
    return c.externalUrl ? (
      <a key={c.slug} href={c.externalUrl} target="_blank" rel="noopener noreferrer" className={cls}>
        <span className="font-mono text-[10px] font-semibold tracking-[0.06em] uppercase text-[#F2F3F4] leading-tight">{c.name}</span>
      </a>
    ) : (
      <Link key={c.slug} to={`/our-companies#company-${c.slug}`} className={cls}>
        <span className="font-mono text-[10px] font-semibold tracking-[0.06em] uppercase text-[#F2F3F4] leading-tight">{c.name}</span>
      </Link>
    )
  }

  return (
    <div>
      {/* True desktop — horizontal, no wrap */}
      <div className="hidden xl:block">
        <div className="flex justify-center mb-6">
          <div className="px-5 py-3 text-center bg-transparent border border-[#4B4F54] whitespace-nowrap" style={{ borderLeft: '3px solid #F2F3F4' }}>
            <span className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase text-[#F2F3F4]">Dumas Group</span>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <div className="w-px h-6 bg-[#4B4F54]" />
        </div>
        <div className="flex justify-center flex-wrap gap-3">
          {topLevelCompanies.map((c) => renderNode(c, false))}
        </div>
      </div>

      {/* Narrow desktop and below — root on the left, companies left-aligned against the
          vertical line. The blocks column itself is capped (not the whole row including
          root), so it sits close to the line instead of floating in a wide, empty column. */}
      <div className="xl:hidden flex items-stretch justify-center gap-6">
        <div className="flex-shrink-0 flex items-start pt-1">
          <div className="px-4 py-3 text-center bg-transparent border border-[#4B4F54] whitespace-nowrap" style={{ borderLeft: '3px solid #F2F3F4' }}>
            <span className="font-mono text-[11px] font-semibold tracking-[0.1em] uppercase text-[#F2F3F4]">Dumas Group</span>
          </div>
        </div>
        <div className="flex-shrink-0 w-px bg-[#4B4F54]" />
        <div className="grid gap-2.5 w-full grid-cols-[minmax(0,1fr)] sm:grid-cols-[max-content] sm:max-w-[450px]">
          {topLevelCompanies.map((c) => renderNode(c, true))}
        </div>
      </div>
    </div>
  )
}
