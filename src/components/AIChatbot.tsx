import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { MessageCircle, X, Send, Loader2, User, Bot, Calendar, Coffee, MapPin, Home, DollarSign } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface QuickReply {
  label: string;
  icon: any;
  message: string;
}

interface AIChatbotProps {
  t: any;
}

export function AIChatbot({ t }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickReplies: QuickReply[] = [
    {
      label: t.chatBooking || "Booking Info",
      icon: Calendar,
      message: t.chatBookingQuestion || "What are the booking options and rates?",
    },
    {
      label: t.chatAmenities || "Amenities",
      icon: Home,
      message: t.chatAmenitiesQuestion || "What amenities are included?",
    },
    {
      label: t.chatLocation || "Location",
      icon: MapPin,
      message: t.chatLocationQuestion || "Tell me about the location and nearby attractions",
    },
    {
      label: t.chatCoffee || "Coffee",
      icon: Coffee,
      message: t.chatCoffeeQuestion || "Tell me about the Villa Mariela Gasia coffee",
    },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Send welcome message when chat opens for the first time
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: t.chatWelcome || "Hello! I'm your Edificio Magno Loft virtual assistant. How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length, t.chatWelcome]);

  useEffect(() => {
    // Auto-scroll to bottom when new messages arrive
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        setTimeout(() => {
          scrollElement.scrollTop = scrollElement.scrollHeight;
        }, 100);
      }
    }
  }, [messages, isTyping]);

  useEffect(() => {
    // Focus input when chat opens
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Booking related (English, Spanish, French)
    if (lowerMessage.includes("book") || lowerMessage.includes("reserv") || lowerMessage.includes("rate") || lowerMessage.includes("price") || lowerMessage.includes("cost") ||
        lowerMessage.includes("reserva") || lowerMessage.includes("tarifa") || lowerMessage.includes("precio") || lowerMessage.includes("costo") ||
        lowerMessage.includes("réserv") || lowerMessage.includes("tarif") || lowerMessage.includes("prix") || lowerMessage.includes("coût")) {
      return t.chatBookingResponse || "Our rates start at $150 per night. We offer flexible booking options through Airbnb and Booking.com. You can also contact us directly for special rates on longer stays. Check-in is at 3:00 PM and check-out is at 11:00 AM. Would you like me to help you with anything specific about booking?";
    }

    // Amenities related (English, Spanish, French)
    if (lowerMessage.includes("amenity") || lowerMessage.includes("amenities") || lowerMessage.includes("facilities") || lowerMessage.includes("include") ||
        lowerMessage.includes("comodidad") || lowerMessage.includes("instalacion") || lowerMessage.includes("incluye") ||
        lowerMessage.includes("équipement") || lowerMessage.includes("installation") || lowerMessage.includes("inclus")) {
      return t.chatAmenitiesResponse || "Edificio Magno Loft features: 🏊 Rooftop infinity pool with ocean views, 🏋️ Fully-equipped fitness center, 📶 High-speed WiFi, ❄️ Air conditioning, 🍳 Gourmet kitchen with premium appliances, 🧺 In-unit washer & dryer, 🔒 24/7 security, and complimentary Villa Mariela Gasia Colombian coffee! We also offer luxury add-on services like private chef, spa treatments, and airport transfer.";
    }

    // Location related (English, Spanish, French)
    if (lowerMessage.includes("location") || lowerMessage.includes("where") || lowerMessage.includes("address") || lowerMessage.includes("nearby") || lowerMessage.includes("beach") ||
        lowerMessage.includes("ubicación") || lowerMessage.includes("donde") || lowerMessage.includes("dirección") || lowerMessage.includes("cerca") || lowerMessage.includes("playa") ||
        lowerMessage.includes("emplacement") || lowerMessage.includes("où") || lowerMessage.includes("adresse") || lowerMessage.includes("proximité") || lowerMessage.includes("plage")) {
      return t.chatLocationResponse || "We're located at Carrera 3 no 7-74, Solaris Cartagena Stays, in the prestigious Bocagrande district of Cartagena, Colombia - right on the beachfront! 🏖️ Within walking distance: beautiful beaches (2-3 minutes), world-class restaurants, shopping centers, and nightlife. Just 15 minutes from the historic Old City (Ciudad Amurallada) and 20 minutes from Rafael Núñez International Airport. Perfect location for both relaxation and exploring!";
    }

    // Coffee related (English, Spanish, French)
    if (lowerMessage.includes("coffee") || lowerMessage.includes("gasia") || lowerMessage.includes("mariela") ||
        lowerMessage.includes("café") || lowerMessage.includes("cafe")) {
      return t.chatCoffeeResponse || "Every guest receives complimentary Villa Mariela Gasia coffee - a premium Colombian coffee from the mountains of Tolima! ☕ Our coffee shop offers Light, Medium, and Dark roasts (250g & 500g bags), plus variety packs and monthly subscriptions. It's part of the Gasia family legacy spanning generations. You can order online and we ship worldwide!";
    }

    // Cancellation policy (English, Spanish, French)
    if (lowerMessage.includes("cancel") || lowerMessage.includes("refund") || lowerMessage.includes("policy") ||
        lowerMessage.includes("cancelar") || lowerMessage.includes("reembolso") || lowerMessage.includes("política") || lowerMessage.includes("politica") ||
        lowerMessage.includes("annul") || lowerMessage.includes("remboursement") || lowerMessage.includes("politique")) {
      return t.chatCancellationResponse || "We have a flexible cancellation policy: Free cancellation up to 14 days before check-in for a full refund. Cancellations 7-14 days before: 50% refund. Less than 7 days: no refund but you can rebook within 12 months. We want to make your experience stress-free!";
    }

    // Payment related (English, Spanish, French)
    if (lowerMessage.includes("payment") || lowerMessage.includes("pay") || lowerMessage.includes("credit card") || lowerMessage.includes("deposit") ||
        lowerMessage.includes("pago") || lowerMessage.includes("pagar") || lowerMessage.includes("tarjeta") || lowerMessage.includes("depósito") || lowerMessage.includes("deposito") ||
        lowerMessage.includes("paiement") || lowerMessage.includes("payer") || lowerMessage.includes("carte") || lowerMessage.includes("dépôt")) {
      return t.chatPaymentResponse || "We accept all major credit cards, debit cards, and PayPal through our secure booking platforms (Airbnb, Booking.com). A 30% deposit is required to confirm your reservation, with the balance due 7 days before check-in. All transactions are encrypted and secure. 🔒";
    }

    // Contact/WhatsApp related (English, Spanish, French)
    if (lowerMessage.includes("contact") || lowerMessage.includes("whatsapp") || lowerMessage.includes("phone") || lowerMessage.includes("call") ||
        lowerMessage.includes("contacto") || lowerMessage.includes("teléfono") || lowerMessage.includes("telefono") || lowerMessage.includes("llamar") ||
        lowerMessage.includes("téléphone") || lowerMessage.includes("appeler")) {
      return t.chatContactResponse || "You can reach us through the contact form on our website. We typically respond within 1 hour during business hours (9 AM - 9 PM Colombia time). For immediate assistance, please use the contact page. We're here to help!";
    }

    // Check-in/Check-out (English, Spanish, French)
    if (lowerMessage.includes("check") || lowerMessage.includes("arrival") || lowerMessage.includes("time") ||
        lowerMessage.includes("llegada") || lowerMessage.includes("salida") || lowerMessage.includes("hora") ||
        lowerMessage.includes("arrivée") || lowerMessage.includes("départ") || lowerMessage.includes("heure")) {
      return t.chatCheckInResponse || "Check-in: 3:00 PM onwards. Check-out: 11:00 AM. Early check-in and late check-out may be available upon request (subject to availability). We offer flexible self-check-in with a secure keyless entry system. Airport pickup can be arranged for an additional fee.";
    }

    // Languages (English, Spanish, French)
    if (lowerMessage.includes("language") || lowerMessage.includes("speak") || lowerMessage.includes("english") || lowerMessage.includes("spanish") || lowerMessage.includes("french") ||
        lowerMessage.includes("idioma") || lowerMessage.includes("habla") || lowerMessage.includes("inglés") || lowerMessage.includes("ingles") || lowerMessage.includes("español") || lowerMessage.includes("espanol") || lowerMessage.includes("francés") || lowerMessage.includes("frances") ||
        lowerMessage.includes("langue") || lowerMessage.includes("parle") || lowerMessage.includes("anglais") || lowerMessage.includes("espagnol") || lowerMessage.includes("français")) {
      return t.chatLanguageResponse || "Our team speaks English, Spanish, and French fluently! 🌍 Our website is available in all three languages, and we can assist you in whichever language you're most comfortable with.";
    }

    // Greetings (English, Spanish, French)
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey") || 
        lowerMessage.includes("hola") || 
        lowerMessage.includes("bonjour") || lowerMessage.includes("salut")) {
      return t.chatHelloResponse || "Hello! Welcome to Edificio Magno Loft! 👋 I'm here to help you with any questions about our luxury apartment, booking, amenities, or the Villa Mariela Gasia coffee experience. What would you like to know?";
    }

    // Thank you (English, Spanish, French)
    if (lowerMessage.includes("thank") || lowerMessage.includes("gracias") || lowerMessage.includes("merci")) {
      return t.chatThanksResponse || "You're very welcome! If you have any other questions, feel free to ask. We're excited to host you at Edificio Magno Loft! 🌟";
    }

    // Default response
    return t.chatDefaultResponse || "That's a great question! For detailed information about that topic, I recommend checking our website pages or using our contact form. Our team would be happy to provide you with specific details! Is there anything else I can help you with?";
  };

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputValue.trim();
    if (!messageText) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking and respond
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleQuickReply = (quickReply: QuickReply) => {
    handleSendMessage(quickReply.message);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <Button
              onClick={() => setIsOpen(true)}
              size="lg"
              className="h-16 w-16 rounded-full bg-gradient-to-br from-[#CFA349] to-[#b8923f] hover:from-[#CFA349]/90 hover:to-[#b8923f]/90 text-[#0E1C3A] shadow-2xl"
            >
              <MessageCircle className="h-7 w-7" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border-2 border-[#CFA349]/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0E1C3A] to-[#1a2d54] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#CFA349] flex items-center justify-center">
                  <Bot className="h-6 w-6 text-[#0E1C3A]" />
                </div>
                <div>
                  <h3 className="font-semibold">{t.chatbotName || "Magno Assistant"}</h3>
                  <p className="text-xs text-white/80">{t.chatbotStatus || "Online • Responds instantly"}</p>
                </div>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Messages Area */}
            <ScrollArea ref={scrollAreaRef} className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4 pb-4">{/* Added pb-4 for better spacing at bottom */}
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${message.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.sender === "user" ? "bg-[#CFA349]" : "bg-[#0E1C3A]"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="h-4 w-4 text-[#0E1C3A]" />
                      ) : (
                        <Bot className="h-4 w-4 text-[#CFA349]" />
                      )}
                    </div>
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                        message.sender === "user"
                          ? "bg-[#CFA349] text-[#0E1C3A]"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p
                        className={`text-xs mt-1 ${
                          message.sender === "user" ? "text-[#0E1C3A]/60" : "text-gray-500"
                        }`}
                      >
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-2"
                  >
                    <div className="h-8 w-8 rounded-full bg-[#0E1C3A] flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-[#CFA349]" />
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-2">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="h-2 w-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Quick Replies */}
            {messages.length <= 1 && !isTyping && (
              <div className="px-4 pb-2">
                <p className="text-xs text-gray-500 mb-2">{t.chatQuickReplies || "Quick questions:"}</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      variant="outline"
                      size="sm"
                      className="justify-start text-xs h-auto py-2 border-[#CFA349]/30 hover:border-[#CFA349] hover:bg-[#CFA349]/10"
                    >
                      <reply.icon className="h-3 w-3 mr-1 text-[#CFA349]" />
                      {reply.label}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t border-gray-200">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={t.chatPlaceholder || "Type your message..."}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-[#CFA349] text-sm"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  size="icon"
                  className="rounded-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
                  disabled={!inputValue.trim() || isTyping}
                >
                  {isTyping ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <Send className="h-5 w-5" />
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}