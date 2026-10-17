import { useTheme } from '../../hooks';
import { Icon } from '../Icon';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="grid h-10 w-10 place-items-center rounded-full border border-ink-200 text-ink-700 transition-colors hover:border-ink-900 hover:text-ink-950 dark:border-ink-700 dark:text-ink-200 dark:hover:border-ink-100 dark:hover:text-white"
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="h-[18px] w-[18px]" />
    </button>
  );
}
