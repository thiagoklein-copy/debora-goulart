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
        /* #6B4E8E inferido do 💜 da bio — CONFIRMAR com print real da identidade visual */
        forest: {
          DEFAULT: "#6B4E8E",
          light: "#7E63A3",
          dark: "#3D2B55",
        },
        sand: {
          DEFAULT: "#FAF7FB",
          dark: "#F0EAF4",
        },
        accent: {
          DEFAULT: "#B8956C",
          warm: "#C9A67A",
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
        soft: "0 8px 30px rgba(107, 78, 142, 0.08)",
        card: "0 12px 40px rgba(107, 78, 142, 0.1)",
        lift: "0 20px 50px rgba(107, 78, 142, 0.15)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
