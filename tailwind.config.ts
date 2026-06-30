import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#3F4F3D",
          light: "#445843",
        },
        sand: {
          DEFAULT: "#F6F2EA",
          dark: "#EDE6DA",
        },
        accent: {
          DEFAULT: "#B08D57",
          warm: "#C98A5E",
        },
        text: {
          dark: "#262626",
          muted: "#6B6B63",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(63, 79, 61, 0.08)",
        card: "0 12px 40px rgba(63, 79, 61, 0.1)",
        lift: "0 20px 50px rgba(63, 79, 61, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
