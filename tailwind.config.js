/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBg: '#0B0B0B',
        primaryTxt: '#EBEBEB',
        secondaryTxt: '#B8B8B8',
        activeState: '#FC4248',
        hyperlinkTxt: '#FC4248',
        primaryCardBg: '#292727',
        secondaryCardBg: '#211E1F',
        primaryBtn: '#292727',
        secondaryBtn: '#EEEEEE',
        primaryIcon: '#7A7A7A',
        secondaryNotif: '#FABB27',
      },
    },
  },
  plugins: [],
};
