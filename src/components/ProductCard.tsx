import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Plus, Heart } from "lucide-react";

interface ProductCardProps {
  product: any;
  onAddToCart: (product: any) => void;
  onAddToWishlist: (product: any) => void;
  index: number;
  t: any;
}

export function ProductCard({ product, onAddToCart, onAddToWishlist, index, t }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Weight Badge */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10">
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-[#CFA349] text-[#0E1C3A] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm shadow-lg backdrop-blur-sm"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            {product.weight}
          </motion.span>
        </div>

        {/* Wishlist Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10"
        >
          <Button
            onClick={() => onAddToWishlist(product)}
            variant="ghost"
            size="icon"
            className="bg-white/95 hover:bg-white text-[#CFA349] hover:text-[#0E1C3A] shadow-lg backdrop-blur-sm rounded-full h-10 w-10 sm:h-12 sm:w-12"
          >
            <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </motion.div>

        {/* Gold Accent Border on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 border-2 sm:border-4 border-[#CFA349]/30 pointer-events-none"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 relative">
        {/* Gold Decorative Line */}
        <div className="absolute top-0 left-4 sm:left-6 right-4 sm:right-6 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#CFA349] to-transparent" />

        {/* Roast Level Badge */}
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2 sm:mb-3 flex items-center gap-2"
        >
          <div className="flex-1 flex items-center gap-2">
            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs bg-amber-50 text-[#CFA349] border border-[#CFA349]/30">
              {product.roastLevel} {t.roast || "Roast"}
            </span>
          </div>
        </motion.div>

        {/* Product Name */}
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl text-[#0E1C3A] leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
          {t.language === 'es' ? product.nameEs : 
           t.language === 'fr' ? product.nameFr : 
           product.name}
        </h3>

        {/* Description */}
        <p className="mb-4 sm:mb-6 text-gray-600 text-xs sm:text-sm leading-relaxed min-h-[2.5rem] sm:min-h-[3rem]">
          {t.language === 'es' ? product.descriptionEs : 
           t.language === 'fr' ? product.descriptionFr : 
           product.description}
        </p>

        {/* Price and Add to Cart */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              ${product.price}
            </span>
            {product.id === 'subscription' && (
              <span className="text-xs text-gray-500">{t.perMonth || 'per month'}</span>
            )}
          </div>

          <Button
            onClick={() => onAddToCart(product)}
            className="w-full sm:w-auto bg-[#CFA349] hover:bg-[#0E1C3A] text-[#0E1C3A] hover:text-white transition-all duration-300 rounded-full px-4 sm:px-6 py-4 sm:py-6 shadow-lg hover:shadow-xl group"
          >
            <Plus className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-xs sm:text-sm">{t.addToCart || "Add to Cart"}</span>
          </Button>
        </div>

        {/* Premium Quality Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs text-gray-500"
        >
          <div className="h-1 w-1 rounded-full bg-[#CFA349]" />
          <span>{t.premiumColombian || "100% Colombian Arabica"}</span>
          <div className="h-1 w-1 rounded-full bg-[#CFA349]" />
        </motion.div>
      </div>
    </motion.div>
  );
}