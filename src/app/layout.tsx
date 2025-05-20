import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import InteractiveBackground from '@/components/interactive-background';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Luminous Persona',
  description: 'Craft your compelling personal story with Luminous Persona.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <InteractiveBackground />
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 relative z-10">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
