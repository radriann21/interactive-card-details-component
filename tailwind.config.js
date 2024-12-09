/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				primary: {
					'custom-red': 'hsl(0, 100%, 66%)'
				},
				neutral: {
					'light-grayish-violet': 'hsl(270, 3%, 87%)',
					'dark-grayish-violet': 'hsl(279, 6%, 55%)',
					'very-dark-violet': 'hsl(278, 68%, 11%)'
				},
			},
			fontFamily: {
				'global': 'Space Grotesk'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}

