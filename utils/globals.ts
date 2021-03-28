import { useWindowDimensons } from './hooks';

export const isBrowser =  typeof window !== "undefined"

export const isDesktop = (): boolean => isBrowser ? useWindowDimensons()?.width > 678 : false