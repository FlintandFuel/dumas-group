// Structured company data for /our-companies. Adding or removing a subsidiary is a data
// edit here — the organogram, sector groups and Phase 2 /companies/[slug] routes all read
// from this one array. Body copy is verbatim from dumasgroup.co.za/our-companies/, with the
// one live typo corrected ("formally" -> "formerly").
//
// `founded` is null across the board because no founding year is confirmed for any
// individual subsidiary (only the group's 2008 founding is confirmed) — this is flagged
// as a gap rather than guessed.

export const WORD_TARGET = 400

export const companies = [
  {
    slug: 'nyezi-mining-holdings',
    name: 'Nyezi Mining Holdings',
    sector: 'Mining',
    role: 'Mineral exploration, acquisition and extraction across the group’s mining rights.',
    body: 'Nyezi Mining Holdings is a prominent mining company specialising in mineral exploration and acquisition. Our extensive portfolio includes mineral rights at various development stages, spanning regions including Mpumalanga, North West, Free State, Gauteng and Northern Cape.',
    image: 'nyezimining1.jpg',
    logo: 'companies-logos_1.webp',
    externalUrl: 'https://nyezimining.co.za/',
    founded: null,
    region: 'Mpumalanga, North West, Free State, Gauteng, Northern Cape',
    parent: 'dumas-group',
    children: [],
    gaps: [
      'One project or contract with dates and tonnage',
      'Two operating figures (e.g. hectares under right, tonnage)',
      'Named assets with province, including the Campbell Limestone Project',
      'Founding or acquisition date',
      'One specification or grade detail',
    ],
  },
  {
    slug: 'nyezi-steel',
    name: 'Nyezi Steel',
    sector: 'Industrial',
    role: 'Manufacturing and distribution of steel products for the group’s construction, automotive and infrastructure work.',
    body: 'Nyezi Steel specialises in the manufacturing and distribution of high-quality steel products. Known for its innovative production techniques and commitment to excellence, Nyezi Steel serves various industries, including construction, automotive, and infrastructure development.',
    image: 'nyezisteel1.jpg',
    logo: 'companies-logos_2.webp',
    externalUrl: 'http://nyezisteel.com/',
    founded: null,
    region: null,
    parent: 'dumas-group',
    children: [],
    gaps: [
      'One named client or project',
      'Production capacity or annual tonnage',
      'Facility location and size',
      'Certifications or quality standards held',
      'Founding date',
    ],
  },
  {
    slug: 'aet-group',
    name: 'AET Group',
    formalName: 'The African Energy Technology Company',
    sector: 'Energy',
    role: 'Renewable energy and off-grid power development for the group.',
    body: 'AET Group, formerly ‘The African Energy Technology Company’, is a renewable energy developer. We are dedicated to harnessing the boundless potential of nature to power a brighter, cleaner future.',
    image: 'AET1.jpg',
    logo: 'companies-logos_3.webp',
    externalUrl: 'https://aetgroup.africa/',
    founded: null,
    region: null,
    parent: 'dumas-group',
    children: [],
    gaps: [
      'One named project with capacity (MW/MWh)',
      'Technology mix: solar, wind, off-grid, hybrid',
      'Project locations',
      'EPC track record: projects delivered to date',
      'Founding date',
    ],
  },
  {
    slug: 'apexion',
    name: 'Apexion',
    sector: 'Industrial',
    role: 'Electrical, control and instrumentation solutions supporting the group’s operations.',
    body: 'Apexion provides full turnkey electrical, control and instrumentation solutions, which include consultation, project engineering, design, manufacturing, system integration, site installations and services, and the supply of switchgear, automation products, drives and instrumentation.',
    // Reformatted from the sentence above, not new information — see CompanyAction / §B.3b.
    detailPoints: [
      'Consultation',
      'Project engineering and design',
      'Manufacturing and system integration',
      'Site installations and services',
      'Supply of switchgear, automation products, drives and instrumentation',
    ],
    image: 'apexion1.jpg',
    logo: 'companies-logos_4.webp',
    externalUrl: null,
    founded: null,
    region: null,
    parent: 'dumas-group',
    children: [],
    gaps: [
      'One named project or client',
      'Scale of installations delivered',
      'Certifications or standards held',
      'Team size or capacity',
      'Founding date',
    ],
  },
  {
    slug: 'boffin',
    name: 'Boffin Property Development & Construction',
    sector: 'Property',
    role: 'Property development and construction, one of the group’s non-mining income streams.',
    body: 'Boffin provides end-to-end property development and construction solutions. From site selection and financial planning to project management and execution, we ensure seamless, high-quality results.',
    // Reformatted from the sentence above, not new information — see CompanyAction / §B.3b.
    detailPoints: ['Site selection', 'Financial planning', 'Project management', 'Execution and delivery'],
    image: 'boffin1.webp',
    logo: 'companies-logos_5.webp',
    externalUrl: null,
    founded: null,
    region: null,
    parent: 'dumas-group',
    children: [],
    gaps: [
      'One named development with unit count',
      'Project locations',
      'Development stage or completion date',
      'Financing or delivery model detail',
      'Founding date',
    ],
  },
  {
    slug: 'dvp-hub',
    name: 'DVP Hub',
    formalName: 'DVP HUB (PTY) LTD',
    sector: 'Technology',
    role: 'ICT infrastructure management for the group.',
    body: 'DVP HUB (PTY) LTD is a South African and African ICT infrastructure management specialist, ensuring optimal performance and security of IT systems through design, monitoring, security services, cloud solutions, and consulting.',
    image: 'dvp1.jpg',
    logo: 'companies-logos_6.webp',
    externalUrl: 'https://www.dvphub.com/',
    founded: null,
    region: null,
    parent: 'dumas-group',
    children: ['cyber-stack', 'rail-hub'],
    gaps: [
      'One named client or deployment',
      'Infrastructure scale: sites, users, uptime',
      'Certifications: ISO, security standards',
      'Team size or capacity',
      'Founding date',
    ],
  },
  {
    slug: 'cyber-stack',
    name: 'Cyber Stack',
    sector: 'Technology',
    role: '',
    body: 'This entry is a placeholder pending client input.',
    placeholder: true,
    image: null,
    logo: null,
    externalUrl: null,
    founded: null,
    region: null,
    parent: 'dvp-hub',
    children: [],
    gaps: [
      'Confirm whether this is a live, trading business unit',
      'Scope of services',
      'Relationship and reporting line to DVP Hub',
      'Any content at all: this section is currently empty',
    ],
  },
  {
    slug: 'rail-hub',
    name: 'Rail Hub',
    sector: 'Technology',
    role: '',
    body: 'This entry is a placeholder pending client input.',
    placeholder: true,
    image: null,
    logo: null,
    externalUrl: null,
    founded: null,
    region: null,
    parent: 'dvp-hub',
    children: [],
    gaps: [
      'Confirm whether this is a live, trading business unit',
      'Scope of services: logistics tech, rail-specific systems, or otherwise',
      'Relationship and reporting line to DVP Hub',
      'Any content at all: this section is currently empty',
    ],
  },
]

export const sectors = ['Mining', 'Industrial', 'Energy', 'Property', 'Technology']

export const topLevelCompanies = companies.filter((c) => c.parent === 'dumas-group')

export function companyBySlug(slug) {
  return companies.find((c) => c.slug === slug)
}

export function childrenOf(slug) {
  return companies.filter((c) => c.parent === slug)
}

export function wordCount(company) {
  const text = `${company.role} ${company.body}`.trim()
  if (!text) return 0
  return text.split(/\s+/).filter(Boolean).length
}
