import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FCFBF6",
        ink: "#1E2420",
        forest: {
          DEFAULT: "#12342B",
          light: "#1B4A3C",
          dark: "#0B211B",
        },
        ochre: {
          DEFAULT: "#E2A63D",
          light: "#F0C878",
          dark: "#C4872A",
        },
        clay: {
          DEFAULT: "#B44A2E",
          light: "#CB6B4E",
        },
        mist: "#E8E4D9",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
