/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,
      minimalist_elegance: {
        primary: "#D32F2F", // Rojo intenso (Botones y CTA)
        secondary: "#8BC34A", // Verde oliva (Elementos destacados)
        details: "#E0E0E0", // Gris claro (Bordes y separadores)
        featured: "#D32F2F", // Rojo intenso
        product: "#8BC34A", // Verde oliva
      },
      natural_fresh: {
        primary: "#FF9800", // Naranja brillante (Botones)
        secondary: "#FFEB3B", // Amarillo (Elementos destacados)
        details: "#4CAF50", // Verde menta (Detalles)
        featured: "#FF9800", // Naranja brillante
        product: "#FFEB3B", // Amarillo
      },
      urban_delight: {
        primary: "#795548", // Marrón chocolate (Fondos secundarios)
        secondary: "#FFC107", // Dorado (Elementos de lujo)
        details: "#FF5722", // Rojo anaranjado (Botones)
        featured: "#FFC107", // Dorado
        product: "#795548", // Marrón chocolate
      },
    },
    extend: {},
  },
  plugins: [],
};
