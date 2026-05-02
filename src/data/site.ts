export const siteMeta = {
  name: 'Kyle Orman',
  siteName: 'kyleorman.com',
  title: 'Computer engineering PhD student focused on design verification, systems, and developer tooling',
  description:
    'A public-facing professional website for Kyle Orman, highlighting engineering work, academic progress, selected projects, and public professional links.',
  location: 'University of Arkansas',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/education-research', label: 'Education & Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/contact', label: 'Contact' },
] as const;

export const homeHighlights = [
  'Current PhD student in Jia Di’s lab at the University of Arkansas',
  'Background includes broadcast engineering alongside a transition into computer engineering',
  'Public work spans HDL tooling, workflow automation, machine learning implementation, and Nix-based systems work',
];

export const focusAreas = [
  {
    title: 'Design verification and HDL tooling',
    description:
      'Interests and public projects point toward verification-oriented workflows, developer tooling, and practical engineering support for hardware work.',
  },
  {
    title: 'Graduate research trajectory',
    description:
      'Academic work is presented with appropriate restraint, keeping PhD progress, lab affiliation, and research direction visible without overstating authorship or impact.',
  },
  {
    title: 'Open-source systems work',
    description:
      'Public repositories show a consistent interest in shell tooling, Nix environments, terminal workflows, and practical automation.',
  },
];

export const aboutPoints = [
  'Current PhD student in computer engineering at the University of Arkansas and listed as a current member of Jia Di’s lab.',
  'Current direction emphasizes design verification, systems thinking, and technically grounded tooling.',
  'Earlier broadcast engineering experience informs communication, logistics, troubleshooting, and presentation quality.',
];

export const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/kyleorman',
    summary: 'Public repositories and current technical work.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kyle-orman-06578357/?skipRedirect=true',
    summary: 'Professional profile and public-facing network presence.',
  },
  {
    label: 'Jia Di Lab',
    href: 'https://wordpressua.uark.edu/jdi/lab-members/',
    summary: 'Current University of Arkansas lab membership listing.',
  },
  {
    label: 'Capstone project',
    href: 'https://capstone-csce.uark.edu/fall-spring-21-22/teams-9-15/team-11-predictive-planning/',
    summary: 'University of Arkansas CSCE capstone team page and deliverables.',
  },
] as const;

export const experienceSignals = [
  {
    title: 'Broadcast engineering background',
    meta: 'Prior professional experience',
    description:
      'Earlier work in broadcast engineering contributes an operational mindset shaped by troubleshooting, reliability, logistics, and communication under practical constraints.',
  },
  {
    title: 'Computer engineering training',
    meta: 'University of Arkansas',
    description:
      'Public academic project material identifies coursework in programming foundations, programming paradigms, and software engineering, along with later work in machine learning implementation.',
  },
  {
    title: 'Research and lab involvement',
    meta: 'Current PhD trajectory',
    description:
      'Current public academic presence includes PhD student status in Jia Di’s lab, with site content oriented toward design verification and engineering research that can be shared responsibly.',
  },
  {
    title: 'Open-source workflow tooling',
    meta: 'GitHub portfolio',
    description:
      'Public repositories show recurring work in HDL development environments, voltage-sweep utilities, Nix configuration, and terminal workflow automation.',
  },
] as const;

export const educationCards = [
  {
    title: 'University of Arkansas',
    meta: 'Academic base',
    description:
      'Public sources identify Kyle Orman as a computer engineering student at the University of Arkansas, with current PhD status reflected through lab membership.',
  },
  {
    title: 'Jia Di lab membership',
    meta: 'Current PhD student listing',
    description:
      'The Jia Di lab site lists Kyle Orman among current PhD students, providing a public academic reference point for ongoing graduate work.',
  },
  {
    title: 'Research presentation approach',
    meta: 'Public-facing guidance',
    description:
      'Research and publications should be presented proportionally, with clear authorship context and plain-language framing for mixed professional and academic audiences.',
  },
] as const;

export const contactProfiles = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kyle-orman-06578357/?skipRedirect=true',
    value: 'Professional profile for recruiting, networking, and public career context.',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kyleorman',
    value: 'Public code repositories spanning HDL tooling, Nix, shell workflows, and personal projects.',
  },
  {
    label: 'University lab profile',
    href: 'https://wordpressua.uark.edu/jdi/lab-members/',
    value: 'Current lab-membership listing for graduate research context at the University of Arkansas.',
  },
  {
    label: 'Capstone archive',
    href: 'https://capstone-csce.uark.edu/fall-spring-21-22/teams-9-15/team-11-predictive-planning/',
    value: 'Public capstone record covering team deliverables and Kyle’s machine learning responsibilities.',
  },
] as const;
