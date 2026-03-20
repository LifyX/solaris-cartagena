import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { ShoppingCart, Plus, Coffee, Award, Package, Heart } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface CoffeeShopPageProps {
  t: any;
}

const products = [
  {
    id: "light-roast-250",
    name: "Villa Mariela Gasia - Light Roast",
    nameEs: "Villa Mariela Gasia - Tostado Ligero",
    nameFr: "Villa Mariela Gasia - Torréfaction Légère",
    price: 18,
    weight: "250g",
    roastLevel: "Light",
    description: "Bright and fruity with notes of citrus and floral undertones",
    descriptionEs: "Brillante y afrutado con notas de cítricos y matices florales",
    descriptionFr: "Vif et fruité avec des notes d'agrumes et des nuances florales",
    image: "https://images.unsplash.com/photo-1685798830559-c116586a0d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHJvYXN0JTIwY29mZmVlJTIwYmFnJTIwcGFja2FnaW5nfGVufDF8fHx8MTc3MzUyODQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "medium-roast-250",
    name: "Villa Mariela Gasia - Medium Roast",
    nameEs: "Villa Mariela Gasia - Tostado Medio",
    nameFr: "Villa Mariela Gasia - Torréfaction Moyenne",
    price: 18,
    weight: "250g",
    roastLevel: "Medium",
    description: "Balanced and smooth with caramel sweetness and nutty finish",
    descriptionEs: "Equilibrado y suave con dulzura de caramelo y final a nuez",
    descriptionFr: "Équilibré et doux avec une douceur de caramel et une finale de noisette",
    image: "https://images.unsplash.com/photo-1582584636300-c63b6fccd885?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdW0lMjByb2FzdCUyMGNvZmZlZSUyMGJlYW5zJTIwYmFnfGVufDF8fHx8MTc3MzUyODQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "dark-roast-250",
    name: "Villa Mariela Gasia - Dark Roast",
    nameEs: "Villa Mariela Gasia - Tostado Oscuro",
    nameFr: "Villa Mariela Gasia - Torréfaction Foncée",
    price: 18,
    weight: "250g",
    roastLevel: "Dark",
    description: "Bold and rich with chocolate notes and smoky undertones",
    descriptionEs: "Audaz y rico con notas de chocolate y matices ahumados",
    descriptionFr: "Audacieux et riche avec des notes de chocolat et des nuances fumées",
    image: "https://images.unsplash.com/photo-1601568656042-65dc282bd537?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcm9hc3QlMjBjb2ZmZWUlMjBwYWNrYWdlJTIwbHV4dXJ5fGVufDF8fHx8MTc3MzUyODQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "light-roast-500",
    name: "Villa Mariela Gasia - Light Roast (500g)",
    nameEs: "Villa Mariela Gasia - Tostado Ligero (500g)",
    nameFr: "Villa Mariela Gasia - Torréfaction Légère (500g)",
    price: 32,
    weight: "500g",
    roastLevel: "Light",
    description: "Bright and fruity with notes of citrus and floral undertones",
    descriptionEs: "Brillante y afrutado con notas de cítricos y matices florales",
    descriptionFr: "Vif et fruité avec des notes d'agrumes et des nuances florales",
    image: "https://images.unsplash.com/photo-1595259602106-9b5d5a7c825e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwY29mZmVlJTIwYmVhbnMlMjBsaWdodHxlbnwxfHx8fDE3NzQwMjQxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "medium-roast-500",
    name: "Villa Mariela Gasia - Medium Roast (500g)",
    nameEs: "Villa Mariela Gasia - Tostado Medio (500g)",
    nameFr: "Villa Mariela Gasia - Torréfaction Moyenne (500g)",
    price: 32,
    weight: "500g",
    roastLevel: "Medium",
    description: "Balanced and smooth with caramel sweetness and nutty finish",
    descriptionEs: "Equilibrado y suave con dulzura de caramelo y final a nuez",
    descriptionFr: "Équilibré et doux avec une douceur de caramel et une finale de noisette",
    image: "https://images.unsplash.com/photo-1761936513644-cbc5f3207139?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVjaWFsdHklMjBjb2ZmZWUlMjBiYWclMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzczOTQ1MDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "dark-roast-500",
    name: "Villa Mariela Gasia - Dark Roast (500g)",
    nameEs: "Villa Mariela Gasia - Tostado Oscuro (500g)",
    nameFr: "Villa Mariela Gasia - Torréfaction Foncée (500g)",
    price: 32,
    weight: "500g",
    roastLevel: "Dark",
    description: "Bold and rich with chocolate notes and smoky undertones",
    descriptionEs: "Audaz y rico con notas de chocolate y matices ahumados",
    descriptionFr: "Audacieux et riche avec des notes de chocolat et des nuances fumées",
    image: "https://images.unsplash.com/photo-1773118360569-920edd94c56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwY29mZmVlJTIwcm9hc3RpbmclMjBiZWFuc3xlbnwxfHx8fDE3NzQwMjQxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "variety-pack",
    name: "Villa Mariela Gasia - Variety Pack",
    nameEs: "Villa Mariela Gasia - Paquete Variado",
    nameFr: "Villa Mariela Gasia - Pack Variété",
    price: 48,
    weight: "3 x 250g",
    roastLevel: "Variety",
    description: "Experience all three roasts - Light, Medium, and Dark (3 bags)",
    descriptionEs: "Experimenta los tres tostados - Ligero, Medio y Oscuro (3 bolsas)",
    descriptionFr: "Découvrez les trois torréfactions - Légère, Moyenne et Foncée (3 sacs)",
    image: "https://images.unsplash.com/photo-1772141614991-eea2a95e770c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY29sb21iaWFuJTIwY29mZmVlJTIwYmVhbnN8ZW58MXx8fHwxNzczNTI4NDk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "subscription",
    name: "Monthly Subscription - Medium Roast",
    nameEs: "Suscripción Mensual - Tostado Medio",
    nameFr: "Abonnement Mensuel - Torréfaction Moyenne",
    price: 55,
    weight: "2 x 250g/month",
    roastLevel: "Medium",
    description: "Fresh coffee delivered monthly (2 bags, cancel anytime)",
    descriptionEs: "Café fresco entregado mensualmente (2 bolsas, cancela cuando quieras)",
    descriptionFr: "Café frais livré mensuellement (2 sacs, annulez à tout moment)",
    image: "https://images.unsplash.com/photo-1584486233406-972d2ffda560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzdWJzY3JpcHRpb24lMjBib3h8ZW58MXx8fHwxNzczNTI4NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function CoffeeShopPage({ t }: CoffeeShopPageProps) {
  const { addToCart, totalItems } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const [filter, setFilter] = useState<string>("all");

  const handleAddToCart = (product: any) => {
    const productName = t.language === 'es' ? product.nameEs : 
                       t.language === 'fr' ? product.nameFr : 
                       product.name;
    
    const productDesc = t.language === 'es' ? product.descriptionEs : 
                       t.language === 'fr' ? product.descriptionFr : 
                       product.description;

    addToCart({
      id: product.id,
      name: productName,
      price: product.price,
      image: product.image,
      roastLevel: product.roastLevel,
      weight: product.weight,
    });

    toast.success(`${productName} ${t.addedToCart || 'added to cart'}`);
  };

  const handleAddToWishlist = (product: any) => {
    const productName = t.language === 'es' ? product.nameEs : 
                       t.language === 'fr' ? product.nameFr : 
                       product.name;

    if (isInWishlist(product.id)) {
      toast.info(`${productName} is already in your wishlist`);
      return;
    }

    addToWishlist({
      id: product.id,
      name: productName,
      price: product.price,
      image: product.image,
      roastLevel: product.roastLevel,
      weight: product.weight,
    });

    toast.success(`${productName} ${t.addedToWishlist || 'added to wishlist'}`);
  };

  const filteredProducts = filter === "all" 
    ? products 
    : products.filter(p => p.roastLevel.toLowerCase() === filter.toLowerCase());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Coffee className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 text-[#CFA349] mx-auto mb-4 sm:mb-6" />
            <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.coffeeShopTitle}
            </h1>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-600 px-4">
              {t.coffeeShopSubtitle}
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 px-4">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className={`text-xs sm:text-sm ${filter === "all" ? "bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]" : ""}`}
              >
                {t.coffeeFilterAll || "All Products"}
              </Button>
              <Button
                variant={filter === "light" ? "default" : "outline"}
                onClick={() => setFilter("light")}
                className={`text-xs sm:text-sm ${filter === "light" ? "bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]" : ""}`}
              >
                {t.coffeeFilterLight || "Light Roast"}
              </Button>
              <Button
                variant={filter === "medium" ? "default" : "outline"}
                onClick={() => setFilter("medium")}
                className={`text-xs sm:text-sm ${filter === "medium" ? "bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]" : ""}`}
              >
                {t.coffeeFilterMedium || "Medium Roast"}
              </Button>
              <Button
                variant={filter === "dark" ? "default" : "outline"}
                onClick={() => setFilter("dark")}
                className={`text-xs sm:text-sm ${filter === "dark" ? "bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]" : ""}`}
              >
                {t.coffeeFilterDark || "Dark Roast"}
              </Button>
            </div>

            {totalItems > 0 && (
              <Link to="/cart">
                <Button
                  size="lg"
                  className="bg-[#0E1C3A] hover:bg-[#0E1C3A]/90 text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  {t.viewCart || "View Cart"} ({totalItems})
                </Button>
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-amber-50/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onAddToWishlist={handleAddToWishlist}
                  index={index}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 bg-[#0E1C3A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              {[
                {
                  icon: Package,
                  title: t.coffeeFreeShipping || "Free Shipping",
                  description: t.coffeeFreeShippingDesc || "On orders over $50",
                },
                {
                  icon: Award,
                  title: t.coffeeQuality || "Premium Quality",
                  description: t.coffeeQualityDesc || "100% Colombian Arabica",
                },
                {
                  icon: Coffee,
                  title: t.coffeeFreshness || "Always Fresh",
                  description: t.coffeeFreshnessDesc || "Roasted to order",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <feature.icon className="h-12 w-12 text-[#CFA349] mx-auto mb-4" />
                  <h3 className="mb-2 text-xl" style={{ fontFamily: 'Georgia, serif' }}>
                    {feature.title}
                  </h3>
                  <p className="text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}