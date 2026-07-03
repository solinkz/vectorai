import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        surface: {
          950: "#050506",
          900: "#090A0C",
          850: "#0D0F12",
          800: "#111318",
          700: "#1A1D23"
        },
        brand: {
          blue: "#1F7AFF",
          green: "#52D273",
          red: "#FF4545",
          amber: "#F2B84B"
        }
      },
      boxShadow: {
        glow:
          "0 0 0 1px rgba(31,122,255,0.45), 0 18px 60px rgba(31,122,255,0.08)",
        panel: "0 24px 80px rgba(0,0,0,0.45)",
        row: "0 0 0 1px rgba(255,255,255,0.08)"
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    }
  },
  plugins: []
} satisfies Config;
