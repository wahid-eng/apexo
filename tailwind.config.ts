import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'light-green': '#64CCC5',
				'light-black': '#121212',
				'light-gray': '#F4F4F4',
				'dark-gray': '#DFDFDF',
			},
			fontFamily: {
				sans: ['DM Sans', ...defaultTheme.fontFamily.serif],
				serif: ['Roboto Serif', ...defaultTheme.fontFamily.serif],
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
				},
				screens: {
					...defaultTheme.screens,
					'2xl': '1400px',
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
