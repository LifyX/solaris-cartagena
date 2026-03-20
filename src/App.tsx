import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { BookingPage } from "./pages/BookingPage";
import { PropertyPage } from "./pages/PropertyPage";
import { ExperiencesPage } from "./pages/ExperiencesPage";
import { LocationPage } from "./pages/LocationPage";
import { FAQPage } from "./pages/FAQPage";
import { CoffeePage } from "./pages/CoffeePage";
import { CoffeeShopPage } from "./pages/CoffeeShopPage";
import { CartPage } from "./pages/CartPage";
import { WishlistPage } from "./pages/WishlistPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { Footer } from "./components/Footer";
import { AIChatbot } from "./components/AIChatbot";
import { translations, Language } from "./lib/translations";
import { Toaster } from "./components/ui/sonner";

function AppContent() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const navigate = useNavigate();

  const t = translations[currentLanguage];

  const scrollToBooking = () => {
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        t={t}
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        onBookNow={scrollToBooking}
      />

      <main>
        <Routes>
          <Route path="/" element={<HomePage t={t} onBookNow={scrollToBooking} />} />
          <Route path="/about" element={<AboutPage t={t} />} />
          <Route path="/booking" element={<BookingPage t={t} />} />
          <Route path="/property" element={<PropertyPage t={t} />} />
          <Route path="/experiences" element={<ExperiencesPage t={t} />} />
          <Route path="/location" element={<LocationPage t={t} />} />
          <Route path="/faq" element={<FAQPage t={t} />} />
          <Route path="/coffee" element={<CoffeePage t={t} />} />
          <Route path="/coffee-shop" element={<CoffeeShopPage t={t} />} />
          <Route path="/cart" element={<CartPage t={t} />} />
          <Route path="/wishlist" element={<WishlistPage t={t} />} />
          <Route path="/checkout" element={<CheckoutPage t={t} />} />
        </Routes>
      </main>

      <Footer t={t} />
      <AIChatbot t={t} />
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <AppContent />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}