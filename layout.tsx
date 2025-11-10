import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Blog",
  description: "A simple and elegant blog site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <header className="bg-white dark:bg-gray-800 shadow-sm">
            <nav className="max-w-5xl mx-auto px-4 py-6">
              <div className="flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
                  My Blog
                </a>
                <a
                  href="/admin"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Admin
                </a>
              </div>
            </nav>
          </header>
          <main className="max-w-5xl mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white dark:bg-gray-800 mt-16 py-6 border-t border-gray-200 dark:border-gray-700">
            <div className="max-w-5xl mx-auto px-4 text-center text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} My Blog. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
