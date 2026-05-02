export const siteMeta = {
  name: 'Kyle Orman',
  siteName: 'kyleorman.com',
  title: 'Computer engineering professional with a design verification focus',
  description:
    'A public-facing professional website for Kyle Orman, highlighting experience, projects, academic progress, and selected achievements.',
  location: 'Update with your preferred public location',
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
  'Professional-first presentation suitable for employers and collaborators',
  'Clear space for technical projects, design verification work, and academic progress',
  'Public-safe structure that keeps claims measured and easy to review quickly',
];

export const focusAreas = [
  {
    title: 'Professional profile',
    description:
      'Present practical experience, responsibilities, and strengths in a format that reads well on a fast employer scan.',
  },
  {
    title: 'Academic trajectory',
    description:
      'Document PhD progress and research direction with appropriate academic nuance and without overstating authorship or impact.',
  },
  {
    title: 'Technical work',
    description:
      'Show selected projects and engineering interests in employer-readable language while preserving technical credibility.',
  },
];

export const aboutPoints = [
  'Professional website centered on credibility, clarity, and public-safe presentation.',
  'Current direction in computer engineering with an emphasis on design verification.',
  'Background that includes broadcasting, bringing an appreciation for communication, presentation, and thoughtful visual design.',
];

export const experiencePrompts = [
  'Add current and prior roles with clear titles, organizations, dates, and scope.',
  'Lead each entry with outcomes, areas of responsibility, and the value demonstrated.',
  'Keep confidential employer details out of public-facing summaries.',
];

export const educationPrompts = [
  'List degrees, institutions, dates, and ongoing PhD status accurately.',
  'Keep publications and research outputs nested under Education & Research.',
  'Use plain language to explain research direction before deeper technical detail.',
];

export const contactPrompts = [
  {
    label: 'Email',
    value: 'Add a dedicated public professional address before publishing.',
  },
  {
    label: 'LinkedIn',
    value: 'Add your public profile URL when ready.',
  },
  {
    label: 'GitHub',
    value: 'Add your profile or selected repository links when ready.',
  },
];
