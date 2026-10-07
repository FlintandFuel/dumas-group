// All Dumas Group copy lives here so wording can be revised without touching components.
// Every figure below is a proposal awaiting CFO confirmation. See the note rendered
// beneath the proof bar and case studies rather than a per-figure toggle.

// Confirmed real contact details (phone/email from the live site, full address supplied
// directly) — used on both the footer and /contact.
export const contact = {
  phone: '010 100 3132',
  phoneHref: 'tel:0101003132',
  email: 'info@dumasgroup.co.za',
  addressLines: ['Building 3, 4th Floor', '11 Alice Lane', 'Sandhurst, Sandton', '2196'],
}

export const proofFigures = [
  { value: '12+', label: 'Export markets served' },
  { value: '2008', label: 'Group established' },
]

export const team = [
  {
    "name": "Vainon Willis",
    "title": "Founder & Group CEO",
    "image": "team-vainon-willis.webp",
    "bio": [
      "Is a diversified entrepreneur and investor who began his business career in 2008 across mining, construction and property development, and FMCG.",
      "Since then, he has built and scaled multiple subsidiaries within the Dumas Group, expanding into new sectors through greenfield development, strategic investment and operational leadership.",
      "Recognised for his strength in high-level negotiations, commercial structuring, stakeholder management and long-term business relationships, Vainon brings a global perspective with deep experience in deal-making, capital allocation and building sustainable businesses across markets.",
      "He is actively involved in driving group strategy, partnerships and international growth."
    ]
  },
  {
    "name": "Mpumi Nzimande",
    "title": "Group Chief Financial Officer",
    "image": "team-mpumi-nzimande.webp",
    "bio": [
      "Is the Group Chief Financial Officer with over a decade of experience in finance, accounting and taxation.",
      "Her areas of expertise include tax advisory, financial management, business rescue, corporate governance, risk and compliance, complemented by broad exposure to the mining, engineering, construction and logistics sectors.",
      "She brings a strategic and analytical approach to financial leadership, combining strong governance with financial insight to support sound decision making and sustainable growth across the Group’s diverse portfolio of businesses."
    ]
  },
  {
    "name": "Renier von Zeuner",
    "title": "Group Chief Operating Officer",
    "image": "team-renier-von-zeuner.webp",
    "bio": [
      "Oversees group strategy and operations across the energy, property, and ICT portfolios. He holds degrees in Political Sciences and International Relations, which gives him a strong grounding in the policy, regulatory and stakeholder environments the group works in.",
      "His background in the Communications and Integrated Services sectors underpins his approach to aligning diverse teams and partners around shared goals.",
      "Day to day, he focuses on business development and operational management, helping turn the group’s strategy into delivery."
    ]
  },
  {
    "name": "Andrea Nunes",
    "title": "Executive Assistant and Office Manager",
    "image": "team-andrea-nunes.webp",
    "bio": [
      "Brings over 20 years of professional experience to our team, including more than a decade as an Executive Assistant and Office Manager.",
      "She provides high-level executive support, managing competing priorities, coordinating schedules and overseeing office operations with discretion and efficiency.",
      "Known for her organisational skill and composure under pressure, Andrea anticipates needs, maintains strict confidentiality and pays close attention to detail. Her commitment to structure and problem-solving ensures our leadership can stay focused on what matters most."
    ]
  },
  {
    "name": "Kaitlin Mani",
    "title": "Group Financial Manager",
    "image": "team-kaitlin-mani.webp",
    "bio": [
      "Is the Group’s Financial Manager. She holds qualifications in Accounting and Commerce and brings a strong background in management accounting, financial reporting and compliance.",
      "Her role encompasses financial oversight, cash flow forecasting, budgeting, tax and regulatory compliance, and overseeing accounting functions. She brings experience across fashion, property and manufacturing industries, with a focus on accuracy, efficiency and supporting business growth.",
      "Kaitlin brings international experience through her work in Australia and South Africa."
    ]
  },
  {
    "name": "Sevy Maphosa",
    "title": "Office Support and Hospitality Manager",
    "image": "team-sevy-maphosa.webp",
    "bio": [
      "Is a dedicated Office Support Professional with over 20 years of experience.",
      "She plays a key role in our day-to-day operations, providing additional administrative support, overseeing office facilities and ensuring a well-run, professional environment for our team and visitors. Known for her warm, positive approach, Sevy combines reliability with strong attention to detail.",
      "Whether assisting with administrative tasks, ensuring the office is organised, or simply bringing a friendly presence to the workplace, she is a valued team member who can always be counted on to keep things running seamlessly."
    ]
  }
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
    watermark: 'wm-nyezi-mining.webp',
    sector: 'Mining',
    objection: 'Do you understand your product beyond digging it up?',
    meta: { period: 'Ongoing', commodity: 'Limestone', place: 'Northern Cape, South Africa', role: 'Owner-operator' },
    context: 'Development of a metallurgical and industrial-grade limestone asset in the Northern Cape, supplying flue-gas desulphurisation and industrial buyers.',
    owned: 'Mining rights and extraction, with grade and purity specification under Nyezi Mining Holdings.',
    outcome: 'Established supply relationship with domestic power utility offtake.',
  },
  {
    title: 'AET off-grid power, Namibia',
    watermark: 'wm-aet-group.webp',
    sector: 'Energy',
    objection: 'Are you a declining coal business, or a group with a next act?',
    meta: { period: 'In development', commodity: 'Renewable energy', place: 'Namibia', role: 'Developer' },
    context: 'An off-grid power project addressing the regional power shortfall, developed under AET Group’s renewable energy and EPC capability.',
    owned: 'Project development and technical capability under AET Group.',
    outcome: 'Project in active development.',
  },
  {
    "title": "Nyezi Steel",
    "watermark": "wm-nyezi-steel.webp",
    "sector": "Industrial",
    "context": "A turnkey steel solutions company founded in 2021, managing the full supply and value chain from RFQ to international delivery. Nyezi Steel gives buyers a single point of accountability across the process. The company concluded its first SADC-focused business in 2026 and is building toward a larger role in the steel export market.",
    "owned": "A majority shareholding in Nyezi Steel, covering procurement, logistics and export execution. Group executives are closely involved, providing hands-on support across operations and finance.",
    "outcome": "First SADC-focused business concluded in 2026, with the platform being positioned for growth in steel export markets."
  },
  {
    "title": "Boffin",
    "watermark": "wm-boffin-property.webp",
    "sector": "Property",
    "context": "The group’s property investment subsidiary, focused on affordable housing and mixed-use assets. Alongside its commercial holdings in Sandton, Boffin is addressing the shortfall in student housing by recapitalising existing residential properties, bringing underused stock back into productive use rather than building from the ground up.",
    "owned": "A 100% shareholding in Boffin, which owns and manages commercial properties in Gauteng. Dumas Group executives play a direct role in the daily activities of the business, from asset operations through to operational funding.",
    "outcome": "Commercial portfolio under active management, with a student housing pipeline in development and retail. Boffin most recently designed Boffin Suites, a shared premium office space at Embassy Towers in Sandton, in 2026."
  },
  {
    "title": "DVP Hub",
    "watermark": "wm-dvp-hub.webp",
    "sector": "Technology",
    "context": "Previously known as Dhlamsville Projects, DVP Hub was strategically rebranded by Dumas Group to align with the ICT sector, delivering cybersecurity and infrastructure-based ICT solutions to the South African market. DVP Hub works where digital infrastructure meets operational risk, building platforms that keep critical networks connected and businesses running. Its work spans national infrastructure and the public and private sectors.",
    "owned": "An equity stake in DVP Hub, supporting its development and capital. The group contributes executive involvement in operations and financial management, with strategy solutions and execution.",
    "outcome": "Two key projects in development: RailHub, a rail infrastructure management platform unifying communications across the SADC rail network, and CyberStack, a purpose-built cybersecurity offering focused on business continuity and protection against cyber attack."
  },
]

// Company data (Nyezi Mining Holdings, AET Group, Boffin etc.) lives in content/companies.js —
// it is the single source for the homepage teaser, the /our-companies page and the organogram.

export const faqs = [
  {
    "q": "What is a diversified holdings company and how does it operate?",
    "a": "Dumas Group is a diversified holdings company that owns and develops businesses across mineral exploration, energy, and housing. Rather than operating as a single business, we structure each venture as its own entity under the group, allowing us to allocate capital strategically across sectors while sharing relationships, governance and operational expertise group wide."
  },
  {
    "q": "What industries does Dumas Group invest in?",
    "a": "Dumas Group invests across mineral exploration, energy (with a focus on solar-plus-BESS, and growing interest in hydro and wind), housing development (spanning student accommodation, affordable and gap-market housing, and first-home-buyer segments) and ICT and cybersecurity, a growing focus area for the group. Each vertical is backed by dedicated operating subsidiaries and long-term capital."
  },
  {
    "q": "How does Dumas Group select mineral exploration projects?",
    "a": "Dumas Group defers to the executive team of Nyezi Mining Holdings to evaluate mineral exploration opportunities, based on resource quality and potential, with a focus on projects that support the group’s broader growth strategy."
  },
  {
    "q": "What renewable energy projects does Dumas Group currently hold?",
    "a": "Dumas Group’s primary energy focus is PV + BESS (battery energy storage system) independent power production, with growing interest in hydro and wind generation. Our platform spans project sizing, permitting, structuring, and financing across target markets."
  },
  {
    "q": "How is Dumas Group involved in housing and property development?",
    "a": "Dumas Group develops housing across multiple segments: student accommodation, affordable housing, gap-market housing, and first-home-buyer properties, aimed at addressing housing shortages across our target markets. Our approach combines development expertise with structured utility and funding partnerships to deliver at scale."
  },
  {
    "q": "What makes Dumas Group different from other investment holding groups?",
    "a": "Dumas Group takes a long-term, infrastructure-first approach, building operating businesses in sectors (resources, power, and shelter) that form the backbone of developing economies. Our cross-sector structure lets us leverage shared capital, institutional relationships, and operational expertise across every vertical we hold."
  },
  {
    "q": "How can I partner or invest with Dumas Group?",
    "a": "The best way to learn more about partnering or investing with Dumas Group is to get in touch with our team, who can share detailed information on our portfolio, current opportunities, and investment approach."
  },
  {
    "q": "Where does Dumas Group operate?",
    "a": "Dumas Group is based in South Africa, with a strategic focus on the SADC region, while our interests and capabilities extend to a global reach."
  }
]
