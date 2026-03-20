import { useState } from "react";
import { TikTokIcon } from "./TikTokIcon";
import lifyxLogo from "../assets/0b42223d9f55b7c8c03c00d28143a564ebd703f2.png";
import solarisLogo from "../assets/c76beadbf6b72572b306185aa05f3e4ac73c8e54.png";
import { Link } from "react-router";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Instagram, Facebook, MessageCircle, Youtube, MapPin, Shield, CreditCard, RefreshCw } from "lucide-react";

interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);
  
  const handleWhatsApp = () => {
    // WhatsApp functionality disabled - contact info removed
    console.log('WhatsApp contact removed');
  };

  const openPolicy = (policy: string) => {
    setSelectedPolicy(policy);
  };

  const closePolicy = () => {
    setSelectedPolicy(null);
  };

  const getPolicyContent = () => {
    switch (selectedPolicy) {
      case 'cancellation':
        return {
          title: t.cancellationPolicyTitle,
          content: t.cancellationPolicyContent
        };
      case 'payment':
        return {
          title: t.securePaymentTitle,
          content: t.securePaymentContent
        };
      case 'rebooking':
        return {
          title: t.flexibleRebookingTitle,
          content: t.flexibleRebookingContent
        };
      default:
        return { title: '', content: '' };
    }
  };

  const policyData = getPolicyContent();

  return (
    <footer className="bg-[#0E1C3A] text-white py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <img 
                  src={solarisLogo} 
                  alt="Solaris Cartagena Stays" 
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
                <h3 className="text-lg sm:text-xl text-[#CFA349]" style={{ fontFamily: 'Georgia, serif' }}>
                  Solaris Cartagena Stays
                </h3>
              </div>
              <p className="text-sm sm:text-base text-white/70 mb-4">
                Luxury beachfront living in the heart of Bocagrande, Cartagena
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#CFA349] hover:bg-white/10"
                  onClick={() => window.open('https://www.instagram.com/lifyxdigital?igsh=MWY4OXV3dHJzbHhpOQ%3D%3D&utm_source=qr', '_blank')}
                >
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#CFA349] hover:bg-white/10"
                  onClick={() => window.open('https://www.facebook.com/share/1BBWdjH8wc/?mibextid=wwXIfr', '_blank')}
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#CFA349] hover:bg-white/10"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#CFA349] hover:bg-white/10"
                  onClick={() => window.open('https://youtube.com', '_blank')}
                >
                  <Youtube className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-[#CFA349] hover:bg-white/10"
                  onClick={() => window.open('https://tiktok.com', '_blank')}
                >
                  <TikTokIcon className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-lg text-[#CFA349]">{t.contactUs}</h4>
              <div className="space-y-3 text-white/70">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>Carrera 3 no 7-74</p>
                    <p>Solaris Cartagena Stays</p>
                    <p>Bocagrande, Cartagena</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg text-[#CFA349]">Quick Links</h4>
              <div className="space-y-2 text-white/70">
                <Link to="/booking" className="block hover:text-[#CFA349] transition-colors">
                  {t.booking}
                </Link>
                <Link to="/property" className="block hover:text-[#CFA349] transition-colors">
                  {t.property}
                </Link>
                <Link to="/experiences" className="block hover:text-[#CFA349] transition-colors">
                  {t.experiences}
                </Link>
                <Link to="/location" className="block hover:text-[#CFA349] transition-colors">
                  {t.location}
                </Link>
              </div>
            </div>

            {/* Trust & Safety */}
            <div>
              <h4 className="mb-4 text-lg text-[#CFA349]">{t.trustSafety}</h4>
              <div className="space-y-3">
                <div 
                  className="flex items-start gap-2 text-white/70 cursor-pointer hover:text-[#CFA349] transition-colors"
                  onClick={() => openPolicy('cancellation')}
                >
                  <Shield className="h-5 w-5 text-[#CFA349] mt-0.5 flex-shrink-0" />
                  <span>{t.cancellationPolicy}</span>
                </div>
                <div 
                  className="flex items-start gap-2 text-white/70 cursor-pointer hover:text-[#CFA349] transition-colors"
                  onClick={() => openPolicy('payment')}
                >
                  <CreditCard className="h-5 w-5 text-[#CFA349] mt-0.5 flex-shrink-0" />
                  <span>{t.securePayment}</span>
                </div>
                <div 
                  className="flex items-start gap-2 text-white/70 cursor-pointer hover:text-[#CFA349] transition-colors"
                  onClick={() => openPolicy('rebooking')}
                >
                  <RefreshCw className="h-5 w-5 text-[#CFA349] mt-0.5 flex-shrink-0" />
                  <span>{t.flexibleRebooking}</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Float Button */}
          <div className="mb-8 text-center">
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t.messageWhatsApp}
            </Button>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 text-center text-white/60">
            <p>&copy; 2025 Solaris Cartagena Stays. All rights reserved.</p>
            <p className="mt-2">Bocagrande, Cartagena de Indias, Colombia</p>
            <div className="mt-4 text-sm flex items-center justify-center gap-2">
              <span className="text-white/40">Crafted with excellence by</span>
              <img 
                src={lifyxLogo} 
                alt="LifyX Logo" 
                className="h-5 opacity-90 hover:opacity-100 transition-opacity" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Policy Dialog */}
      <Dialog open={selectedPolicy !== null} onOpenChange={closePolicy}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {policyData.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 text-gray-700 whitespace-pre-line leading-relaxed">
            {policyData.content}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
}