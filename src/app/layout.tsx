
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Sidebar from '@/components/layout/sidebar'; // New Sidebar
import AppFooter from '@/components/layout/footer'; // Renamed for clarity

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kailas Sachdev - Software Engineer',
  description: 'Kailas Sachdev is a driven and curious individual with a strong passion for technology, innovation, and community impact.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="flex flex-col md:flex-row min-h-screen"> {/* Changed from "flex" to "flex flex-col md:flex-row" */}
          <Sidebar />
          <div className="flex-1 flex flex-col"> {/* This div will now correctly take up space in both flex directions */}
            <main className="flex-grow py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <AppFooter />
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
