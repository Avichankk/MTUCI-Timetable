const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
			fontFamily: {
				montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
				rothek: ["rothek", ...defaultTheme.fontFamily.sans],
			},
			colors: {
				borderColor: "#191919",
			}
		},
  },
  plugins: [require("@tailwindcss/forms")],
}

