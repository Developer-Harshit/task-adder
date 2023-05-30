/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				mobile: { max: "640px" },
			},
		},
	},
	plugins: [],
};
