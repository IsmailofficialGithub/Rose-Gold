/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'rose-black': '#0B0B0B',
                'rose-dark': '#1C1C1C',
                'rose-gold': '#FFB300',
                'rose-orange': '#FF5722',
                'rose-gray': '#9A9A9A',
                'rose-light-gray': '#F2F2F2',
                'rose-bronze': '#CD7F32'
            },
            fontFamily: {
                'heading': ['"Bebas Neue"', 'sans-serif'],
                'body': ['"Outfit"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
