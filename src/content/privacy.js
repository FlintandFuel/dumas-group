// Privacy notice copy. FIRST DRAFT for Dumas Group to review; not yet approved and not legal advice.
// Anything in [square brackets] is a fact we could not verify and must be confirmed or replaced
// before publishing. The page highlights those parts automatically.
//
// When the notice is approved: set PRIVACY_NOTICE_DRAFT to false in src/lib/shared.jsx (removes the
// draft banner and the noindex tag), fill in every [bracket], and add /privacy-policy/ to sitemap.xml.

export const privacyMeta = {
  lastUpdated: '[Date of approval]',
  intro:
    'This notice explains how Dumas Group South Africa ("Dumas Group", "we", "us") collects, uses, shares and protects personal information when you visit dumasgroup.co.za or contact us through it. We handle personal information in line with the Protection of Personal Information Act 4 of 2013 (POPIA).',
}

export const privacySections = [
  {
    id: 'who-we-are',
    heading: 'Who is responsible for your information',
    paragraphs: [
      'The responsible party for the personal information described in this notice is:',
    ],
    list: [
      '[Registered company name and registration number]',
      'Building 3, 4th Floor, 11 Alice Lane, Sandhurst, Sandton, 2196',
      'Email: info@dumasgroup.co.za',
      'Phone: 010 100 3132',
      'Information Officer: Andrea Nunes, andrea@dumasgroup.co.za',
    ],
  },
  {
    id: 'what-we-collect',
    heading: 'What information we collect',
    paragraphs: ['We collect only what we need to respond to you and run the website.'],
    list: [
      'Contact form: the first name, last name, email address, phone number and message you type into the form on our Contact page.',
      'Correspondence: anything you send us by email or tell us when you phone, and our replies.',
      'Technical information: your IP address, browser type, device and the pages requested. This is recorded by our hosting provider and by the third-party services the site loads (see "Cookies and third-party services").',
    ],
    after:
      'We do not ask for special personal information (such as health, religion or biometric details) or information about children.',
  },
  {
    id: 'how-we-use-it',
    heading: 'Why we use it',
    paragraphs: ['We use personal information to:'],
    list: [
      'respond to your enquiry and continue any business conversation you start with us, including partnership, investment and supply discussions;',
      'keep the website secure and working properly;',
      'meet our legal and regulatory obligations.',
    ],
    after:
      'Our grounds under POPIA are your consent when you submit the form, steps taken at your request before entering a contract, our legitimate interest in responding to enquiries and running our business, and legal obligation where it applies. We do not sell personal information and we do not make automated decisions about you. We do not send marketing emails or newsletters. If that ever changes, we will ask for your consent first.',
  },
  {
    id: 'who-we-share-with',
    heading: 'Who we share it with',
    paragraphs: [
      'We use a small number of service providers (operators under POPIA) who process information on our behalf and may only use it for that purpose:',
    ],
    list: [
      'HubSpot: receives and stores contact form submissions and manages our enquiry records. Submissions are stored in HubSpot\'s European (EU1) data centre.',
      'Google: provides the map on our Contact page and the fonts used on the site.',
      '[Name of website hosting provider]: hosts the website.',
    ],
    after:
      'We may also disclose information to our professional advisers, or to a regulator or court, where the law requires it.',
  },
  {
    id: 'cross-border',
    heading: 'Transfers outside South Africa',
    paragraphs: [
      'Some of our service providers store or process information outside South Africa, including in the European Union and the United States. Where this happens we rely on the recipient being subject to law or binding terms that give a level of protection equivalent to POPIA, or on your consent, as section 72 of POPIA allows.',
    ],
  },
  {
    id: 'cookies',
    heading: 'Cookies and third-party services',
    paragraphs: [
      'Our own website does not set cookies and does not use analytics, advertising or tracking tools. It does not store information in your browser\'s local storage.',
      'The Contact page loads content from third parties, and those services can set their own cookies or receive your IP address when the content loads:',
    ],
    list: [
      'HubSpot (contact form). At the time of writing the only cookie we observed was a short-lived security cookie called __cf_bm, set by HubSpot\'s network provider to identify automated bots. It expires after about 30 minutes.',
      'Google Maps (map on the Contact page) and Google Fonts (typefaces). Google receives your IP address and browser details when these load and may set its own cookies.',
    ],
    after:
      'You can block or delete cookies in your browser settings. Blocking third-party content may stop the contact form or map from displaying. If we later add analytics or marketing cookies, we will ask for your consent before they are set and update this section.',
  },
  {
    id: 'keeping-it',
    heading: 'How long we keep it',
    paragraphs: [
      'We keep enquiry information for three years after our last contact with you, unless the law or a contract requires us to keep it for longer. After that we delete it or remove anything that identifies you.',
    ],
  },
  {
    id: 'security',
    heading: 'How we protect it',
    paragraphs: [
      'We take reasonable technical and organisational steps to protect personal information, including encrypted (https) connections to the website and restricted access to enquiry records. No system is completely secure. If a security compromise affects your information, we will notify you and the Information Regulator as POPIA requires.',
    ],
  },
  {
    id: 'your-rights',
    heading: 'Your rights',
    paragraphs: ['Under POPIA you may:'],
    list: [
      'ask us to confirm whether we hold personal information about you and request a copy;',
      'ask us to correct or delete information that is inaccurate, outdated or no longer needed;',
      'object to us processing your information, or withdraw your consent at any time (this does not affect processing that already took place);',
      'object to direct marketing;',
      'complain to the Information Regulator if you believe your information has been mishandled.',
    ],
    after:
      'To exercise these rights, email our Information Officer at the address in the first section. We may need to confirm your identity first and will respond within a reasonable time.',
    regulator: {
      label: 'Information Regulator (South Africa)',
      lines: [
        'Complaints: PAIAComplaints@inforegulator.org.za',
        'Enquiries: enquiries@inforegulator.org.za',
        'Website: inforegulator.org.za',
      ],
    },
  },
  {
    id: 'children',
    heading: 'Children',
    paragraphs: [
      'This website is intended for business visitors. It is not directed at anyone under 18 and we do not knowingly collect information from children.',
    ],
  },
  {
    id: 'other-sites',
    heading: 'Links to other websites',
    paragraphs: [
      'This site links to the websites of Dumas Group companies and partners, such as Nyezi Mining Holdings, Nyezi Steel, AET Group, DVP Hub and Changing Lives Charity. They are separate organisations with their own privacy practices, and this notice does not cover them.',
    ],
  },
  {
    id: 'changes',
    heading: 'Changes to this notice',
    paragraphs: [
      'We may update this notice from time to time. The date at the top of the page shows when it was last changed.',
    ],
  },
]
