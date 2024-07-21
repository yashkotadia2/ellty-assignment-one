/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 8px 15px 0px rgba(20, 20, 20, 0.12)",
      },
      colors: {
        "box-shadow-custom": "#141414",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
