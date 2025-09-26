/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        primary: "#2563EB",      // bleu pro
        primaryDark: "#1E40AF",
        ink: "#0B0F19",          // noir titrage
        muted: "#6B7280",        // texte secondaire
        surface: "#F7F9FC"       // fond doux
      },
      fontFamily: {
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      },
      borderRadius: {
        xl2: "1rem", xl3: "1.25rem"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2, 6, 23, 0.06)"
      }
    },
  },
  plugins: [],
}
