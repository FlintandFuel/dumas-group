// All Dumas Group copy lives here so wording can be revised without touching components.
// Every figure below is a proposal awaiting CFO confirmation. See the note rendered
// beneath the proof bar and case studies rather than a per-figure toggle.

// Confirmed real contact details (phone/email from the live site, full address supplied
// directly) — used on both the footer and /contact.
export const contact = {
  tagline: 'Dumas Group | Strategic Partnerships for Growth',
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
  { stage: 'Rights', status: 'OWNED' },
  { stage: 'Extraction', status: 'OWNED' },
  { stage: 'Processing', status: 'OWNED' },
  { stage: 'Rail & Road', status: 'OPERATED' },
  { stage: 'Port', status: 'OPERATED' },
  { stage: 'Export', status: 'OWNED' },
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
  { year: '2010', fact: 'First prospecting right secured.' },
  { year: '2012', fact: 'Nyezi Mining founded.' },
  { year: '2015', fact: 'Campbell Limestone Project acquired. Northern Cape.' },
  { year: '2017', fact: 'AET Group founded. Off-grid and renewable energy capability.' },
  { year: '2019', fact: 'Sustained-tonnage coal supply contract delivered pre-COVID.' },
  { year: '2021', fact: 'Nyezi Steel and Apexion established.' },
  { year: '2023', fact: 'Boffin and DVP Hub established.' },
]

export const caseStudies = [
  {
    title: 'Sustained coal supply at scale',
    objection: 'Can you actually deliver at scale?',
    meta: { period: 'Pre-2020', commodity: 'Coal', place: 'Mpumalanga, South Africa', role: 'Owner-operator' },
    context: 'A multi-year offtake commitment requiring consistent monthly tonnage into export and domestic markets, sustained through mining, wash plant and rail logistics owned within the group.',
    owned: 'Mining rights, wash plant processing, and rail coordination through to port.',
    outcome: 'Contracted tonnage delivered on schedule for the full term of the agreement.',
    pending: 'Contract name, exact tonnage and duration pending client confirmation.',
  },
  {
    title: 'Campbell Limestone Project',
    objection: 'Do you understand your product beyond digging it up?',
    meta: { period: 'Ongoing', commodity: 'Limestone', place: 'Northern Cape, South Africa', role: 'Owner-operator' },
    context: 'Development of a metallurgical and industrial-grade limestone asset in the Northern Cape, supplying flue-gas desulphurisation and industrial buyers.',
    owned: 'Mining rights and extraction, with grade and purity specification under Nyezi Mining Holdings.',
    outcome: 'Established supply relationship with domestic power utility offtake.',
    pending: 'CaCO₃ purity, grade and receiving application pending confirmation.',
  },
  {
    title: 'AET off-grid power, Namibia',
    objection: 'Are you a declining coal business, or a group with a next act?',
    meta: { period: 'In development', commodity: 'Renewable energy', place: 'Namibia', role: 'Developer' },
    context: 'An off-grid power project addressing the regional power shortfall, developed under AET Group’s renewable energy and EPC capability.',
    owned: 'Project development and technical capability under AET Group.',
    outcome: 'Project in active development.',
    pending: 'Installed or planned capacity (MW/MWh), technology mix and project stage pending confirmation.',
  },
]

// Company data (Nyezi Mining, AET Group, Boffin etc.) lives in content/companies.js —
// it is the single source for the homepage teaser, the /our-companies page and the organogram.

export const faqs = [
  {
    q: 'Do you own the mining rights, or broker them?',
    a: 'We hold the mining rights directly across our coal, chrome and limestone operations in Mpumalanga and the Northern Cape. We are not a broker. Rights, extraction, processing, logistics and export sit within the group.',
  },
  {
    q: 'What volume can you commit to, and over what term?',
    a: 'Current production is approximately 500,000t of coal exported and 300,000t supplied domestically annually, alongside 120,000t of chrome. Term commitments are structured per offtake agreement and confirmed in the capability pack.',
  },
  {
    q: 'How does product reach port?',
    a: 'By a combination of rail and road, roughly 1,600 tons per day, with approximately 20,000 tons passing through port each month. The receiving port is confirmed on request.',
  },
  {
    q: 'What grades and specifications do you supply?',
    a: 'Full grade, sizing and assay specifications for coal, chrome and limestone are set out above and confirmed in detail in the capability pack.',
  },
  {
    q: 'Which markets do you currently serve?',
    a: 'We currently serve 12+ export markets, principally India and broader Asia, with a smaller share into Europe.',
  },
  {
    q: 'Who handles licensing and compliance?',
    a: 'Licensing and compliance are managed directly within the group across each mining right and operating entity.',
  },
]
