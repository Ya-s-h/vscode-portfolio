import type { Metadata } from 'next';

import Layout from '@/components/Layout';

import '@/styles/globals.css';
import '@/styles/themes.css';

export const metadata: Metadata = {
  title: {
    default: 'Yash Aggarwal | Portfolio',
    template: 'Yash Aggarwal | %s',
  },
  description:
    'Yash Aggarwal is a backend-focused engineer building enterprise automation systems, APIs, and scalable data pipelines.',
  keywords: [
    'yash aggarwal',
    'yash',
    'aggarwal',
    'backend engineer',
    'automation engineer',
    'python developer',
    'mongodb',
    'yashagg',
    'portfolio',
  ],
  openGraph: {
    title: "Yash Aggarwal's Portfolio",
    description:
      'A backend-focused engineer building enterprise automation and scalable systems.',
    images: ['/website-image.png'],
    url: 'https://yashagg.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
