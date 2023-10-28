import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import Favicon from '../../public/img/favicon.ico';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${pretendard.variable} ${newYork.variable} font-pretendard bg-gray-900 text-white bg-cloud-pattern bg-cover bg-no-repeat mx-auto relative flex flex-col min-h-screen-safe scrollbar-hide`}
      >
        <div className="absolute top-0 w-full h-screen max-w-lg -mx-3 overflow-visible transform -translate-x-1/2 bg-no-repeat bg-cover -z-10 bg-star-pattern left-1/2 touch-none" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
