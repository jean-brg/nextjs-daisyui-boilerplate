/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [
        require('daisyui'),
    ],
    daisyui: {
        themes: [
            {
                mainTheme: {
                    primary: "#2541B2",
                    secondary: "#03256C",
                    accent: "#03256C",
                    "base-100": "#DDD"
                }
            },
            "mainTheme",
            "light", 
            "dark",
        ]
    }
};
