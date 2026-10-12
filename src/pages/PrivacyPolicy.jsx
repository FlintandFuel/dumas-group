import { FadeUp, SectionLabel, usePageMeta, PRIVACY_NOTICE_DRAFT } from '../lib/shared'
import { privacyMeta, privacySections } from '../content/privacy'

// Renders [bracketed] placeholders as highlighted marks so reviewers can see what still needs confirming.
function Marked({ text }) {
  return text.split(/(\[[^\]]+\])/g).map((part, i) =>
    part.startsWith('[') ? (
      <mark key={i} className="bg-[#FFF3C4] text-[#16171A] px-1 rounded-sm">{part}</mark>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function PrivacyPolicy() {
  usePageMeta({
    title: 'Privacy Notice | Dumas Group South Africa',
    description: 'How Dumas Group South Africa collects, uses and protects personal information, including cookies and third-party services on this website.',
    canonical: 'https://dumasgroup.co.za/privacy-policy/',
    noindex: PRIVACY_NOTICE_DRAFT,
  })

  const body = 'text-[#4B4F54] leading-[1.8] font-light'
  const bodySize = { fontSize: '1.0625rem' }

  return (
    <section className="relative bg-[#FAFAF8] pt-40 pb-24 md:pt-48 md:pb-32">
      <div className="max-w-[1180px] mx-auto px-6 md:px-10">
        <div className="max-w-[760px]">
          {PRIVACY_NOTICE_DRAFT && (
            <div role="note" className="mb-12 border border-dashed border-[#16171A] bg-[#FFF3C4] p-5">
              <p className="font-mono text-[11px] font-semibold tracking-[0.2em] uppercase text-[#16171A] mb-2">
                Draft for client review
              </p>
              <p className="text-[#16171A] text-base leading-relaxed">
                This is a first draft prepared for Dumas Group to review. It has not been approved and is not legal advice.
                Highlighted items in [square brackets] must be confirmed or replaced, and the notice should be checked by a
                legal adviser before it is published.
              </p>
            </div>
          )}

          <FadeUp>
            <SectionLabel number="—" label="Legal" />
            <h1 className="font-display font-semibold text-[#16171A] leading-[1.1] mb-4" style={{ fontSize: 'clamp(1.875rem, 3.6vw, 3.25rem)' }}>
              Privacy Notice
            </h1>
            <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-[#71767C] mb-8">
              Last updated: <Marked text={privacyMeta.lastUpdated} />
            </p>
            <p className={body} style={bodySize}>{privacyMeta.intro}</p>
          </FadeUp>

          <nav aria-label="Sections of this notice" className="mt-12 border-y border-[#D3D4D1] py-6">
            <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-1 list-decimal list-inside text-[#16171A]">
              {privacySections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex items-center min-h-[44px] underline decoration-[#B7BBBF] hover:decoration-[#16171A]">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-14 space-y-14">
            {privacySections.map((s, n) => (
              <FadeUp key={s.id}>
                <section id={s.id} className="scroll-mt-28">
                  <h2 className="font-display font-semibold text-[#16171A] leading-[1.2] mb-5" style={{ fontSize: 'clamp(1.375rem, 2.2vw, 1.75rem)' }}>
                    {n + 1}. {s.heading}
                  </h2>
                  <div className="space-y-4">
                    {s.paragraphs?.map((p) => (
                      <p key={p} className={body} style={bodySize}><Marked text={p} /></p>
                    ))}
                    {s.list && (
                      <ul className={`list-disc pl-6 space-y-2 ${body}`} style={bodySize}>
                        {s.list.map((li) => (
                          <li key={li}><Marked text={li} /></li>
                        ))}
                      </ul>
                    )}
                    {s.after && <p className={body} style={bodySize}><Marked text={s.after} /></p>}
                    {s.regulator && (
                      <address className="not-italic border border-[#D3D4D1] bg-white p-5">
                        <p className="font-semibold text-[#16171A] mb-2">{s.regulator.label}</p>
                        {s.regulator.lines.map((l) => (
                          <p key={l} className={body} style={bodySize}><Marked text={l} /></p>
                        ))}
                      </address>
                    )}
                  </div>
                </section>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
