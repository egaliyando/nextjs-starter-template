import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description: 'A clean Next.js starter template with TypeScript and Tailwind CSS',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
