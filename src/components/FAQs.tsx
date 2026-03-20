import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQsProps {
  t: any;
}

export function FAQs({ t }: FAQsProps) {
  const faqs = [
    {
      question: t.faqCheckIn,
      answer: t.faqCheckInAnswer,
    },
    {
      question: t.faqCancellation,
      answer: t.faqCancellationAnswer,
    },
    {
      question: t.faqAirport,
      answer: t.faqAirportAnswer,
    },
    {
      question: t.faqAmenities,
      answer: t.faqAmenitiesAnswer,
    },
    {
      question: t.faqParking,
      answer: t.faqParkingAnswer,
    },
    {
      question: t.faqPets,
      answer: t.faqPetsAnswer,
    },
    {
      question: t.faqMinStay,
      answer: t.faqMinStayAnswer,
    },
    {
      question: t.faqSafety,
      answer: t.faqSafetyAnswer,
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
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
            {t.faqTitle}
          </h2>
          <p className="text-xl text-[#CFA349]">
            {t.faqSubtitle}
          </p>
        </motion.div>

        {/* FAQs Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 border-gray-200 rounded-lg px-6 hover:border-[#CFA349] transition-colors"
              >
                <AccordionTrigger className="text-left text-lg text-[#0E1C3A] hover:text-[#CFA349] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}