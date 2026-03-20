import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Palmtree, UtensilsCrossed, Hospital, Pill, MapPin, ExternalLink, Music, Landmark, ShoppingBag, Compass } from "lucide-react";

interface MapSectionProps {
  t: any;
}

type Category = 'beaches' | 'restaurants' | 'nightlife' | 'tourist' | 'shopping' | 'hospitals' | 'pharmacies';

export function MapSection({ t }: MapSectionProps) {
  const [activeCategory, setActiveCategory] = useState<Category>('beaches');

  const categories = [
    { id: 'beaches' as Category, icon: Palmtree, label: t.beaches },
    { id: 'restaurants' as Category, icon: UtensilsCrossed, label: t.restaurants },
    { id: 'nightlife' as Category, icon: Music, label: t.nightlife },
    { id: 'tourist' as Category, icon: Landmark, label: t.tourist },
    { id: 'shopping' as Category, icon: ShoppingBag, label: t.shopping },
    { id: 'hospitals' as Category, icon: Hospital, label: t.hospitals },
    { id: 'pharmacies' as Category, icon: Pill, label: t.pharmacies },
  ];

  const locations = {
    beaches: [
      "Playa De Bocagrande",
      "Castillo Grande",
      "Hollywood",
      "El Laguito",
      "Costa del Sol",
      "Cartagena Plaza",
      "Capilla del Mar",
      "Zona de Carpas Palmetto",
    ],
    restaurants: [
      "Di Silvio Trattoria",
      "Restaurante Nami",
      "El Punto Múltiple del Sabor",
      "MORENA Lounge Beach",
      "La Brioche",
      "Colibri Café",
      "Restaurante Árabe Internacional",
    ],
    nightlife: [
      "La Movida",
      "Alquímico",
      "La Jugada Club House",
      "Taboo Disco Club",
      "7Seven Times",
      "Bazurto Social Club",
      "Tu Candela",
      "Café Havana",
    ],
    tourist: [
      "Castillo de San Felipe de Barajas",
      "Puerta del Reloj (Clock Tower Gate)",
      "Las Bóvedas",
      "Palace of the Inquisition",
      "Cartagena Cathedral",
      "Teatro Heredia",
      "Santo Domingo Square",
      "San Pedro Claver Church & Museum",
      "City Walls (Murallas de Cartagena)",
      "Cartagena Botanical Garden",
    ],
    shopping: [
      "Éxito Supermarket",
      "Carulla",
      "Jumbo",
      "Makro",
      "Ara",
      "D1",
      "Olimpica",
      "Centro Comercial Bocagrande",
      "Mall Plaza El Castillo",
      "Paseo de la Castellana",
      "La Serrezuela",
      "Plaza Bocagrande",
      "Las Bóvedas",
      "Mercado de Bazurto",
    ],
    hospitals: [
      "Nuevo Hospital de Bocagrande",
      "Hospital Naval",
      "Medihelp Clinic",
      "Centro Médico Bocagrande",
    ],
    pharmacies: [
      "Farmatodo",
      "Cruz Verde",
      "La Rebaja",
      "ETICOS",
    ],
  };

  // Generate Google Maps URL based on active category
  const getMapUrl = () => {
    // Main property location coordinates (Bocagrande, Cartagena)
    // Carrera 3 #7-74 is approximately at these coordinates
    const lat = 10.3997;
    const lng = -75.5514;
    
    // Build markers for nearby locations
    const categoryMarkers = locations[activeCategory].slice(0, 5).map((location, idx) => {
      const encodedLocation = encodeURIComponent(`${location}, Bocagrande, Cartagena`);
      return encodedLocation;
    }).join('&markers=');
    
    // Create Google Maps embed URL with the property marker and nearby locations
    // The map will show Solaris Cartagena Stays with surrounding points of interest
    const propertyMarker = encodeURIComponent('Carrera 3 no 7-74, Bocagrande, Cartagena, Colombia');
    
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${propertyMarker}&zoom=15&maptype=roadmap`;
  };

  // Get directions URL
  const getDirectionsUrl = () => {
    const address = encodeURIComponent("Carrera 3 no 7-74, Solaris Cartagena Stays, Bocagrande, Cartagena, Colombia");
    return `https://www.google.com/maps/dir/?api=1&destination=${address}`;
  };

  // Open location in Google Maps
  const openLocationInMaps = (location: string) => {
    const origin = encodeURIComponent("Carrera 3 no 7-74, Solaris Cartagena Stays, Bocagrande, Cartagena, Colombia");
    const destination = encodeURIComponent(`${location}, Bocagrande, Cartagena, Colombia`);
    // Open Google Maps with directions from Solaris Cartagena Stays to the selected location
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=walking`, '_blank');
  };

  return (
    <section id="location" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.mapTitle}
          </h2>
          <p className="text-xl text-[#0E1C3A]/70">
            Everything you need within walking distance
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                className={
                  activeCategory === category.id
                    ? "bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
                    : "border-[#0E1C3A]/20 hover:border-[#CFA349]"
                }
              >
                <category.icon className="mr-2 h-5 w-5" />
                {category.label}
              </Button>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Interactive Map */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-[500px] rounded-lg overflow-hidden">
                    {/* Google Maps Embed */}
                    <iframe
                      src={getMapUrl()}
                      width="100%"
                      height="500"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                      title="Solaris Cartagena Stays Location Map"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Location List */}
            <motion.div
              key={`list-${activeCategory}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <CardContent className="p-8">
                  <h3 className="mb-6 text-2xl text-[#0E1C3A]">
                    {categories.find(c => c.id === activeCategory)?.label}
                  </h3>
                  <div className="space-y-3 max-h-[450px] overflow-y-auto">
                    {locations[activeCategory].map((location, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#CFA349]/10 transition-colors cursor-pointer"
                        onClick={() => openLocationInMaps(location)}
                      >
                        <MapPin className="h-5 w-5 text-[#CFA349] flex-shrink-0" />
                        <span className="text-[#0E1C3A]">{location}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Card className="bg-[#0E1C3A]">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl text-[#CFA349] mb-2">2-3 min</p>
                    <p className="text-white/80">Walk to Beach</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#CFA349]">
                  <CardContent className="p-6 text-center">
                    <p className="text-3xl text-[#0E1C3A] mb-2">24/7</p>
                    <p className="text-[#0E1C3A]/80">Safe Area</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tourist Attractions Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-24"
        >
          <Card className="bg-gradient-to-br from-[#0E1C3A] via-[#0E1C3A] to-[#0E1C3A]/90 border-none overflow-hidden relative">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23CFA349' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>

            <CardContent className="p-8 md:p-16 relative">
              <div className="max-w-4xl mx-auto text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#CFA349]/20 border-2 border-[#CFA349]"
                >
                  <Compass className="h-10 w-10 text-[#CFA349]" />
                </motion.div>

                {/* Title */}
                <h3 className="mb-6 text-3xl md:text-4xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
                  {t.exploreCartagenaTitle}
                </h3>

                {/* Description */}
                <p className="mb-8 text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
                  {t.exploreCartagenaDescription}
                </p>

                {/* Highlights Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-[#CFA349]/20"
                  >
                    <Landmark className="h-8 w-8 text-[#CFA349] mx-auto mb-3" />
                    <p className="text-white">{t.historicSites}</p>
                    <p className="text-[#CFA349] mt-1">10+ Sites</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-[#CFA349]/20"
                  >
                    <Palmtree className="h-8 w-8 text-[#CFA349] mx-auto mb-3" />
                    <p className="text-white">{t.beachActivities}</p>
                    <p className="text-[#CFA349] mt-1">8+ Beaches</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-[#CFA349]/20"
                  >
                    <Music className="h-8 w-8 text-[#CFA349] mx-auto mb-3" />
                    <p className="text-white">{t.nightlifeVenues}</p>
                    <p className="text-[#CFA349] mt-1">8+ Clubs</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-[#CFA349]/20"
                  >
                    <UtensilsCrossed className="h-8 w-8 text-[#CFA349] mx-auto mb-3" />
                    <p className="text-white">{t.diningExperiences}</p>
                    <p className="text-[#CFA349] mt-1">7+ Restaurants</p>
                  </motion.div>
                </div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <Link to="/experiences">
                    <Button
                      size="lg"
                      className="bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A] px-8 py-6 text-lg group"
                    >
                      {t.discoverExperiences}
                      <Compass className="ml-2 h-5 w-5 group-hover:rotate-45 transition-transform duration-300" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}