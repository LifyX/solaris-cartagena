import { useState } from "react";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Testimonials } from "../components/Testimonials";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { ExternalLink, Video, Image as ImageIcon, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface HomePageProps {
  t: any;
  onBookNow: () => void;
}

export function HomePage({ t, onBookNow }: HomePageProps) {
  const [showVirtualTour, setShowVirtualTour] = useState(false);

  const handleVirtualTour = () => {
    setShowVirtualTour(true);
  };

  const handleWhatsAppTour = () => {
    // Contact functionality disabled - personal info removed
    toast.info("Contact Form Available", {
      description: "Please use our contact page to schedule a virtual tour.",
      duration: 3000,
    });
  };

  const handleContactUs = () => {
    // Contact functionality disabled - personal info removed
    toast.info("Contact Form Available", {
      description: "Please use our contact page to get in touch with us.",
      duration: 3000,
    });
  };

  return (
    <>
      <Hero t={t} onBookNow={onBookNow} />
      <Features t={t} onVirtualTour={handleVirtualTour} />
      <Testimonials t={t} />

      {/* Virtual Tour Dialog */}
      <Dialog open={showVirtualTour} onOpenChange={setShowVirtualTour}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.virtualTourTitle || "Virtual Tour - Edificio Magno Loft"}
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              {t.virtualTourDescription || "Explore the property in detail with our virtual tour."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* Property Images Gallery */}
            <div className="space-y-4">
              <h3 className="text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                <ImageIcon className="inline-block mr-2 h-5 w-5 text-[#CFA349]" />
                {t.propertyGallery || "Property Gallery"}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnR8ZW58MXx8fHwxNzYyODk5NTIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Living Room"
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBiZWRyb29tfGVufDF8fHx8MTc2Mjg5OTUyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bedroom"
                  className="w-full h-60 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBraXRjaGVufGVufDF8fHx8MTc2Mjg5OTUyMXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Kitchen"
                  className="w-full h-60 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcG9vbHxlbnwxfHx8fDE3NjI4OTk1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Rooftop Pool"
                  className="w-full h-60 object-cover rounded-lg"
                />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbXxlbnwxfHx8fDE3NjI4OTk1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Bathroom"
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Video Tour Section */}
            <div className="space-y-4">
              <h3 className="text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                <Video className="inline-block mr-2 h-5 w-5 text-[#CFA349]" />
                {t.videoTour || "Video Tour"}
              </h3>
              
              {/* Placeholder for YouTube embed - Replace with actual video URL */}
              <div className="bg-gradient-to-br from-[#0E1C3A] to-[#1a2d54] rounded-lg p-12 text-center">
                <Video className="h-16 w-16 text-[#CFA349] mx-auto mb-4" />
                <p className="text-white mb-6">
                  {t.videoTourPlaceholder || "Video tour coming soon! For now, request a live video tour via WhatsApp."}
                </p>
                <Button
                  onClick={handleWhatsAppTour}
                  className="bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.requestLiveTour || "Request Live Video Tour"}
                </Button>
              </div>

              {/* Uncomment and replace URL when you have an actual video */}
              {/* 
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Edificio Magno Loft Virtual Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              */}
            </div>

            {/* 360° View Section */}
            <div className="space-y-4">
              <h3 className="text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                <ExternalLink className="inline-block mr-2 h-5 w-5 text-[#CFA349]" />
                {t.view360 || "360° Interactive View"}
              </h3>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 text-center">
                <p className="text-[#0E1C3A] mb-4">
                  {t.view360Desc || "Experience our property in immersive 360° view"}
                </p>
                <Button
                  onClick={() => window.open('/property', '_blank')}
                  variant="outline"
                  className="border-[#CFA349] text-[#CFA349] hover:bg-[#CFA349] hover:text-[#0E1C3A]"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t.exploreProperty || "Explore Property Details"}
                </Button>
              </div>

              {/* Uncomment when you have a Matterport or similar 360 tour */}
              {/*
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src="YOUR_MATTERPORT_OR_360_TOUR_URL"
                  title="360° Virtual Tour"
                  allowFullScreen
                ></iframe>
              </div>
              */}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => {
                  setShowVirtualTour(false);
                  onBookNow();
                }}
                size="lg"
                className="flex-1 bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
              >
                {t.bookNow || "Book Now"}
              </Button>
              <Button
                onClick={handleContactUs}
                size="lg"
                variant="outline"
                className="flex-1 border-[#0E1C3A] text-[#0E1C3A] hover:bg-[#0E1C3A] hover:text-white"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {t.contactUs || "Contact Us"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}