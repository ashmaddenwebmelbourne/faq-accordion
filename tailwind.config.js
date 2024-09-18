/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'background-pattern-desktop': "url('/src/assets/images/background-pattern-desktop.svg')",
				'background-pattern-mobile': "url('/src/assets/images/background-pattern-mobile.svg')",
			},
			fontFamily: {
				'work-sans': ['Work Sans', 'sans-serif'],
			},
			boxShadow: {
				purple: '0 32px 56px 0 rgba(80, 0, 118, 0.1)',
			},
			screens: {
				tablet: '768px',
			},
		},
		colors: {
			'dark-purple': '#301534',
			pink: '#ad28eb',
			'light-pink': '#f8eeff',
			'pale-purple': '#8b6990',
			white: '#ffffff',
		},
	},
	plugins: [],
};
