import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jin-shun-zhu.kingsoonchu.chatgpt.site'),
  title: 'Jin Shun Zhu | AI Engineer & Software Developer',
  description: 'Portfolio of Jin Shun Zhu, an AI engineer and software developer pursuing an MSc in Artificial Intelligence at NTU Singapore.',
  openGraph: {
    title: 'Jin Shun Zhu | AI Engineer & Software Developer',
    description: 'AI engineering, generative AI, and software development portfolio based in Singapore.',
    url: 'https://jin-shun-zhu.kingsoonchu.chatgpt.site',
    siteName: 'Jin Shun Zhu',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Jin Shun Zhu — AI Engineer & Software Developer' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jin Shun Zhu | AI Engineer & Software Developer',
    description: 'AI engineering, generative AI, and software development portfolio based in Singapore.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
