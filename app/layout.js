
import "./globals.css"

export const metadata = {
  title: "Lee Richardson",
  description: "Quick personal site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
