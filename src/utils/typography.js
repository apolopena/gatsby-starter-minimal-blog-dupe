import Typography from 'typography';

const typography = new Typography({
  title: 'Minimal',
  baseFontSize: '16px',
  baseLineHeight: 1.66,
  scaleRatio: 3.66,
  headerFontFamily: ['Bitter', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerWeight: 700,
  googleFonts: [
    {
      name: 'Bitter',
      styles: ['700'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;
