import { createTheme } from '@mui/material/styles';

// Dark: deep navy base, mint-cyan primary accent, warm coral secondary.
// Light: cool off-white base with a deeper teal accent (mint has too little
// contrast on white). Avoids the overused purple-gradient cliché.
//
// These values must match the CSS variables in src/styles/global.css, which
// drive the many ad-hoc rgba(var(--accent-rgb), …) tints in the components.
const palettes = {
  dark: {
    mode: 'dark',
    primary: { main: '#64ffda', light: '#8effe7', dark: '#0bb392', contrastText: '#0a0e17' },
    secondary: { main: '#ff7e5f', light: '#ffa185', dark: '#c95637', contrastText: '#0a0e17' },
    background: { default: '#0a0e17', paper: '#131826' },
    text: { primary: '#e6f1ff', secondary: '#8892b0' },
    divider: 'rgba(100, 255, 218, 0.12)',
  },
  light: {
    mode: 'light',
    primary: { main: '#0f766e', light: '#14b8a6', dark: '#115e59', contrastText: '#ffffff' },
    secondary: { main: '#d9482b', light: '#ef7a5f', dark: '#a8321a', contrastText: '#ffffff' },
    background: { default: '#f4f7fb', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#475569' },
    divider: 'rgba(15, 118, 110, 0.18)',
  },
};

export const createAppTheme = (mode) =>
  createTheme({
    palette: palettes[mode] ?? palettes.dark,
    typography: {
      fontFamily: '"Manrope", "Helvetica Neue", Arial, sans-serif',
      h1: { fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif', fontWeight: 800, letterSpacing: '-0.04em' },
      h2: { fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif', fontWeight: 700, letterSpacing: '-0.03em' },
      h3: { fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif', fontWeight: 700, letterSpacing: '-0.02em' },
      h4: { fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif', fontWeight: 600, letterSpacing: '-0.02em' },
      h5: { fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif', fontWeight: 600 },
      h6: { fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif', fontWeight: 600 },
      body1: { fontWeight: 400, lineHeight: 1.7 },
      body2: { fontWeight: 400, lineHeight: 1.6 },
      button: { fontWeight: 600, letterSpacing: '0.02em', textTransform: 'none' },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            // Slightly tighter on phones for comfortable thumb-feel
            padding: '8px 18px',
            minHeight: 40,
            [theme.breakpoints.up('sm')]: {
              padding: '10px 22px',
              minHeight: 44,
            },
          }),
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            // Ensure adequate touch target on mobile
            minWidth: 40,
            minHeight: 40,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: 'rgba(var(--surface-rgb), 0.6)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(var(--accent-rgb), 0.08)',
          },
        },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiChip: { styleOverrides: { root: { fontWeight: 500, letterSpacing: '0.01em' } } },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: 'var(--surface)',
            color: 'var(--text)',
            border: '1px solid rgba(var(--accent-rgb), 0.2)',
            fontSize: '0.78rem',
            fontFamily: '"JetBrains Mono", monospace',
          },
        },
      },
    },
  });
