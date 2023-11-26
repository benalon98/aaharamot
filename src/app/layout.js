import "./globals.css";

export const metadata = {
  title: "א.א הרמות | שירותי מנוף והרמת משאות",

  description:
    "שירותי מנוף והרמת משאות עד 15 קומות, מעברי דירה או משרד, חסכוני בכסף, חסכוני בזמן, זמינות גבוהה בפריסה ארצית",
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="RTL">
      <body>{children}</body>
    </html>
  );
}
