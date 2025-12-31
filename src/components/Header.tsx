import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <span className="text-xl font-medium text-gray-800">Fatoura</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">Accueil</a>
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Comptabilité</a>
            <a href="#stock" className="text-gray-600 hover:text-gray-900 transition-colors">Stock</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Tarifs</a>
            <a href="#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Connexion
            </Link>
            <Link to="/register" className="px-5 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors">
              Essai gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-blue-600 font-medium">Accueil</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Comptabilité</a>
              <a href="#stock" className="text-gray-600 hover:text-gray-900">Stock</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Tarifs</a>
              <a href="#blog" className="text-gray-600 hover:text-gray-900">Blog</a>
              <div className="pt-4 flex flex-col space-y-3">
                <Link to="/login" className="text-center py-2 text-gray-600 font-medium">Connexion</Link>
                <Link to="/register" className="text-center py-2.5 bg-blue-500 text-white font-medium rounded-lg">Essai gratuit</Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
