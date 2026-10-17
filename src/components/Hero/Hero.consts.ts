import { FORGESTACK_COMPONENT_COUNT, PACKAGES } from '../../constants';

export const HERO_STATS = [
  { id: 'components', value: FORGESTACK_COMPONENT_COUNT, label: 'React components & dev tools' },
  { id: 'packages', value: String(PACKAGES.length), label: 'ForgeStack packages on npm' },
] as const;
