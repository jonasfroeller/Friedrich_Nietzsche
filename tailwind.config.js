/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: ({ theme }) => ({
				slide: {
					css: {
					'--tw-prose-body': 'var(--r-background-color)',
					'--tw-prose-links': 'var(--r-link-color)',
					'--tw-prose-invert-body': 'var(--r-main-color)',
					'--tw-prose-invert-links': 'var(--r-link-color)'
					},
				},
			})
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}

export default config
