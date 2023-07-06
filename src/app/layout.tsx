import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "OpenSchools",
  description: "Sua escola agora mais conectada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
