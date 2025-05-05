/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Incluye el archivo HTML principal
    "./src/**/*.{js,jsx,ts,tsx}", // Escanea todos los archivos dentro de src
  ],
  theme: {
    extend: {
      // Aquí puedes extender el tema con colores, fuentes, etc.
      colors: {
        primary: "#1D4ED8", // Ejemplo de color personalizado
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
