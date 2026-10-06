import { useEffect } from 'react'

const PORTAL_ID = '147816172'
const FORM_ID = 'aa87fc95-6600-4564-b78e-ca4f02b04d31'
const REGION = 'eu1'
const SRC = `https://js-${REGION}.hsforms.net/forms/embed/${PORTAL_ID}.js`

// HubSpot's embed script only scans the page once, when it loads. In a client-side routed
// app the container mounts after that, so the script is re-added each time the form mounts.
export default function HubSpotForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = SRC
    script.defer = true
    document.body.appendChild(script)
    return () => script.remove()
  }, [])

  return <div className="hs-form-frame" data-region={REGION} data-form-id={FORM_ID} data-portal-id={PORTAL_ID} />
}
