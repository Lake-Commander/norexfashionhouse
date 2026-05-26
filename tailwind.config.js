module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EE156A",
        secondary: "#F70366",
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "980px",
        xl: "1200px",
        "2xl": "1500px",
      },
    },
  },

  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
