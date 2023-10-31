import '@/styles/main.scss';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Footer from '@/components/layouts/Footer/Footer';

import Favicon from '../../public/img/favicon.ico';
import BackgroundCloudImage from '@/components/layouts/BackgroundCloudImage/BackgroundCloudImage';
import BackgroundStarImage from '@/components/layouts/BackgroundStarImage/BackgroundStarImage';
import Container from '@/components/layouts/Container/Container';

export const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'swap',
});

const newYork = localFont({
  src: './fonts/NewYork.otf',
  variable: '--font-newyork',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '오픈오프',
  description: '오프라인 이벤트 탐색',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
    viewportFit: 'cover',
  },
  icons: [{ rel: 'icon', url: Favicon.src }],
  metadataBase: new URL('https://de63-118-219-247-113.ngrok-free.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pretendard.variable} ${newYork.variable}`}>
        <Container>
          <BackgroundCloudImage />
          <BackgroundStarImage />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
