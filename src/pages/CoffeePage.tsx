import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Coffee, Mountain, Heart, Leaf, Award, Users, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface CoffeePageProps {
  t: any;
}

export function CoffeePage({ t }: CoffeePageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Carousel images for Gasia Family Legacy section
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1647049052430-d7d270f38298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjb2ZmZWUlMjBiZWFucyUyMGhhcnZlc3R8ZW58MXx8fHwxNzYzMjIwMDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Coffee harvest"
    },
    {
      url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtZXJ8ZW58MXx8fHwxNzYzMjIwMTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Gasia family at work"
    },
    {
      url: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9ufGVufDF8fHx8MTc2MzIyMDEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Coffee plantation"
    },
    {
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwxfHx8fDE3NjMyMjAxMDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fresh coffee beans"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBwbGFudGF0aW9ufGVufDF8fHx8MTc2MzIyMDEwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Villa Mariela Gasia Coffee Farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-block rounded-full border-2 border-[#CFA349] bg-[#CFA349]/20 px-6 py-3 backdrop-blur-sm">
              <Coffee className="inline-block mr-2 h-6 w-6 text-[#CFA349]" />
              <span className="text-[#CFA349] text-lg">Villa Mariela Gasia</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-7xl" style={{ fontFamily: 'Georgia, serif' }}>
              {t.coffeePageTitle}
            </h1>

            <p className="mb-10 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t.coffeePageSubtitle}
            </p>

            <Link to="/coffee-shop">
              <Button
                size="lg"
                className="bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A] px-8 py-6 text-lg"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                {t.coffeeShopNow}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="mb-6 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                  {t.coffeeStoryTitle}
                </h2>
                <p className="mb-4 text-lg text-gray-600">
                  {t.coffeeStoryText1}
                </p>
                <p className="mb-4 text-lg text-gray-600">
                  {t.coffeeStoryText2}
                </p>
                <p className="text-lg text-gray-600">
                  {t.coffeeStoryText3}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFA349]/20 to-transparent rounded-3xl transform -rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                  {/* Carousel Image */}
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-[500px]"
                  >
                    <ImageWithFallback
                      src={carouselImages[currentImageIndex].url}
                      alt={carouselImages[currentImageIndex].alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0E1C3A] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#0E1C3A] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>

                  {/* Indicator Dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {carouselImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-[#CFA349] w-8'
                            : 'bg-white/60 hover:bg-white/90'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                {t.coffeeProcessTitle}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t.coffeeProcessSubtitle}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Leaf,
                  title: t.coffeeStep1Title,
                  description: t.coffeeStep1Desc,
                },
                {
                  icon: Users,
                  title: t.coffeeStep2Title,
                  description: t.coffeeStep2Desc,
                },
                {
                  icon: Coffee,
                  title: t.coffeeStep3Title,
                  description: t.coffeeStep3Desc,
                },
                {
                  icon: Award,
                  title: t.coffeeStep4Title,
                  description: t.coffeeStep4Desc,
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#CFA349]/10">
                    <step.icon className="h-7 w-7 text-[#CFA349]" />
                  </div>
                  <h3 className="mb-3 text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coffee Culture Section */}
      <section className="py-24 bg-[#0E1C3A] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.15 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full h-[500px]"
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1625465115622-4a265061db77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjByb2FzdGluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzYzMTY2MTYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Coffee roasting"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Overlay hint */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-center pb-6">
                    <span className="text-white/90 text-sm px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full">
                      Click to zoom
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <h2 className="mb-6 text-4xl md:text-5xl" style={{ fontFamily: 'Georgia, serif' }}>
                  {t.coffeeCultureTitle}
                </h2>
                <p className="mb-4 text-lg text-white/90">
                  {t.coffeeCultureText1}
                </p>
                <p className="mb-6 text-lg text-white/90">
                  {t.coffeeCultureText2}
                </p>

                <div className="space-y-4">
                  {[
                    { icon: Mountain, text: t.coffeeCulturePoint1 },
                    { icon: Heart, text: t.coffeeCulturePoint2 },
                    { icon: Award, text: t.coffeeCulturePoint3 },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="h-6 w-6 text-[#CFA349] flex-shrink-0 mt-1" />
                      <p className="text-white/90">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Coffee className="h-16 w-16 text-[#CFA349] mx-auto mb-6" />
              <h2 className="mb-6 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                {t.coffeeCTATitle}
              </h2>
              <p className="mb-10 text-xl text-gray-600 max-w-2xl mx-auto">
                {t.coffeeCTASubtitle}
              </p>

              <Link to="/coffee-shop">
                <Button
                  size="lg"
                  className="bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A] px-8 py-6 text-lg"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  {t.coffeeVisitShop}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}