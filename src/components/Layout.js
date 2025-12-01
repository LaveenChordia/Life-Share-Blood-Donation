'use client';
import Link from 'next/link';
import { Heart, Menu, X, User, Droplet } from 'lucide-react';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation */}
      <nav className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 fill-current" />
              <span className="text-2xl font-bold tracking-tight">LifeShare</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="hover:text-red-100 font-medium transition">Home</Link>
              <Link href="/about" className="hover:text-red-100 font-medium transition">About</Link>
              <Link href="/donate" className="hover:text-red-100 font-medium transition">Donate</Link>
              <Link href="/request" className="hover:text-red-100 font-medium transition">Request Blood</Link>
              <Link href="/dashboard" className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold hover:bg-red-50 transition flex items-center space-x-1">
                <User size={18} />
                <span>Dashboard</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-red-700 pb-4 px-4">
            <div className="flex flex-col space-y-3 pt-2">
              <Link href="/" className="block py-2 hover:bg-red-600 rounded px-2">Home</Link>
              <Link href="/about" className="block py-2 hover:bg-red-600 rounded px-2">About</Link>
              <Link href="/donate" className="block py-2 hover:bg-red-600 rounded px-2">Donate</Link>
              <Link href="/request" className="block py-2 hover:bg-red-600 rounded px-2">Request Blood</Link>
              <Link href="/dashboard" className="block py-2 bg-white text-red-600 rounded px-2 font-semibold text-center">Dashboard</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 text-white mb-4">
                <Heart className="h-6 w-6 fill-red-500 text-red-500" />
                <span className="text-xl font-bold">LifeShare</span>
              </div>
              <p className="text-sm text-gray-400">
                Connecting donors with those in need. Every drop counts in saving a life.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/donate" className="hover:text-red-400 transition">Donate Blood</Link></li>
                <li><Link href="/request" className="hover:text-red-400 transition">Request Blood</Link></li>
                <li><Link href="/about" className="hover:text-red-400 transition">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-red-400 transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-400 transition">FAQ</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>Shivajinagar, Pune 411016</li>
                <li>+91 7722097510</li>
                <li>info@lifeshare.org</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} LifeShare. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
