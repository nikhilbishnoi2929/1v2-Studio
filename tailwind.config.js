/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black_Section": "#141414",
        "bg_Red": "#FF1E2F",
        "text-blue": '#3EBFFF',
        "sky_border": '#3EBFFF',
        "blur_black": '#FFFFFF08',
      },
      container: {
        padding: {
          DEFAULT: "22px",
          xl: "12px",
          lg: "16px",
          md: "22px",
          sm: "22px",
        },
        center: true,
        screens: {
          lg: "1016px",
          xl: "1164px",
        },
      },
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"]
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
      backgroundImage: {
        headerBg: `url("./assets/image/webp/heroBg.webp")`,
        footerBg: `url("./assets/image/webp/footerBg.webp")`,
        cardFooter: `url("./assets/image/webp/footerCard.webp")`,
        featureProject: `url("./assets/image/webp/featureBg.webp")`,
        cardSlider: `url("./assets/image/webp/projectsSlider.webp")`,
        impactBg: `url("./assets/image/webp/impactBg.webp")`,
        clientsBg: `url("./assets/image/webp/clientsBg.webp")`,
        debbieBg: `url("./assets/image/webp/debbieBg.webp")`,
        accordionBg: `url("./assets/image/webp/accordionBg.webp")`,
        accordion_Color: `linear-gradient(0deg, #9E0000 -14.1%, #FF1212 123.08%)`,
        linear_Gradient: `linear-gradient(108.48deg, #FF1E2F 8.2%, #3EBFFF 31.38%)`,
      },
      boxShadow: {
        "3xl": "0px 2.29px 23.91px 0px #FF55A5"
      },
      fontSize: {
        40: "40px",
        42: "42px",
        38: "38px",
        64: "64px"
      },
      backgroundSize: {
        "100%": "100% 100%",
      },
    },
  },
  plugins: [],
}

