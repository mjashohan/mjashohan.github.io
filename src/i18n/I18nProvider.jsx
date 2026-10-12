import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { ui } from './ui.js';
import { content } from './content.js';

export const LANGUAGES = [
  { code: 'en', short: 'EN', label: 'English' },
  { code: 'de', short: 'DE', label: 'Deutsch' },
];

// English lives at `/`, German at `/de`. The URL is the single source of truth,
// so deep-linking to /de and the browser back/forward buttons just work.
const PATHS = { en: '/', de: '/de' };
const langFromPath = (pathname) => (/^\/de(\/|$)/.test(pathname) ? 'de' : 'en');

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLangState] = useState(() => langFromPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setLangState(langFromPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const setLang = useCallback(
    (next) => {
      if (next === lang || !PATHS[next]) return;
      window.history.pushState({}, '', PATHS[next]);
      setLangState(next);
    },
    [lang],
  );

  // Keep the document metadata in sync with the active language.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui[lang].meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', ui[lang].meta.description);
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: ui[lang], content: content[lang] }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
