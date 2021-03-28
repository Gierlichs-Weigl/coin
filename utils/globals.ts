import { useWindowDimensons } from './hooks';

export const isMobile = window?.document ? useWindowDimensons().width < 600 : false;
