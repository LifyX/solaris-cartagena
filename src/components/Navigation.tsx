import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import solarisLogo from "../assets/c76beadbf6b72572b306185aa05f3e4ac73c8e54.png";

interface NavigationProps {
  t: any;
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  onBookNow: () => void;
}

export function Navigation({ t, currentLanguage, onLanguageChange, onBookNow }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const { totalItems: totalWishlistItems } = useWishlist();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { label: t.home, href: '/' },
    { label: t.aboutUs, href: '/about' },
    { label: t.booking, href: '/booking' },
    { label: t.property, href: '/property' },
    { label: t.experiences, href: '/experiences' },
    { label: t.location, href: '/location' },
    { label: t.coffeeShop, href: '/coffee-shop' },
    { label: t.faq, href: '/faq' },
  ];

  // On non-home pages, always show solid nav
  const showSolidNav = !isHomePage || isScrolled;

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show bottom sticky button only when scrolled down on mobile
  const showStickyButton = isScrolled;

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showSolidNav
            ? 'bg-white shadow-md'
            : 'bg-white/10 backdrop-blur-md'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center gap-2" onClick={handleLogoClick}>
              <img 
                src={solarisLogo} 
                alt="Solaris Cartagena Stays" 
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              />
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors hover:text-[#CFA349] ${
                    showSolidNav ? 'text-[#0E1C3A]' : 'text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              {/* Wishlist Icon */}
              <Link to="/wishlist" className="relative hidden sm:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`relative ${showSolidNav ? 'text-[#0E1C3A] hover:text-[#CFA349]' : 'text-white hover:text-[#CFA349]'}`}
                >
                  <Heart className="h-5 w-5" />
                  {totalWishlistItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#CFA349] text-[#0E1C3A] text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalWishlistItems}
                    </span>
                  )}
                </Button>
              </Link>
              
              {/* Shopping Cart Icon */}
              <Link to="/cart" className="relative hidden sm:block">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`relative ${showSolidNav ? 'text-[#0E1C3A] hover:text-[#CFA349]' : 'text-white hover:text-[#CFA349]'}`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#CFA349] text-[#0E1C3A] text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </Button>
              </Link>
              
              <div className="hidden sm:block">
                <LanguageSwitcher
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                />
              </div>
              <Button
                onClick={onBookNow}
                className="hidden sm:inline-flex bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
              >
                {t.bookStay}
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 ${showSolidNav ? 'text-[#0E1C3A]' : 'text-white'}`}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-40 bg-white shadow-lg lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {/* Mobile Icon Links */}
            <div className="flex items-center justify-around pb-4 border-b border-gray-200">
              <Link to="/wishlist" className="relative flex flex-col items-center gap-1">
                <div className="relative">
                  <Heart className="h-6 w-6 text-[#0E1C3A]" />
                  {totalWishlistItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#CFA349] text-[#0E1C3A] text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {totalWishlistItems}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#0E1C3A]">{t.myWishlist}</span>
              </Link>
              
              <Link to="/cart" className="relative flex flex-col items-center gap-1">
                <div className="relative">
                  <ShoppingCart className="h-6 w-6 text-[#0E1C3A]" />
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#CFA349] text-[#0E1C3A] text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#0E1C3A]">{t.cartTitle}</span>
              </Link>
              
              <div className="flex flex-col items-center gap-1">
                <LanguageSwitcher
                  currentLanguage={currentLanguage}
                  onLanguageChange={onLanguageChange}
                />
                <span className="text-xs text-[#0E1C3A]">{currentLanguage === 'en' ? 'Language' : currentLanguage === 'es' ? 'Idioma' : 'Langue'}</span>
              </div>
            </div>
            
            {/* Navigation Links */}
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="block w-full text-left py-2 text-[#0E1C3A] hover:text-[#CFA349] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookNow();
              }}
              className="w-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
            >
              {t.bookStay}
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
}