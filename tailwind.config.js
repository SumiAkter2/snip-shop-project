/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000002",

          secondary: "#fbbf24",

          accent: "#9ca3af",

          neutral: "#06b6d4",

          "base-100": "#FFFFFF",

          info: "#6b7280",

          success: "#facc15",

          warning: "#eab308",

          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

