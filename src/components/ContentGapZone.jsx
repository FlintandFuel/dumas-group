import { wordCount, WORD_TARGET } from '../content/companies'

// Dashed-border "review mode" treatment, reused for both the /our-companies content gaps
// and the CSI guidance callouts. Word counts are computed from the real content at render
// time — never hardcoded — so the number stays honest as copy changes.
export default function ContentGapZone({ label, company, lines, footer, visible }) {
  if (!visible) return null
  const count = company ? wordCount(company) : null

  return (
    <div className="mt-6 border border-dashed border-[#8A8F94] bg-[#16171A] px-5 py-5 md:px-6 md:py-6">
      <p className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#F2F3F4] mb-3">
        {label}
      </p>
      {lines?.length > 0 && (
        <ul className="space-y-1.5 mb-3">
          {lines.map((line, i) => (
            <li key={i} className="font-mono text-[12px] text-[#B7BBBF] leading-relaxed">
              &middot; {line}
            </li>
          ))}
        </ul>
      )}
      {count !== null && (
        <p className="font-mono text-[11px] text-[#8A8F94]">
          Currently: {count} words. Target: {WORD_TARGET}+ to justify a standalone page in Phase 2.
        </p>
      )}
      {footer && <p className="font-mono text-[12px] text-[#B7BBBF] leading-relaxed mt-2">{footer}</p>}
    </div>
  )
}
