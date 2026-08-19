import { usePageMeta } from '../lib/shared'
import CapabilityPackCTA from '../components/CapabilityPackCTA'

export default function CapabilityPackPage() {
  usePageMeta({
    title: 'Request the Capability Pack | Dumas Group South Africa',
    description: 'Request the Dumas Group capability pack: volumes, grades, logistics capacity and current availability across coal, chrome and limestone.',
    canonical: 'https://dumasgroup.co.za/capability-pack/',
  })

  return (
    <div className="pt-20">
      <CapabilityPackCTA />
    </div>
  )
}
