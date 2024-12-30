import { Orbitron } from 'next/font/google';
import { Lusitana } from "next/font/google";
import { Ubuntu } from "next/font/google";

export const orbitron = Orbitron({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-orbitron',
});

export const lusitana = Lusitana({
    subsets: ['latin'],
    weight: ['400', '700']
})

export const ubuntu = Ubuntu({
    subsets: ['latin'],
    weight: ['400', '700']
})