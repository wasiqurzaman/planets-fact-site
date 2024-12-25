import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        "black-100": "var(--color-black)",
        "light-gray": "var(--color-light-gray)",
        "dark-gray": "var(--color-dark-gray)",
        mercury: "var(--color-mercury)",
        venus: "var(--color-venus)",
        earth: "var(--color-earth)",
        mars: "var(--color-mars)",
        jupiter: "var(--color-jupiter)",
        saturn: "var(--color-saturn)",
        uranus: "var(--color-uranus)",
        neptune: "var(--color-neptune)",
      },
      fontFamily: {
        antonio: ["var(--font-antonio)"],
        spartan: ["var(--font-spartan)"],
      },
      backgroundImage: {
        stars: "url('/images/background-stars.svg')",
      },
      screens: {
        mobile: "480px",
        tablet: "600px",
        "laptop-sm": "940px",
        "large-desktop": "1600px",
      },
    },
  },
  plugins: [],
} satisfies Config;
