import { useWindowDimensions } from './hooks';

export const isBrowser = typeof window !== 'undefined';

export const isDesktop = (): boolean => (isBrowser ? useWindowDimensions()?.width > 678 : false);
