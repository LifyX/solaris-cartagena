import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";

interface ContactUsProps {
  t: any;
}

export function ContactUs({ t }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    const message = t.language === 'es' 
      ? "¡Mensaje enviado! Nos pondremos en contacto contigo en 24 horas."
      : t.language === 'fr'
      ? "Message envoyé ! Nous vous répondrons dans les 24 heures."
      : "Message sent! We'll get back to you within 24 hours.";
    toast.success(message);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.visitUs,
      value: t.addressValue,
      link: "https://maps.google.com/?q=Bocagrande,Cartagena,Colombia",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.contactUsTitle}
          </h2>
          <p className="text-xl text-[#CFA349]">
            {t.contactUsSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-6 text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                {t.contactMethod}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="p-3 bg-[#CFA349]/10 rounded-lg group-hover:bg-[#CFA349]/20 transition-colors">
                      <info.icon className="h-6 w-6 text-[#CFA349]" />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1 text-[#0E1C3A]">
                        {info.title}
                      </h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-[#0E1C3A] p-6 rounded-lg text-white">
              <h4 className="text-xl mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                {t.responseTime}
              </h4>
              <p className="text-gray-300">
                {t.language === 'es' 
                  ? "Estamos comprometidos a brindar un servicio excepcional y respuestas rápidas a todas las consultas."
                  : t.language === 'fr'
                  ? "Nous nous engageons à fournir un service exceptionnel et des réponses rapides à toutes les demandes."
                  : "We're committed to providing exceptional service and quick responses to all inquiries."}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-[#0E1C3A]">
                  {t.name}
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[#0E1C3A]">
                  {t.email}
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-[#0E1C3A]">
                  {t.phone}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-[#0E1C3A]">
                  {t.message}
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
                size="lg"
              >
                <Send className="h-5 w-5 mr-2" />
                {t.sendMessage}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}