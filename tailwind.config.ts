import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Manually control dark mode (effectively disabled if class not added)
  theme: {
    extend: {
      colors: {
        primary: '#4ADE80', // Vibrant Green matching the reference
        'background-light': '#FFFFFF',
        'background-dark': '#111827',
        'text-light': '#111b0d',
        'text-dark': '#F3F4F6',
        'border-light': '#E5E7EB',
        'border-dark': '#374151',
        accent: '#F59E0B', // Gold/Amber for feature icons
      },
    },
  },
  plugins: [],
};
export default config;