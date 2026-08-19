// Persistent, non-dismissible banner for the CSI specimen route — §F.1 of the addendum.
// No close button by design: every piece of content below is illustrative, and the banner
// must stay visible for the entire time a viewer is on the page.
export const SPECIMEN_BANNER_HEIGHT = 44

export default function SpecimenBanner() {
  return (
    <div
      role="alert"
      className="fixed top-0 left-0 right-0 z-[70] flex items-center justify-center px-4 text-center"
      style={{
        height: SPECIMEN_BANNER_HEIGHT,
        backgroundImage: 'repeating-linear-gradient(135deg, #16171A 0 14px, #F2F3F4 14px 28px)',
      }}
    >
      <span className="bg-[#16171A] text-white font-mono text-[11px] md:text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 leading-snug">
        Specimen page. Illustrative structure only.
      </span>
    </div>
  )
}
