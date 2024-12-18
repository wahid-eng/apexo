import { DM_Sans, Roboto_Serif } from 'next/font/google';

export const dmSans = DM_Sans({
	weight: ['100', '300'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-dm-sans',
});

export const robotoSerif = Roboto_Serif({
	weight: ['100', '300'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-roboto-serif',
});
