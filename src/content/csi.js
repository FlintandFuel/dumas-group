// CSI specimen content — §F of the build brief addendum.
//
// EVERY value here is illustrative and must stay impossible to mistake for fact:
// initiative names are prefixed "SPECIMEN:", figures use bracketed non-values like
// [000] and [YEAR]. Do not replace a bracketed value with a plausible-looking real one,
// even as a placeholder. That is exactly the failure mode this file exists to prevent.

export const focusAreas = [
  {
    label: 'SPECIMEN: Skills and education',
    body: 'Illustrative focus area: training and education support concentrated near operating sites.',
  },
  {
    label: 'SPECIMEN: Local enterprise and supplier development',
    body: 'Illustrative focus area: supporting local and regional suppliers around group operations.',
  },
  {
    label: 'SPECIMEN: Community infrastructure',
    body: 'Illustrative focus area: infrastructure contributions in communities near operating sites.',
  },
]

export const initiatives = [
  {
    name: 'SPECIMEN: [Initiative name]',
    focusArea: 'Skills and education',
    location: '[Town], Mpumalanga',
    since: '[YEAR]',
    beneficiaries: '[Description of beneficiary group]',
    figure: '[000] participants / R[000 000] committed',
    status: 'Ongoing',
  },
  {
    name: 'SPECIMEN: [Initiative name]',
    focusArea: 'Local enterprise and supplier development',
    location: '[Town], Northern Cape',
    since: '[YEAR]',
    beneficiaries: '[Description of beneficiary group]',
    figure: '[000] suppliers / R[000 000] committed',
    status: 'Ongoing',
  },
  {
    name: 'SPECIMEN: [Initiative name]',
    focusArea: 'Community infrastructure',
    location: '[Town], North West',
    since: '[YEAR]',
    beneficiaries: '[Description of beneficiary group]',
    figure: '[000] households / R[000 000] committed',
    status: '[Status]',
  },
]

export const activityFeed = [
  { date: '[Q1 2026]', entry: 'SPECIMEN: [What happened, one line]' },
  { date: '[Q4 2025]', entry: 'SPECIMEN: [What happened, one line]' },
  { date: '[Q3 2025]', entry: 'SPECIMEN: [What happened, one line]' },
  { date: '[Q2 2025]', entry: 'SPECIMEN: [What happened, one line]' },
]

export const annotations = {
  focusAreas: {
    label: 'GUIDANCE: FOCUS AREAS',
    lines: [
      'Three areas is enough to show range without reading as scattered.',
      'Each needs one sentence stating what Dumas Group actually does here, not an aspiration.',
    ],
  },
  initiatives: {
    label: 'GUIDANCE: INITIATIVE CARDS',
    lines: [
      'Every entry needs all six fields. An initiative without a date and a number reads as intention, not activity.',
      'Aim for three to four initiatives. Fewer looks token. More cannot be maintained.',
      'To supply: name, location, start year, beneficiary group, one measurable figure, current status.',
    ],
  },
  activityFeed: {
    label: 'GUIDANCE: ACTIVITY FEED',
    lines: [
      'This is what separates a page that claims commitment from one that shows it.',
      'Recommend a quarterly cadence, not monthly. Monthly is the cadence that fails once operations get busy.',
      'To supply: one line per quarter, dated, describing something that actually happened.',
    ],
  },
}

export const summaryPanel = {
  title: 'What we need from you to make this real',
  items: [
    'Confirm whether Social and Labour Plan (SLP) activity already exists under Nyezi Mining Holdings’ mining rights. If so, this page is about publishing, not inventing.',
    'Three to four real initiatives: name, location, start year, beneficiary group, one measurable figure, current status.',
    'Four to six dated activity entries, one line each, at a quarterly cadence.',
    'A named owner for this page. Without one, recommend a short static statement of intent instead of dated content.',
  ],
}
