// Branches on externalUrl per §B.3b of the addendum: a real external site gets a
// "Visit ... ↗" link; no site means no button at all (handled inline by the caller via
// an expandable detail section instead), so we never show an action on some companies
// and not others without the difference being visibly intentional.
export default function CompanyAction({ company }) {
  if (!company.externalUrl) return null
  return (
    <a
      href={company.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#16171A] hover:text-[#71767C] transition-colors inline-flex items-center gap-2"
    >
      Visit {company.name} ↗
    </a>
  )
}
