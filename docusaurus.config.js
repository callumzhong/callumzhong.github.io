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
          editUrl:
            "https://github.com/callumzhong/callumzhong.github.io/edit/main/",
        },
        theme: {
          customCss: require.resolve(
            "./src/css/custom.css",
          ),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "component",
        path: "component",
        routeBasePath: "component",
        breadcrumbs: false,
        showLastUpdateTime: true,
        sidebarCollapsed: false,
        sidebarPath: require.resolve(
          "./sidebarsComponent.js",
        ),
        editUrl:
          "https://github.com/callumzhong/callumzhong.github.io/edit/main/",
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/github-social-card.jpg",
      colorMode: {
        defaultMode: "dark",
      },
      navbar: {
        title: "Callum Docs",
        hideOnScroll: true,
        items: [
          {
            type: "doc",
            docId: "overview/intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "/component/gsap/scroll-component",
            label: "Component",
            position: "left",
            activeBaseRegex: `/component/`,
          },
          {
            className: "header-github-link",
            href: "https://github.com/callumzhong",
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
