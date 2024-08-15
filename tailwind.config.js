/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            "color-abyss": "#031602",
            "color-shadow": "#1D2A25",
            "color-jungle": "#3B5249",
            "color-neutral": "#899692",
            "color-cream": "#F6EFE6",
            "color-lemon": "#F9E559",
            "color-rust": "#C14A09",
        },
        extend: {},
    },
    plugins: [],
});
