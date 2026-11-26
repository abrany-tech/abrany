export const SITE = {
  name: 'Abrany',
  title: 'Abrany - Driving Success for Financial Services',
  description:
    'Discover how Abrany empowers your financial services company with tailored marketing strategies and seamless implementation. Achieve sustainable growth and long-term success with expert guidance.',
  lang: 'en',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://www.abrany.com',
  twitterHandle: '',
  socials: {},
} as const;

export type SiteConfig = typeof SITE;
