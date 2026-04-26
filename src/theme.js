import { createTheme } from '@mui/material/styles';

// Refined dark theme — deep navy base, mint-cyan primary accent,
// warm coral secondary. Avoids the overused purple-gradient cliche.
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#64ffda',
      light: '#8effe7',
      dark: '#0bb392',
      contrastText: '#0a0e17',
    },
    secondary: {
      main: '#ff7e5f',
      light: '#ffa185',
      dark: '#c95637',
      contrastText: '#0a0e17',
    },
    background: {
      default: '#0a0e17',
      paper: '#131826',
    },
    text: {
      primary: '#e6f1ff',
      secondary: '#8892b0',
    },
    divider: 'rgba(100, 255, 218, 0.12)',
  },
  typography: {
    fontFamily: '"Manrope", "Helvetica Neue", Arial, sans-serif',
    h1: {
      fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h3: {
      fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h5: {
      fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.7,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      letterSpacing: '0.02em',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 22px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(19, 24, 38, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(100, 255, 218, 0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          letterSpacing: '0.01em',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#131826',
          border: '1px solid rgba(100, 255, 218, 0.2)',
          fontSize: '0.78rem',
          fontFamily: '"JetBrains Mono", monospace',
        },
      },
    },
  },
});
