const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    groups: ['computers', 'mobiles', 'wish'],
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem ',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serf",
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        primary: '#fed700',
        primaryLight: '#ffdb19',
        secondary: '#333e48',
      },
    },
  },
  variants: {
    extends: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    },
  },
  plugins: [
    plugin(({ addVariant, theme }) => {
      const groups = theme('groups') || [];

      groups.forEach((group) => {
        addVariant(`group-${group}-hover`, () => {
          return `:merge(.group-${group}):hover &`;
        });
      });
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
