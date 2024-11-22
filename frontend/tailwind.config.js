/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        button: {
          DEFAULT: "#E4EDFF",
          hover: "#D2E0FF",
          active: "#BCCAFF", 
        },
        text: {
          DEFAULT: "#000000",
        },
        border: {
          DEFAULT: "#E4EDFF",
        }
      },
    },
  },
  plugins: [],
};
