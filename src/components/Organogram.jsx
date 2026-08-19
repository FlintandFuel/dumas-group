import { useRef, useMemo, useState, Fragment } from 'react'
import { topLevelCompanies, childrenOf } from '../content/companies'

// Same layout system as the homepage's OrganogramCompact — same two views, same spacing,
// same no-bleed content-width blocks — with the colors reversed for a light page (dark
// charcoal chips instead of light ones, so they read with the same contrast/weight the
// homepage's light-on-dark chips have), plus the extra detail this page needs: nested
// children, click-to-scroll-and-focus, a hover tooltip with the one-line role, and full
// tree keyboard/ARIA support.

// `sectionFocusRefs` is a ref object ({ current: { [slug]: HTMLElement } }) shared with the
// company sections below via the OurCompanies page, so a click here can focus the right heading.
function activateNode(slug, sectionFocusRefs) {
  const target = document.getElementById(`company-${slug}`)
  if (!target) return
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  const heading = sectionFocusRefs?.current?.[slug]
  window.setTimeout(() => heading?.focus(), 450)
}

// Flat, ordered node list used for arrow-key navigation and the hidden crawler/AT tree.
function buildFlatOrder() {
  const order = [{ slug: 'dumas-group', name: 'Dumas Group', depth: 0, parent: null }]
  for (const c of topLevelCompanies) {
    order.push({ slug: c.slug, name: c.name, depth: 1, parent: 'dumas-group' })
    for (const child of childrenOf(c.slug)) {
      order.push({ slug: child.slug, name: child.name, depth: 2, parent: c.slug })
    }
  }
  return order
}

function HiddenTree({ order }) {
  return (
    <ul aria-hidden="true" className="sr-only">
      {order.map((n) => (
        <li key={n.slug}>{n.name}{n.parent ? `, part of ${order.find((p) => p.slug === n.parent)?.name}` : ''}</li>
      ))}
    </ul>
  )
}

function Node({
  slug, name, role, isRoot = false, dimmed = false, fit = false, nodeRef, tabIndex, onKeyDown, onActivate,
}) {
  const [hover, setHover] = useState(false)
  const base = fit
    ? 'px-4 py-3 text-left bg-[#1A1B1E] border border-[#2E3034] hover:border-[#8A8F94] transition-colors block w-full'
    : 'px-4 py-3 text-center bg-[#1A1B1E] border border-[#2E3034] hover:border-[#8A8F94] transition-colors inline-block whitespace-nowrap'

  return (
    <button
      ref={nodeRef}
      type="button"
      role="treeitem"
      aria-label={isRoot ? `${name}, group root` : `${name}${role ? `, ${role}` : ''}`}
      aria-selected={hover}
      tabIndex={tabIndex}
      onKeyDown={onKeyDown}
      onClick={onActivate}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className={`relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#16171A] focus-visible:outline-offset-4 ${base}`}
      style={{
        borderLeft: isRoot ? '3px solid #F2F3F4' : undefined,
        opacity: dimmed ? 0.75 : 1,
      }}
    >
      <span className="font-mono text-[11px] font-semibold tracking-[0.06em] uppercase leading-tight text-[#F2F3F4]" style={{ fontSize: dimmed ? '10px' : undefined }}>
        {name}
      </span>

      {hover && role && (
        <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-20 w-max max-w-[220px] bg-[#3A3C40] text-[#F2F3F4] text-[11px] font-light leading-snug px-3 py-2 pointer-events-none">
          {role}
        </span>
      )}
    </button>
  )
}

export default function Organogram({ sectionFocusRefs }) {
  const flatOrder = useMemo(buildFlatOrder, [])
  const nodeRefs = useRef({})

  const handleActivate = (slug) => {
    if (slug === 'dumas-group') return
    activateNode(slug, sectionFocusRefs)
  }

  const handleKeyDown = (e, slug) => {
    const idx = flatOrder.findIndex((n) => n.slug === slug)
    let nextSlug = null
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlug = flatOrder[idx + 1]?.slug
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') nextSlug = flatOrder[idx - 1]?.slug
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleActivate(slug)
      return
    }
    if (nextSlug) {
      e.preventDefault()
      nodeRefs.current[nextSlug]?.focus()
    }
  }

  const registerNodeRef = (slug) => (el) => { nodeRefs.current[slug] = el }

  return (
    <div>
      <HiddenTree order={flatOrder} />

      <div role="tree" aria-label="Dumas Group organogram" className="w-full">
        {/* True desktop — horizontal, no wrap */}
        <div className="hidden xl:block">
          <div className="flex justify-center mb-6">
            <Node
              slug="dumas-group"
              name="Dumas Group"
              isRoot
              nodeRef={registerNodeRef('dumas-group')}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, 'dumas-group')}
              onActivate={() => {}}
            />
          </div>
          <div className="flex justify-center mb-6">
            <div className="w-px h-6 bg-[#8A8F94]" />
          </div>
          <div className="flex justify-center flex-wrap gap-3 items-start">
            {topLevelCompanies.map((c) => {
              const children = childrenOf(c.slug)
              return (
                <div key={c.slug} className="grid gap-2 items-start" style={{ gridTemplateColumns: 'max-content' }}>
                  <Node
                    slug={c.slug}
                    name={c.name}
                    role={c.role}
                    fit
                    nodeRef={registerNodeRef(c.slug)}
                    tabIndex={-1}
                    onKeyDown={(e) => handleKeyDown(e, c.slug)}
                    onActivate={() => handleActivate(c.slug)}
                  />
                  {children.map((child) => (
                    <Node
                      key={child.slug}
                      slug={child.slug}
                      name={child.name}
                      role={child.role}
                      dimmed
                      fit
                      nodeRef={registerNodeRef(child.slug)}
                      tabIndex={-1}
                      onKeyDown={(e) => handleKeyDown(e, child.slug)}
                      onActivate={() => handleActivate(child.slug)}
                    />
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Narrow desktop and below — root on the left, companies left-aligned against the
            vertical line. The blocks column itself is capped (not the whole row including
            root), so it sits close to the line instead of floating in a wide, empty column. */}
        <div className="xl:hidden flex items-stretch gap-6">
          <div className="flex-shrink-0 flex items-start pt-1">
            <Node
              slug="dumas-group"
              name="Dumas Group"
              isRoot
              nodeRef={registerNodeRef('dumas-group-m')}
              tabIndex={0}
              onKeyDown={() => {}}
              onActivate={() => {}}
            />
          </div>
          <div className="flex-shrink-0 w-px bg-[#8A8F94]" />
          <div className="grid gap-2.5 w-full grid-cols-[minmax(0,1fr)] sm:grid-cols-[max-content] sm:max-w-[450px]">
            {topLevelCompanies.map((c) => {
              const children = childrenOf(c.slug)
              return (
                <Fragment key={c.slug}>
                  <div className="min-w-0">
                    <Node
                      slug={c.slug}
                      name={c.name}
                      role={c.role}
                      fit
                      nodeRef={registerNodeRef(`${c.slug}-m`)}
                      tabIndex={-1}
                      onKeyDown={() => {}}
                      onActivate={() => handleActivate(c.slug)}
                    />
                  </div>
                  {children.map((child) => (
                    <div key={child.slug} className="min-w-0" style={{ marginLeft: '24px', width: 'calc(100% - 24px)' }}>
                      <Node
                        slug={child.slug}
                        name={child.name}
                        role={child.role}
                        dimmed
                        fit
                        nodeRef={registerNodeRef(`${child.slug}-m`)}
                        tabIndex={-1}
                        onKeyDown={() => {}}
                        onActivate={() => handleActivate(child.slug)}
                      />
                    </div>
                  ))}
                </Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
