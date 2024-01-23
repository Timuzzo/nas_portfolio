/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'medellin': "url('src/assets/images/Medellin.png')",
        'feria-de-las-flores': "url('src/assets/images/Feria de las flores.jpg')",
        'modular-b': "url('src/assets/images/Modular_b.gif')",
        'sepiensa': "url('src/assets/images/Sepiensa.png')",
        'abholzung': "url('src/assets/images/Abholzung.png')",
        'non-nocere': "url('src/assets/images/Nonnocere.png')",
        'my-bowl': "url('src/assets/images/Mybowl.png')",
        'nebenan': "url('')",
    },
  },
  plugins: [],
}
}
