import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface CartPageProps {
  t: any;
}

export function CartPage({ t }: CartPageProps) {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error(t.cartEmpty || "Your cart is empty");
      return;
    }
    
    navigate('/checkout');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="mb-4 text-3xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.cartEmpty || "Your cart is empty"}
            </h1>
            <p className="mb-8 text-gray-600">
              {t.cartEmptyDesc || "Add some delicious Villa Mariela Gasia coffee to get started"}
            </p>
            <Link to="/coffee-shop">
              <Button
                size="lg"
                className="bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {t.continueShopping || "Continue Shopping"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 sm:mb-8"
          >
            <Link to="/coffee-shop">
              <Button variant="ghost" className="mb-4 text-sm sm:text-base">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t.continueShopping || "Continue Shopping"}
              </Button>
            </Link>

            <h1 className="mb-2 text-3xl sm:text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.cartTitle || "Shopping Cart"}
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              {totalItems} {totalItems === 1 ? (t.item || "item") : (t.items || "items")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden mx-auto sm:mx-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left">
                      <h3 className="mb-2 text-lg sm:text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                        {item.name}
                      </h3>
                      
                      <div className="mb-3 flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
                        {item.roastLevel && (
                          <span>{item.roastLevel} {t.roast || "Roast"}</span>
                        )}
                        {item.weight && (
                          <span>• {item.weight}</span>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                          >
                            <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                          
                          <span className="text-base sm:text-lg w-8 text-center font-semibold">{item.quantity}</span>
                          
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 sm:h-9 sm:w-9 p-0"
                          >
                            <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                          </Button>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                          <span className="text-lg sm:text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>

                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              removeFromCart(item.id);
                              toast.success(t.removedFromCart || "Item removed from cart");
                            }}
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 h-8 w-8 sm:h-9 sm:w-9 p-0"
                          >
                            <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg lg:sticky lg:top-24"
              >
                <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                  {t.orderSummary || "Order Summary"}
                </h2>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                  <div className="flex justify-between text-sm sm:text-base text-gray-600">
                    <span>{t.subtotal || "Subtotal"}</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base text-gray-600">
                    <span>{t.shipping || "Shipping"}</span>
                    <span className="text-[#CFA349] font-semibold">
                      {totalPrice >= 50 ? (t.free || "Free") : "$5.00"}
                    </span>
                  </div>

                  {totalPrice < 50 && (
                    <div className="text-xs sm:text-sm text-[#CFA349] bg-amber-50 p-2 sm:p-3 rounded-lg">
                      {t.freeShippingMessage || `Spend $${(50 - totalPrice).toFixed(2)} more for free shipping!`}
                    </div>
                  )}

                  <div className="border-t pt-3 sm:pt-4">
                    <div className="flex justify-between text-lg sm:text-xl">
                      <span className="text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                        {t.total || "Total"}
                      </span>
                      <span className="text-[#0E1C3A] font-semibold" style={{ fontFamily: 'Georgia, serif' }}>
                        ${(totalPrice + (totalPrice >= 50 ? 0 : 5)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={handleCheckout}
                  className="w-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A] mb-2 sm:mb-3 py-5 sm:py-6 text-sm sm:text-base"
                >
                  {t.proceedToCheckout || "Proceed to Checkout"}
                </Button>

                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    clearCart();
                    toast.success(t.cartCleared || "Cart cleared");
                  }}
                  className="w-full text-gray-600 text-xs sm:text-sm"
                >
                  {t.clearCart || "Clear Cart"}
                </Button>

                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t text-xs sm:text-sm text-gray-600 space-y-2">
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>{t.secureCheckout || "Secure checkout"}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>{t.freshlyRoasted || "Freshly roasted to order"}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-green-600 flex-shrink-0">✓</span>
                    <span>{t.shipWorldwide || "We ship worldwide"}</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}