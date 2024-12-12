/** @type {import('tailwindcss').Config} */
export default {
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
			},
			backgroundImage: {
				'gradient-main': 'linear-gradient(90deg, rgba(100,72,254,1) 0%, rgba(96,5,148,1) 35%);',
				'card-front': 'url("./assets/bg-card-front.png")',
				'card-back': 'url("./assets/bg-card-back.png")',
				'bg-desktop': 'url("./assets/bg-main-desktop.png")',
				'bg-mobile': 'url("./assets/bg-main-mobile.png")'
			},
		}
	},
	plugins: [],
}

