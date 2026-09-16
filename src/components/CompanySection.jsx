import { useState } from 'react'
import { FadeUp, img } from '../lib/shared'
import { childrenOf } from '../content/companies'
import CompanyAction from './CompanyAction'
import ContentGapZone from './ContentGapZone'

function ExpandableDetail({ points }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="font-mono text-[11px] font-semibold tracking-[0.18em] uppercase text-[#16171A] hover:text-[#71767C] transition-colors inline-flex items-center gap-2 min-h-[44px]"
      >
        {open ? 'Hide capability detail' : 'Show capability detail'}
        <span className="w-4 h-px bg-current" />
      </button>
      {open && (
        <ul className="mt-3 space-y-1.5">
          {points.map((p, i) => (
            <li key={i} className="text-[#4B4F54] leading-[1.7] font-light text-[14px]">&middot; {p}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function CompanySection({ company, showGaps, sectionFocusRefs, delay = 0, nested = false }) {
  const { slug, name, formalName, role, body, image, logo, logoHeight, region, founded, detailPoints, placeholder, project, subProducts } = company
  const children = childrenOf(slug)
  const Heading = nested ? 'h4' : 'h3'

  const metaParts = [founded ? `Founded ${founded}` : null, region].filter(Boolean)

  return (
    <FadeUp
      delay={delay}
      id={`company-${slug}`}
      className={nested
        ? 'scroll-mt-24 py-6 border-t border-dotted border-[#D3D4D1] ml-0 md:ml-8'
        : 'scroll-mt-24 py-10 border-b border-[#E2E3E1] last:border-b-0'}
    >
      <div className="grid md:grid-cols-12 gap-8 md:gap-10">
        {image && (
          <div className="md:col-span-4">
            <div className="aspect-[4/3] overflow-hidden bg-[#E7E7E4]">
              <img src={img(image)} alt={`${name}, Dumas Group`} className="w-full h-full object-cover" loading="lazy" width={480} height={360} />
            </div>
          </div>
        )}
        <div className={image ? 'md:col-span-8' : 'md:col-span-12'}>
          {logo && (
            <img src={img(logo)} alt={`${name} logo`} className="w-auto mb-4 object-contain object-left" style={{ height: `${logoHeight || 100}px`, maxWidth: '340px' }} />
          )}
          <Heading
            id={`company-heading-${slug}`}
            tabIndex={-1}
            ref={(el) => {
              if (sectionFocusRefs) sectionFocusRefs.current[slug] = el
            }}
            className={`font-display font-semibold text-[#16171A] outline-none mb-1.5 ${nested ? 'text-lg' : 'text-xl md:text-2xl'}`}
          >
            {name}
          </Heading>

          {placeholder ? (
            <p className="text-[#4B4F54] leading-[1.75] font-light italic text-[15px] mb-5">{body}</p>
          ) : (
            <>
              {formalName && (
                <p className="font-mono text-[11px] text-[#8A8F94] italic mb-3">Formerly {formalName}</p>
              )}
              {role && <p className="text-[#4B4F54] leading-[1.6] font-light text-[15px] mb-4">{role}</p>}

              {metaParts.length > 0 && (
                <p className="font-mono text-[11px] text-[#8A8F94] tracking-wide mb-4">
                  {metaParts.join(' · ')}
                </p>
              )}

              <p className="text-[#4B4F54] leading-[1.75] font-light text-[15px] mb-5">{body}</p>

              <CompanyAction company={company} />
              {!company.externalUrl && detailPoints && <ExpandableDetail points={detailPoints} />}

              {subProducts && (
                <div className="mt-6 space-y-6">
                  {subProducts.map((p) => (
                    <div key={p.name}>
                      <h4 className="font-display font-semibold text-[#16171A] text-base mb-1.5">
                        {p.name}
                        {p.mark && <sup className="ml-0.5 text-[10px]">{p.mark}</sup>}
                      </h4>
                      <p className="text-[#4B4F54] leading-[1.7] font-light text-[14px]">{p.body}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {project ? (
            <div className="mt-6 border border-dashed border-[#8A8F94] px-5 py-5 md:px-6 md:py-6">
              <p className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#8A8F94] mb-2">
                {project.name}
              </p>
              <p className="text-[#4B4F54] leading-[1.7] font-light text-[14px] italic">{project.body}</p>
            </div>
          ) : (
            <ContentGapZone
              label={`CONTENT GAP: ${name.toUpperCase()}`}
              company={company}
              lines={company.gaps}
              visible={showGaps}
            />
          )}
        </div>
      </div>

      {children.length > 0 && (
        <div className="mt-2">
          {children.map((child, i) => (
            <CompanySection
              key={child.slug}
              company={child}
              showGaps={showGaps}
              sectionFocusRefs={sectionFocusRefs}
              delay={0.05 * (i + 1)}
              nested
            />
          ))}
        </div>
      )}
    </FadeUp>
  )
}
