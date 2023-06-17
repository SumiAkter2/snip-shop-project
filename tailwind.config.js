/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#000002",

          secondary: "#fbbf24",

          accent: "#1E66FF",

          neutral: "#06b6d4",

          "base-100": "#FFFFFF",

          info: "#023F75",

          success: "#232347",

          warning: "#eab308",

          error: "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

