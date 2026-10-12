import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createAppTheme } from './theme.js';

const STORAGE_KEY = 'theme-mode';
const THEME_COLORS = { dark: '#0a0e17', light: '#f4f7fb' };
const LIGHT_QUERY = '(prefers-color-scheme: light)';

const ThemeModeContext = createContext(null);

// Only an explicit toggle is stored. Until then the OS setting decides, and
// keeps deciding live (e.g. when the OS flips to dark at sunset).
const readSavedMode = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch {
    return null;
  }
};

const systemMode = () =>
  window.matchMedia?.(LIGHT_QUERY).matches ? 'light' : 'dark';

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(() => readSavedMode() ?? systemMode());

  // Follow OS changes unless the visitor has made an explicit choice.
  useEffect(() => {
    const mql = window.matchMedia?.(LIGHT_QUERY);
    if (!mql) return undefined;
    const onChange = () => {
      if (!readSavedMode()) setMode(mql.matches ? 'light' : 'dark');
    };
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLORS[mode]);
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage may be disabled — the choice just won't persist */
      }
      return next;
    });
  }, []);

  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const value = useMemo(() => ({ mode, toggle }), [mode, toggle]);

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export function useThemeMode() {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) throw new Error('useThemeMode must be used inside <ThemeModeProvider>');
  return ctx;
}
