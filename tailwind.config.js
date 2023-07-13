/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: {
          day: "#D8EAF5",
          night: "#283149",
        },
        clearSky: {
          day: "#FBD638",
          night: "#DBA901",
        },
        fewClouds: {
          day: "#F5F3B9",
          night: "#CFC958",
        },
        scatteredClouds: {
          day: "#E5E9ED",
          night: "#8B9095",
        },
        brokenClouds: {
          day: "#D1D9E6",
          night: "#657182",
        },
        showerRain: {
          day: "#91A8BA",
          night: "#4E6A81",
        },
        rain: {
          day: "#A3B8CC",
          night: "#5B7489",
        },
        thunderstorm: {
          day: "#727C8E",
          night: "#3B4451",
        },
        snow: {
          day: "#E8F0F8",
          night: "#93A1B1",
        },
        mist: {
          day: "#ECEFF4",
          night: "#8D98A4",
        },
      },
    },
  },
  plugins: [],
};
