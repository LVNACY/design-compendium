import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Design Compendium',
  description: 'A compendium of resources for art, design, and code.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
