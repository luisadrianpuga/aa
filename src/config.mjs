import defaultImage from './assets/images/default.png';

const CONFIG = {
  name: 'Asesoria Americana',

  origin: 'https://taxlineandservices.com',
  basePathname: '/',
  trailingSlash: false,

  title: 'Asesoria Americana Taxline Services – Simplemente tu Asesoria',
  description:
    'Asesoria Americana Taxline Services – Simplemente tu Asesoria',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }),

  googleAnalyticsId: "G-3Y3XP2BEKH", // or "G-XXXXXXXXXX",
  googleSiteVerificationId: 'xdbZxWMmf61_eehNVwwAHQAG_nikcoknMKguF-5PkQc',

  blog: {
    disabled: false,
    postsPerPage: 4,

    post: {
      permalink: '/%slug%', // Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      noindex: false,
      disabled: false,
    },

    list: {
      pathname: 'blog', // Blog main path, you can change this to "articles" (/articles)
      noindex: false,
      disabled: false,
    },

    category: {
      pathname: 'category', // Category main path /category/some-category
      noindex: true,
      disabled: false,
    },

    tag: {
      pathname: 'tag', // Tag main path /tag/some-tag
      noindex: true,
      disabled: false,
    },
  },
};

export const SITE = { ...CONFIG, blog: undefined };
export const BLOG = CONFIG.blog;
export const DATE_FORMATTER = CONFIG.dateFormatter;
