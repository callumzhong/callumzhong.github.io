// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Callum Docs",
  tagline:
    "I'm currently working as a frontend developer, so I've been keeping some personal notes on best practices and helpful resources",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://callumzhong.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "callumzhong", // Usually your GitHub org/user name.
  projectName: "callumzhong.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  staticDirectories: ["public", "static"],

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          showLastUpdateTime: true,
          routeBasePath: "/",
          sidebarCollapsed: false,
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve(
            "./src/css/custom.css",
          ),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      docs: {},
      navbar: {
        title: "Callum Docs",
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "overview/readme",
            position: "left",
            label: "Docs",
          },
          {
            className: "header-github-link",
            href: "https://github.com/facebook/docusaurus",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
