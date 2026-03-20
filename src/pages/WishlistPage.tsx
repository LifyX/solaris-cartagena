import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { Heart, ShoppingCart, Trash2, ShoppingBag } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface WishlistPageProps {
  t: any;
}

export function WishlistPage({ t }: WishlistPageProps) {
  const { items, removeFromWishlist, totalItems } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      roastLevel: item.roastLevel,
      weight: item.weight,
    });
    toast.success(`${item.name} ${t.addedToCart || 'added to cart'}`);
  };

  const handleRemove = (id: string, name: string) => {
    removeFromWishlist(id);
    toast.success(`${name} ${t.removedFromWishlist || 'removed from wishlist'}`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Heart className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h1 className="mb-4 text-4xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.wishlistEmpty || "Your Wishlist is Empty"}
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              {t.wishlistEmptyDesc || "Start adding your favorite coffee products to your wishlist!"}
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
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <Heart className="h-16 w-16 text-[#CFA349] mx-auto mb-4" />
            <h1 className="mb-4 text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.myWishlist || "My Wishlist"}
            </h1>
            <p className="text-xl text-gray-600">
              {totalItems} {totalItems === 1 ? (t.item || "item") : (t.items || "items")}
            </p>
          </motion.div>

          {/* Wishlist Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {item.weight && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-[#CFA349] text-[#0E1C3A] px-3 py-1 rounded-full text-sm">
                        {item.weight}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                    {item.name}
                  </h3>

                  {item.roastLevel && (
                    <p className="mb-3 text-sm text-[#CFA349]">
                      {item.roastLevel} {t.roast || "Roast"}
                    </p>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                      ${item.price}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      {t.addToCart || "Add to Cart"}
                    </Button>
                    <Button
                      onClick={() => handleRemove(item.id, item.name)}
                      variant="outline"
                      size="icon"
                      className="text-red-500 hover:bg-red-50 hover:text-red-600 border-red-200"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/coffee-shop">
              <Button
                size="lg"
                variant="outline"
                className="border-[#CFA349] text-[#CFA349] hover:bg-[#CFA349] hover:text-[#0E1C3A]"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {t.continueShopping || "Continue Shopping"}
              </Button>
            </Link>
            <Link to="/cart">
              <Button
                size="lg"
                className="bg-[#0E1C3A] hover:bg-[#0E1C3A]/90 text-white"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                {t.viewCart || "View Cart"}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}