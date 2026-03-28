import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070F",
        surface: "#0A1020",
        card: "rgba(255,255,255,0.06)",
        accent: "#5A8CFF"
      },
      boxShadow: {
        glow: "0 0 120px rgba(90,140,255,0.35)"
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 10% 20%, rgba(90,140,255,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(33, 212, 253, 0.22), transparent 40%), radial-gradient(circle at 50% 80%, rgba(139,92,246,0.25), transparent 40%)"
      }
    }
  },
  plugins: []
};

export default config;
