/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        // gelap: "#7e170b",
        "terang-2": "#de9da0",
        terang: "#ffaaca",
        gelap: "#140114",
        "aksen-hijau": "#014e17",
        "putih-tulang": "#f1eadd",
        oren: "#da5901",
        ijo: "#026841",
        biru: "#1b78fa",
        kuning: "#fbb500",
      },
    },
  },
  plugins: [],
};
