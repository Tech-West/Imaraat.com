module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login-bg": "url('./images/login-bg.jpg')",
        "register-bg": "url('./images/register-bg.jpg')",
        "primary-gradient": "linear-gradient(45deg, #FF5F1F, #FF4433)",
      }),

      backgroundColor: (theme) => ({
        ...theme("colors"),
        "light-op-09": "rgba(255,255,255,0.8)",
      }),
      colors: {
        orange: {
          primary: "#FF5F1F",
        },
        danger: {
          primary: "#CA0B00",
          secondary: "#f5beba",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
