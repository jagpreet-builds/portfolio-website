export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        backgroundImage: {
          'hero-radial': 'radial-gradient(ellipse at 70% 20%, #4a4df0 10%, #2c318d 40%, #000000 100%)',
        },
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  