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
          DEFAULT: "#0F9C97",
          light: "#12B0AA",
          dark: "#0B3A3A",
        },
        sand: {
          DEFAULT: "#FAF6F0",
          dark: "#F0EBE3",
        },
        accent: {
          DEFAULT: "#C97C4B",
          warm: "#D4895A",
        },
        text: {
          dark: "#1A1A1A",
          muted: "#6B6B63",
        },
        whatsapp: "#25D366",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(15, 156, 151, 0.08)",
        card: "0 12px 40px rgba(15, 156, 151, 0.1)",
        lift: "0 20px 50px rgba(15, 156, 151, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
