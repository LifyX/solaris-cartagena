import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Coffee, Heart, Mountain } from "lucide-react";
import { ImageSlideshow } from "./ImageSlideshow";

interface CoffeeSectionProps {
  t: any;
}

export function CoffeeSection({ t }: CoffeeSectionProps) {
  const coffeeImages = [
    "https://images.unsplash.com/photo-1772141614991-eea2a95e770c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjb2ZmZWUlMjBiZWFucyUyMHJvYXN0ZWR8ZW58MXx8fHwxNzcyODk2NTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1611330556082-0ba06d2780d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBmYXJtJTIwY29sb21iaWElMjBwbGFudGF0aW9ufGVufDF8fHx8MTc3Mjg5NjU0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1771508706219-9781c79787e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdXAlMjBjb2xvbWJpYW4lMjBwb3VyfGVufDF8fHx8MTc3Mjg5NjU0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1608586283588-123ebe4e6e45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBoYXJ2ZXN0JTIwaGFuZHMlMjBwaWNraW5nfGVufDF8fHx8MTc3Mjg5NjU0MHww&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-orange-50">
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
              <div className="mb-6 inline-block rounded-full border-2 border-[#CFA349] bg-white px-6 py-2">
                <Coffee className="inline-block mr-2 h-5 w-5 text-[#CFA349]" />
                <span className="text-[#CFA349]">Complimentary with Every Stay</span>
              </div>

              <h2 className="mb-6 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                {t.coffeeTitle}
              </h2>

              <p className="mb-6 text-xl text-[#0E1C3A]/80">
                {t.coffeeDescription}
              </p>

              <div className="mb-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Mountain className="h-6 w-6 text-[#CFA349] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#0E1C3A]">
                      {t.coffeeStory}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-[#CFA349] mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-[#0E1C3A]">
                      Sourced from El Líbano, Colombia - cultivated with passion and tradition by the Gasia family
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/coffee">
                <Button
                  size="lg"
                  className="bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
                >
                  {t.coffeeLearnMore}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#CFA349]/20 to-transparent rounded-3xl transform rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <ImageSlideshow
                    images={coffeeImages}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}