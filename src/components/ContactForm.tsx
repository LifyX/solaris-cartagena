import { motion } from "motion/react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface ContactFormProps {
  t: any;
}

export function ContactForm({ t }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl mb-6 text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
              {t.contactUsTitle}
            </h1>
            <p className="text-xl text-[#0E1C3A]/70 max-w-3xl mx-auto">
              {t.contactUsSubtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-2 border-[#CFA349]/20 hover:border-[#CFA349] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-[#CFA349]/10 p-4 rounded-full">
                      <MapPin className="h-8 w-8 text-[#CFA349]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E1C3A] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {t.visitUs}
                  </h3>
                  <div className="text-[#0E1C3A]/70 space-y-1">
                    <p>Carrera 3 no 7-74</p>
                    <p>Solaris Cartagena Stays</p>
                    <p>Bocagrande, Cartagena, Colombia</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-2 border-[#CFA349]/20 hover:border-[#CFA349] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-[#CFA349]/10 p-4 rounded-full">
                      <Mail className="h-8 w-8 text-[#CFA349]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E1C3A] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {t.emailUs}
                  </h3>
                  <p className="text-[#0E1C3A]/70 mb-2">
                    Use the contact form below
                  </p>
                  <p className="text-sm text-[#0E1C3A]/50">
                    {t.responseTime}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full border-2 border-[#CFA349]/20 hover:border-[#CFA349] transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="bg-[#CFA349]/10 p-4 rounded-full">
                      <Phone className="h-8 w-8 text-[#CFA349]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0E1C3A] mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                    {t.callUs}
                  </h3>
                  <p className="text-[#0E1C3A]/70 mb-2">
                    Contact via website form
                  </p>
                  <p className="text-sm text-[#0E1C3A]/50">
                    We're committed to providing exceptional service
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="max-w-3xl mx-auto border-2 border-[#CFA349]/20 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl mb-8 text-[#0E1C3A] text-center" style={{ fontFamily: 'Georgia, serif' }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#0E1C3A] mb-2">
                      {t.name}
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border-[#CFA349]/30 focus:border-[#CFA349] focus:ring-[#CFA349]"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#0E1C3A] mb-2">
                      {t.email}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border-[#CFA349]/30 focus:border-[#CFA349] focus:ring-[#CFA349]"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#0E1C3A] mb-2">
                      {t.phone}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border-[#CFA349]/30 focus:border-[#CFA349] focus:ring-[#CFA349]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#0E1C3A] mb-2">
                      {t.message}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full border-[#CFA349]/30 focus:border-[#CFA349] focus:ring-[#CFA349]"
                      placeholder="Tell us about your stay preferences, questions, or special requests..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A] text-lg py-6"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {t.sendMessage}
                  </Button>
                </form>

                <p className="text-center text-sm text-[#0E1C3A]/60 mt-6">
                  {t.responseTime}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}