// All Dumas Group copy lives here so wording can be revised without touching components.
// Every figure below is a proposal awaiting CFO confirmation. See the note rendered
// beneath the proof bar and case studies rather than a per-figure toggle.

// Confirmed real contact details (phone/email from the live site, full address supplied
// directly) — used on both the footer and /contact.
export const contact = {
  tagline: 'Dumas Group | Innovation Partner',
  phone: '010 100 3132',
  phoneHref: 'tel:0101003132',
  email: 'info@dumasgroup.co.za',
  addressLines: ['Building 3, 4th Floor', '11 Alice Lane', 'Sandhurst, Sandton', '2196'],
}

export const proofFigures = [
  { value: '500,000t', label: 'Coal exported annually' },
  { value: '300,000t', label: 'Coal supplied domestically' },
  { value: '120,000t', label: 'Chrome produced annually' },
  { value: '12+', label: 'Export markets served' },
  { value: '60+ yrs', label: 'Combined geological experience' },
  { value: '2008', label: 'Group established' },
]

export const valueChain = [
  { stage: 'Mining' },
  { stage: 'Engineering' },
  { stage: 'Housing' },
  { stage: 'Energy' },
]

export const commodities = [
  {
    slug: 'coal',
    name: 'Coal',
    blurb: 'Thermal coal from mining rights in Mpumalanga, moved by rail and road to port and to domestic power utilities.',
    volume: '500,000t exported / 300,000t domestic annually',
    market: 'India, broader Asia, ~10% Europe',
    asset: 'Mpumalanga mining rights',
    spec: [
      { label: 'Grade', value: 'RB3 equivalent', confirmed: true },
      { label: 'Sizing', value: '0–50mm, washed', confirmed: true },
      { label: 'CV (air dried)', value: 'Pending assay confirmation', confirmed: false },
      { label: 'Ash content', value: 'Pending assay confirmation', confirmed: false },
      { label: 'Sulphur', value: 'Pending assay confirmation', confirmed: false },
    ],
    applications: 'Power generation and industrial thermal processes, supplied to export utilities and South African power stations.',
  },
  {
    slug: 'chrome',
    name: 'Chrome',
    blurb: 'Chrome ore and concentrate, produced for stainless steel and ferrochrome demand across Asia.',
    volume: '120,000t produced annually',
    market: 'Asia (primary demand centre)',
    asset: 'Northern Cape and North West operations',
    spec: [
      { label: 'Grade', value: 'Pending assay confirmation', confirmed: false },
      { label: 'Cr:Fe ratio', value: 'Pending assay confirmation', confirmed: false },
      { label: 'Sizing', value: 'Lumpy and concentrate', confirmed: true },
    ],
    applications: 'Ferrochrome production for stainless steel manufacture.',
  },
  {
    slug: 'limestone',
    name: 'Limestone',
    blurb: 'Metallurgical and industrial-grade limestone from the Campbell Limestone Project, Northern Cape.',
    volume: 'Pending confirmation',
    market: 'Domestic power utilities, industrial buyers',
    asset: 'Campbell Limestone Project, Northern Cape',
    spec: [
      { label: 'CaCO₃ purity', value: 'Pending assay confirmation', confirmed: false },
      { label: 'Sizing', value: 'Pending confirmation', confirmed: false },
    ],
    applications: 'Our limestone feeds flue-gas desulphurisation at power stations. It removes sulphur dioxide before it reaches the air.',
  },
]

export const timeline = [
  { year: '2008', fact: 'Dumas Group established.' },
  { year: '2012', fact: 'Nyezi Mining Holdings founded.' },
  { year: '2014', fact: 'DVP Hub established.' },
  { year: '2015', fact: 'Campbell Limestone Project acquired. Northern Cape.' },
  { year: '2017', fact: 'AET Group founded. Off-grid and renewable energy capability.' },
  { year: '2021', fact: 'Nyezi Steel and Apexion established.' },
  { year: '2022', fact: 'Boffin established.' },
]

export const caseStudies = [
  {
    title: 'To Be Confirmed',
    placeholder: true,
    body: 'To be confirmed.',
  },
  {
    title: 'To Be Confirmed',
    placeholder: true,
    body: 'To be confirmed.',
  },
]

// Company data (Nyezi Mining, AET Group, Boffin etc.) lives in content/companies.js —
// it is the single source for the homepage teaser, the /our-companies page and the organogram.

export const faqs = [
  {
    q: 'Do you own the mining rights, or broker them?',
    a: 'To be confirmed.',
  },
  {
    q: 'What volume can you commit to, and over what term?',
    a: 'To be confirmed.',
  },
  {
    q: 'How does product reach port?',
    a: 'To be confirmed.',
  },
  {
    q: 'What grades and specifications do you supply?',
    a: 'To be confirmed.',
  },
  {
    q: 'Which markets do you currently serve?',
    a: 'To be confirmed.',
  },
  {
    q: 'Who handles licensing and compliance?',
    a: 'To be confirmed.',
  },
]
