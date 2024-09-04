import type { Metadata } from 'next';
import { Alike } from 'next/font/google';
import './globals.css';

const alike = Alike({
    subsets: ['latin'],
    weight: '400',
});

export const metadata: Metadata = {
    title: 'IZZA & RIZKY',
    description: 'Wedding Invitation for Iza & Risky',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${alike.className} bg-pattern bg-cover select-none`}>{children}</body>
        </html>
    );
}
