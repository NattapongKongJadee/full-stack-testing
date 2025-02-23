/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // ✅ Correct paths
  theme: {
    extend: {
      screens: {
        sm: "640px", // Small devices (e.g., phones)
        md: "768px", // Medium devices (e.g., tablets)
        lg: "1024px", // Large devices (e.g., desktops)
        xl: "1280px", // Extra large devices (e.g., large desktops)
        "2xl": "1536px", // 2x Extra large devices (e.g., very large desktops)
      },
      colors: {
        primary: "#6C72FF",
        secondary: "#FF66FF",
        navyCustom: "#101935",
        purpleCustom: "#343B4F",
        lightBlueCustom: "#57C3FF",
        blueCustom: "#9A91FB",
        yellowCustom: "#FDB52A",
      },
      fontFamily: {
        mona: ["Mona Sans", "sans-serif"],
        sarabun: ["Sarabun", "sans-serif"],
      },
    },
  },
  plugins: [],
};
