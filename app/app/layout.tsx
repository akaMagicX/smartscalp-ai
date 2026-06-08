import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SmartScalp AI',
  description: 'AI Crypto Scalping Mini App on Base',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}
