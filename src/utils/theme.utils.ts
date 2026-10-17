import { DARK_CLASS, DARK_MEDIA_QUERY, DEFAULT_THEME, THEME_STORAGE_KEY } from '../constants';
import type { Theme } from '../types';

const isTheme = (value: string | null): value is Theme => value === 'light' || value === 'dark';

export const getInitialTheme = (): Theme => {
  if (typeof window === 'undefined') return DEFAULT_THEME;
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (isTheme(stored)) return stored;
  } catch {
    // storage unavailable; fall through to the system preference
  }
  return window.matchMedia(DARK_MEDIA_QUERY).matches ? 'dark' : 'light';
};

export const applyTheme = (theme: Theme): void => {
  document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark');
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // storage unavailable; the class change still applies for this visit
  }
};
