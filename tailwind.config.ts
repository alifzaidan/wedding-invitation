import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: '#63343E',
                secondary: '#E9D8BC',
                tertiary: '#977B48',
            },
            backgroundImage: {
                pattern: "url('/assets/img/bg-pattern.png')",
            },
            animation: {
                'spin-slow': 'spin 2.5s linear infinite',
            },
        },
    },
    plugins: [],
};
export default config;
