// docusaurus.config.js

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Home',
  tagline: 'Sharing Tech Knowledge',
  favicon: 'img/papers.png',

  // Set the production url of your site here
  url: 'https://tech-docs-cool.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization configuration
  // i18n: {
  //   defaultLocale: 'en', // Default language
  //   locales: ['en', 'ja'], // List of supported locales
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //     },
  //     ja: {
  //       label: '日本語',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark', // Set the default mode to 'dark'
      disableSwitch: false, // Allow users to switch between light and dark mode
      respectPrefersColorScheme: false, // Ignore the user's system preference
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/papers.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://www.linkedin.com/in/karan-s-chandel',
          label: 'Connect',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;


