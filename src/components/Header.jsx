import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { links } from '../data/links';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/work' && location.pathname.startsWith('/project')) {
      return true;
    }
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Home', id: 'nav-home' },
    { path: '/work', label: 'Work & Skills', id: 'nav-work' },
    { path: '/education', label: 'Education', id: 'nav-education' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center space-x-3 text-primary-accent hover:text-teal-600 dark:hover:text-teal-300 transition duration-300"
            >
              <img
                className="h-10 w-10 object-cover rounded-full"
                src="https://placehold.co/100x100/0891b2/ffffff?text=AS"
                alt="Logo"
              />
              <span className="text-xl font-extrabold">
                Abhishek Sondakar
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300 font-medium ${
                  isActive(link.path) ? 'text-active active-underline' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            
            <Link
              to="/contact"
              className={`text-primary-accent hover:text-teal-600 dark:hover:text-teal-300 transition duration-300 font-medium border-2 border-primary-accent rounded-lg px-3 py-1 ${
                isActive('/contact') ? 'bg-primary-accent text-gray-900 font-extrabold' : ''
              }`}
            >
              Contact
            </Link>
            
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-2">
            <ThemeToggle />
            <button
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none p-2 rounded-md transition duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200 dark:border-gray-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition duration-300 ${
                  isActive(link.path) ? 'text-active active-underline' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
            
            
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-primary-accent hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-300 transition duration-300"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

