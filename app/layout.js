import Navbar from './navbar.js';
import './globals.css';

export const metadata = {
  title: 'Lee Richardson',
  description: 'Quick personal site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}