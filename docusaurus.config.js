// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Better than yesterday',
	tagline: 'Dinosaurs are cool',
	url: 'https://callumzhong.github.io',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'callumzhong', // Usually your GitHub org/user name.
	projectName: 'callumzhong.github.io', // Usually your repo name.
	deploymentBranch: 'gh-pages',
	trailingSlash: false,
	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'zh-Hant'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: {
					routeBasePath: '/',
					showReadingTime: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Better than yesterday',
				logo: {
					alt: 'Better than yesterday',
					src: 'img/logo.svg',
				},
				items: [
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					// {
					// 	title: 'Docs',
					// 	items: [
					// 		{
					// 			label: 'Tutorial',
					// 			to: '/docs/intro',
					// 		},
					// 	],
					// },
					// {
					// 	title: 'Community',
					// 	items: [
					// 		{
					// 			label: 'Stack Overflow',
					// 			href: 'https://stackoverflow.com/questions/tagged/docusaurus',
					// 		},
					// 		{
					// 			label: 'Discord',
					// 			href: 'https://discordapp.com/invite/docusaurus',
					// 		},
					// 		{
					// 			label: 'Twitter',
					// 			href: 'https://twitter.com/docusaurus',
					// 		},
					// 	],
					// },
					// {
					// 	title: 'More',
					// 	items: [
					// 		{
					// 			label: 'Blog',
					// 			to: '/blog',
					// 		},
					// 		{
					// 			label: 'GitHub',
					// 			href: 'https://github.com/facebook/docusaurus',
					// 		},
					// 	],
					// },
				],
				copyright: `Copyright © ${new Date().getFullYear()} Better than yesterday, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
	themes: [
		[
			'@easyops-cn/docusaurus-search-local',
			{
				hashed: true,
				language: ['en', 'zh'],
				highlightSearchTermsOnTargetPage: true,
				explicitSearchResultPath: true,
			},
		],
	],
};

module.exports = config;
