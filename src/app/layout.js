import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: "א.א הרמות | שירותי מנוף והרמת משאות",
  description: "שירותי מנוף והרמת משאות עד 15 קומות, מעברי דירה או משרד, חסכוני בכסף, חסכוני בזמן, זמינות גבוהה בפריסה ארצית",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8NK0GE4NKD"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8NK0GE4NKD');
          `}
        </script>
      </Head>
      <html lang="he" dir="RTL">
        <body>{children}</body>
      </html>
    </>
  );
}
