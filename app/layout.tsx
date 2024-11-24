// app/layout.tsx
import './globals.css'; // Import global styles
import { ReactNode } from 'react';

export const metadata = {
  title: 'Wellness Clinic',
  description: 'The Clinic that cares for life and humanity.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sky-100 text-gray-900">
        {/* Navbar */}
        <header className="w-full bg-sky-100 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-semibold text-gray-900">Wellness Clinic</div>
            <nav className="space-x-8 hidden md:flex">
  <a href="/" className="hover:text-gray-700">Home</a>
  <a href="/about" className="hover:text-gray-700">About</a>
  <a href="/services" className="hover:text-gray-700">Services</a>
  <a href="/doctors" className="hover:text-gray-700">Doctors</a>
  <a href="/appointment" className="hover:text-gray-700">Appointment</a>
</nav>

          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-sky-100 py-6 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Wellness Clinic. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
