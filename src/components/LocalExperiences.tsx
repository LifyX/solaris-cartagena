import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Anchor, Building2, Music, Footprints, ChefHat, Waves } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface LocalExperiencesProps {
  t: any;
}

export function LocalExperiences({ t }: LocalExperiencesProps) {
  const experiences = [
    {
      icon: Anchor,
      title: t.rosarioIslands,
      description: "Crystal-clear waters and pristine beaches",
      image: "https://images.unsplash.com/photo-1583214552082-dff0bb815203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NhcmlvJTIwaXNsYW5kcyUyMGNvbG9tYmlhfGVufDF8fHx8MTc2Mjg5OTUyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Building2,
      title: t.walledCity,
      description: "Explore colonial architecture and history",
      image: "https://images.unsplash.com/photo-1714686574932-5bb429ed70b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjB3YWxsZWQlMjBjaXR5fGVufDF8fHx8MTc2Mjg5OTUyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Music,
      title: t.getsemani,
      description: "Vibrant nightlife and street art",
      image: "https://images.unsplash.com/photo-1651421978782-9817d9feccaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJ0YWdlbmElMjBjb2xvbWJpYSUyMGJlYWNofGVufDF8fHx8MTc2Mjg5OTUyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Footprints,
      title: t.salsaLessons,
      description: "Learn to dance like a local",
      image: "https://images.unsplash.com/photo-1757096029007-87646e344923?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwbW9kZXJufGVufDF8fHx8MTc2Mjg5OTUyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: ChefHat,
      title: t.cookingClasses,
      description: "Discover Colombian cuisine",
      image: "https://images.unsplash.com/photo-1647049052430-d7d270f38298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvbWJpYW4lMjBjb2ZmZWUlMjBmYXJtfGVufDF8fHx8MTc2Mjg5OTUyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Waves,
      title: t.waterSports,
      description: "Jet skiing, paddleboarding & more",
      image: "https://images.unsplash.com/photo-1583214552082-dff0bb815203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NhcmlvJTIwaXNsYW5kcyUyMGNvbG9tYmlhfGVufDF8fHx8MTc2Mjg5OTUyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.experiencesTitle}
          </h2>
          <p className="text-xl text-[#0E1C3A]/70 max-w-2xl mx-auto">
            Immerse yourself in the rich culture and natural beauty of Colombia's Caribbean coast
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <experience.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl text-[#0E1C3A]">{experience.title}</h3>
                  <p className="text-[#0E1C3A]/70">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}