/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sankofa: ['Jersey 15 Charted', 'Sankofa', 'sans-serif'],
      },
      backgroundImage: {
        'about_wallpaper': "url('/src/images/about_wallpaper.png')",
        'project1': "url('/src/images/project1.png')",
        'project2': "url('/src/images/project2.png')",
        'evolution_gif': "url('/src/images/Evolution.gif')",
        'technology_gif': "url('/src/images/Technology.gif')",
        'profilepicture': "url('/src/images/MeLinkedin.png')",
      },
    },
  },
  plugins: [],
}

