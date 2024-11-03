/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Body: "#1ca39c",
        SideNav: "#17252A",
        Card: "#fdfdfd",
        Nav: "#FEFFFF",
      },
      fontFamily: {
        logo: ["Shadows Into Light", "cursive", "sans-sarif"],
      },
    },
  },
  plugins: [],
};
