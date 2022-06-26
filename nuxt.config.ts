import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/color-mode',
	],
	colorMode: {
		preference: 'dark',
		dataValue: 'theme',
	},
	tailwindcss: {
		exposeConfig: true,
	},
	typescript: {
		shim: false,
	},
	build: {
		transpile: [
			'gasp',
		],
	},
});
