/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            screens: {
                sm: "480px",
                md: "768px",
                lg: "1024px",
                xl: "1200px",
                "2xl": "1366px",
            },
            colors:{
                primary: "#f12545",
                textColor: "#515151",
                lightOverlay: "#f9fafd",
            }
        },
    },
    plugins: [],
}