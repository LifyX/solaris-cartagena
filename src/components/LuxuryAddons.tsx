import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Plane, Sparkles, Shirt, Heart, Baby } from "lucide-react";

interface LuxuryAddonsProps {
  t: any;
}

export function LuxuryAddons({ t }: LuxuryAddonsProps) {
  const addons = [
    {
      icon: Plane,
      title: t.airportPickup,
      description: "Hassle-free arrival with private transport",
    },
    {
      icon: Sparkles,
      title: t.cleaning,
      description: "Professional cleaning service included",
    },
    {
      icon: Shirt,
      title: t.beachTowels,
      description: "Premium beach towels provided",
    },
    {
      icon: Heart,
      title: t.romanticPackage,
      description: "Special setup with champagne & roses",
    },
    {
      icon: Baby,
      title: t.familyExtras,
      description: "Crib, high chair, and toys available",
    },
  ];

  return (
    <section className="py-24 bg-[#0E1C3A]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
            {t.addonsTitle}
          </h2>
          <p className="text-xl text-white/70">
            Elevate your stay with our premium services
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {addons.map((addon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#CFA349]/20">
                    <addon.icon className="h-8 w-8 text-[#CFA349]" />
                  </div>
                  <h3 className="mb-2 text-xl text-white">{addon.title}</h3>
                  <p className="text-white/70">{addon.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
