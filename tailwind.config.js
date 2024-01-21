/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradiant": "linear-gradient(60deg,#65a30d,#422006)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
