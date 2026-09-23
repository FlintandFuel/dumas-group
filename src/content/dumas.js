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
  { value: '12+', label: 'Export markets served' },
  { value: '60+ yrs', label: 'Combined geological experience' },
  { value: '2008', label: 'Group established' },
]

export const team = [
  { name: 'Name Surname', title: 'Title' },
  { name: 'Name Surname', title: 'Title' },
  { name: 'Name Surname', title: 'Title' },
  { name: 'Name Surname', title: 'Title' },
  { name: 'Name Surname', title: 'Title' },
  { name: 'Name Surname', title: 'Title' },
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
  { year: '2015', fact: 'Campbell Limestone Project acquired: Northern Cape.' },
  { year: '2017', fact: 'AET Group founded. Off-grid and renewable energy capability.' },
  { year: '2021', fact: 'Nyezi Steel and Apexion established.' },
  { year: '2022', fact: 'Boffin established.' },
]

export const caseStudies = [
  {
    title: 'Campbell Limestone Project',
    sector: 'Mining',
    objection: 'Do you understand your product beyond digging it up?',
    meta: { period: 'Ongoing', commodity: 'Limestone', place: 'Northern Cape, South Africa', role: 'Owner-operator' },
    context: 'Development of a metallurgical and industrial-grade limestone asset in the Northern Cape, supplying flue-gas desulphurisation and industrial buyers.',
    owned: 'Mining rights and extraction, with grade and purity specification under Nyezi Mining Holdings.',
    outcome: 'Established supply relationship with domestic power utility offtake.',
    pending: 'CaCO₃ purity, grade and receiving application pending confirmation.',
  },
  {
    title: 'AET off-grid power, Namibia',
    sector: 'Energy',
    objection: 'Are you a declining coal business, or a group with a next act?',
    meta: { period: 'In development', commodity: 'Renewable energy', place: 'Namibia', role: 'Developer' },
    context: 'An off-grid power project addressing the regional power shortfall, developed under AET Group’s renewable energy and EPC capability.',
    owned: 'Project development and technical capability under AET Group.',
    outcome: 'Project in active development.',
    pending: 'Installed or planned capacity (MW/MWh), technology mix and project stage pending confirmation.',
  },
  {
    placeholder: true,
    title: 'Nyezi Steel',
    sector: 'Industrial',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    placeholder: true,
    title: 'Boffin',
    sector: 'Property',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    placeholder: true,
    title: 'DVP Hub',
    sector: 'Technology',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
]

// Company data (Nyezi Mining, AET Group, Boffin etc.) lives in content/companies.js —
// it is the single source for the homepage teaser, the /our-companies page and the organogram.

export const faqs = [
  {
    q: 'What is a diversified holdings company and how does it operate?',
    a: 'A diversified holdings company owns and funds a group of separate operating businesses across different industries, rather than running a single business itself. Dumas Group works this way: we hold and capitalise each subsidiary, from mining to energy to property, and each one operates under its own management while drawing on the group’s balance sheet, relationships and shared capability. The advantage is resilience. Cash generated in one sector can fund growth in another, so the group isn’t dependent on a single market or commodity cycle.',
  },
  {
    q: 'What industries does Dumas Group invest in?',
    a: 'We invest across five sectors: mining, through mineral exploration and extraction under Nyezi Mining Holdings; industrial manufacturing, through steel under Nyezi Steel and electrical and control systems under Apexion; energy, through renewable and off-grid power development under AET Group; property, through development and construction under Boffin; and technology, through ICT infrastructure management under DVP Hub. Each sector was chosen because it forms part of the essential, long-cycle infrastructure that developing economies are built on.',
  },
  {
    q: 'How does Dumas Group select mineral exploration projects?',
    a: 'We prioritise mineral rights with a clear route to market, whether that is an established offtake relationship, existing rail or road access to port, or proximity to domestic power utilities that already buy what we produce. Our current mining rights, held under Nyezi Mining Holdings, span Mpumalanga, the Northern Cape, North West, Free State and Gauteng, giving us a spread of commodities including coal, chrome and limestone rather than a single-asset exposure.',
  },
  {
    q: 'What renewable or energy projects does Dumas Group currently hold?',
    a: 'AET Group is our renewable energy and off-grid power developer, and it is currently developing an off-grid power project in Namibia aimed at the regional power shortfall across the Southern African Power Pool. AET also carries EPC capability in-house, so it can take a project from development through to construction rather than handing it off to a third party.',
  },
  {
    q: 'How is Dumas Group involved in housing and property development?',
    a: 'Our property arm, Boffin, handles residential development end to end, from site selection and financial planning through to project management and execution. It was set up specifically to address South Africa’s housing shortfall, applying the same long-term, infrastructure-first approach we take in mining and energy to the built environment.',
  },
  {
    q: 'Where does Dumas Group operate?',
    a: 'Dumas Group is headquartered in Sandton, Johannesburg. Our mining rights and operations sit in Mpumalanga, the Northern Cape, North West, Free State and Gauteng, and our energy development work extends into Namibia and the broader SADC region. On the export side, our commodities reach 12 or more markets, primarily across Asia with a smaller share going to Europe.',
  },
]
