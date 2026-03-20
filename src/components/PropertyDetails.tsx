import { motion } from "motion/react";
import { Check, X, MapPin, Shield } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ImageSlideshow } from "./ImageSlideshow";

interface PropertyDetailsProps {
  t: any;
}

export function PropertyDetails({ t }: PropertyDetailsProps) {
  const amenities = [
    "Ocean view balcony",
    "Rooftop infinity pool",
    "High-speed Wi-Fi (100 Mbps)",
    "Smart TV with Netflix",
    "Full kitchen with appliances",
    "Air conditioning",
    "24/7 security",
    "Elevator access",
    "Parking available",
    "Beach towels provided",
    "Premium bedding",
    "Work desk",
  ];

  // Combined property images for single slideshow
  const propertyImages = [
    "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMG1vZGVybnxlbnwxfHx8fDE3NjMyNjA5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tJTIwc29mYXxlbnwxfHx8fDE3NjMyNjA5MjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1757924330358-a48d65664dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwaW5maW5pdHklMjBwb29sJTIwc3Vuc2V0fGVufDF8fHx8MTc2MzI2MDkyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaG90ZWx8ZW58MXx8fHwxNzYzMjExMjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1729605412082-8265cb323a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcG9vbCUyMG9jZWFuJTIwdmlld3xlbnwxfHx8fDE3NjMyNjA5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758977404510-6ab7e07ff1fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYXBhcnRtZW50JTIwZGluaW5nfGVufDF8fHx8MTc2MzI2MDkyMXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1701568129402-0d4541e3dab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb2Z0b3AlMjBwb29sJTIwbG91bmdlfGVufDF8fHx8MTc2MzI2MDkyMnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1536625737227-92a1fc042e7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZpbml0eSUyMHBvb2wlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NjMyNjA5MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  return (
    <section id="property" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.propertyTitle}
          </h2>
          <p className="text-xl text-[#0E1C3A]/70">{t.propertySubtitle}</p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Single Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="h-[500px] md:h-[600px] overflow-hidden rounded-lg shadow-2xl">
              <ImageSlideshow
                images={propertyImages}
                alt="Solaris Cartagena Stays Property"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 flex"
            >
              <Card className="flex-1">
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="mb-6 text-2xl text-[#0E1C3A]">{t.amenitiesTitle}</h3>
                  <div className="grid sm:grid-cols-2 gap-4 flex-1">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#CFA349]/20 flex items-center justify-center">
                          <Check className="h-4 w-4 text-[#CFA349]" />
                        </div>
                        <span className="text-[#0E1C3A]/80">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Guest Rules & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl text-[#0E1C3A]">{t.guestRulesTitle}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-500" />
                      <span className="text-[#0E1C3A]/80">{t.noSmoking}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X className="h-5 w-5 text-red-500" />
                      <span className="text-[#0E1C3A]/80">{t.noPets}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-[#CFA349]" />
                      <span className="text-[#0E1C3A]/80">{t.minStay}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 text-xl text-[#0E1C3A]">{t.locationBenefits}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#CFA349] mt-0.5" />
                      <span className="text-[#0E1C3A]/80">{t.walkToBeach}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-[#CFA349] mt-0.5" />
                      <span className="text-[#0E1C3A]/80">{t.safeArea}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-[#0E1C3A]/60 mb-2">{t.propertyAddress || "Address"}:</p>
                    <div className="text-[#0E1C3A]">
                      <p>Carrera 3 no 7-74</p>
                      <p>Solaris Cartagena Stays</p>
                      <Badge variant="secondary" className="bg-[#CFA349]/10 text-[#CFA349] mt-2">
                        Bocagrande, Cartagena
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}