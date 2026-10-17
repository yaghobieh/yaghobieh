import { BRAND_PATHS, ICON_PATHS } from './Icon.consts';

export type IconName = keyof typeof ICON_PATHS | keyof typeof BRAND_PATHS;

type IconProps = {
  name: IconName;
  className?: string;
};

const isBrand = (name: IconName): name is keyof typeof BRAND_PATHS => name in BRAND_PATHS;

export function Icon({ name, className = 'h-4 w-4' }: IconProps) {
  if (isBrand(name)) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={BRAND_PATHS[name]} />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICON_PATHS[name]} />
    </svg>
  );
}
