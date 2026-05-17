import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111111",
          soft: "#1f1f1f",
        },
        paper: {
          DEFAULT: "#f6f4ef",
          warm: "#ece8df",
        },
        mute: {
          DEFAULT: "#6b6b6b",
          soft: "#8a8a8a",
        },
        bordo: {
          DEFAULT: "#6b1f2a",
          soft: "#8a2a36",
          dark: "#4d161e",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      letterSpacing: {
        wider2: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;
