import { join } from 'path';

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [join(__dirname, '../../packages/**/src/**/*.{js,jsx,ts,tsx}')],
	theme: {
		extend: {
			colors: {
				primary: '#FF6363',
			},
		},
	},
	plugins: [],
};
