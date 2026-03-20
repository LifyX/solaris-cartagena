import { motion } from "motion/react";
import { Waves, Home, Wind, Tv, Wifi, UtensilsCrossed, Palmtree, Eye, ParkingCircle, Dumbbell, Mountain, PartyPopper, Bath } from "lucide-react";
import { Button } from "./ui/button";

interface FeaturesProps {
  t: any;
  onVirtualTour: () => void;
}

export function Features({ t, onVirtualTour }: FeaturesProps) {
  const features = [
    { icon: Waves, label: t.rooftopPool },
    { icon: Home, label: t.balcony },
    { icon: Palmtree, label: t.beachfront },
    { icon: Wind, label: t.airConditioning },
    { icon: Tv, label: t.smartTV },
    { icon: Wifi, label: t.highSpeedWifi },
    { icon: UtensilsCrossed, label: t.fullKitchen },
    { icon: ParkingCircle, label: t.parking },
    { icon: Dumbbell, label: t.gym },
    { icon: Mountain, label: t.oceanViews },
    { icon: PartyPopper, label: t.partySuite },
    { icon: Bath, label: t.privateBathroom },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.features}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 p-6 rounded-full bg-[#0E1C3A]/5 group-hover:bg-[#CFA349]/10 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-[#CFA349]" strokeWidth={1.5} />
              </div>
              <p className="text-[#0E1C3A]/80">{feature.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={onVirtualTour}
            className="bg-[#0E1C3A] hover:bg-[#0E1C3A]/90 text-white px-8"
          >
            <Eye className="mr-2 h-5 w-5" />
            {t.virtualTour}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}