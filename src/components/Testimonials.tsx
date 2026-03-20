import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface TestimonialsProps {
  t: any;
}

export function Testimonials({ t }: TestimonialsProps) {
  const testimonials = [
    {
      name: "Sarah & Michael Thompson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely stunning apartment with breathtaking ocean views! The rooftop pool was incredible, and the location couldn't be better. Walking to the beach in 2 minutes was a dream. Highly recommend!",
      date: "October 2024",
    },
    {
      name: "Marie Dubois",
      location: "Paris, France",
      rating: 5,
      text: "Une expérience magnifique! The apartment exceeded all expectations. Modern, clean, and the host was incredibly responsive. The complimentary Colombian coffee was a lovely touch. We'll definitely be back!",
      date: "September 2024",
    },
    {
      name: "Carlos & Ana Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "Perfecto para nuestra luna de miel. The romantic package was beautifully arranged. The building is secure, the area is safe, and everything you need is within walking distance. Five stars!",
      date: "August 2024",
    },
    {
      name: "Jennifer Lee",
      location: "Toronto, Canada",
      rating: 5,
      text: "Best Airbnb I've ever stayed at! The apartment is even more beautiful in person. Great WiFi for remote work, comfortable bed, and the kitchen had everything we needed. The host's recommendations for local restaurants were spot on.",
      date: "July 2024",
    },
    {
      name: "Hans & Greta Mueller",
      location: "Berlin, Germany",
      rating: 5,
      text: "Wunderbar! Perfect for families. The apartment was spacious, and the extras they provided for our toddler were so thoughtful. The building's security made us feel very safe. Cartagena is magical!",
      date: "June 2024",
    },
    {
      name: "David Kim",
      location: "Seoul, South Korea",
      rating: 5,
      text: "Luxury at its finest! Every detail was perfect - from the smart TV to the ocean breeze on the balcony. The host arranged airport pickup which made arrival seamless. Can't wait to return!",
      date: "May 2024",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
            {t.testimonialsTitle}
          </h2>
          <p className="text-xl text-[#0E1C3A]/70">
            What our guests say about their stay
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-[#CFA349]/30" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-[#CFA349] text-[#CFA349]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#0E1C3A]/80 mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-[#0E1C3A]">{testimonial.name}</p>
                    <p className="text-sm text-[#0E1C3A]/60">{testimonial.location}</p>
                    <p className="text-sm text-[#0E1C3A]/40 mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          <div className="text-center">
            <p className="text-4xl text-[#CFA349] mb-2">4.98</p>
            <p className="text-[#0E1C3A]/70">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[#CFA349] mb-2">150+</p>
            <p className="text-[#0E1C3A]/70">Happy Guests</p>
          </div>
          <div className="text-center">
            <p className="text-4xl text-[#CFA349] mb-2">100%</p>
            <p className="text-[#0E1C3A]/70">Would Recommend</p>
          </div>
        </motion.div>

        {/* Leave a Review Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#0E1C3A] to-[#1a2d54] rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              {t.reviewCTATitle || "Stayed With Us?"}
            </h3>
            <p className="text-white/80 text-lg mb-8">
              {t.reviewCTASubtitle || "Share your experience and help future guests discover our luxury apartment"}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Google Review */}
              <Button
                onClick={() => window.open('https://www.google.com/search?q=Edificio+Magno+Loft+Cartagena', '_blank')}
                className="bg-white hover:bg-gray-100 text-[#0E1C3A] flex items-center justify-center gap-2"
                size="lg"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                {t.reviewGoogle || "Review on Google"}
              </Button>

              {/* Airbnb Review */}
              <Button
                onClick={() => window.open('https://www.airbnb.com/rooms/YOUR_AIRBNB_LISTING_ID', '_blank')}
                className="bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white flex items-center justify-center gap-2"
                size="lg"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z"/>
                  <path d="M12 5.5c-1.1 0-2 .9-2 2 0 1.4 1.4 3.4 2 4.2.6-.8 2-2.8 2-4.2 0-1.1-.9-2-2-2zm0 4.5c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm4.5 3c-.8 0-1.5.7-1.5 1.5 0 1.7 1.5 3 3 3s3-1.3 3-3c0-.8-.7-1.5-1.5-1.5-.5 0-.9.2-1.2.5-.3-.3-.7-.5-1.2-.5-.3 0-.6.1-.8.3.2-.3.3-.6.3-1 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .4.1.7.3 1-.2-.2-.5-.3-.8-.3-.8 0-1.5.7-1.5 1.5 0 1.7 1.5 3 3 3s3-1.3 3-3c0-.8-.7-1.5-1.5-1.5-.5 0-.9.2-1.2.5-.3-.3-.7-.5-1.2-.5z"/>
                </svg>
                {t.reviewAirbnb || "Review on Airbnb"}
              </Button>

              {/* Booking.com Review */}
              <Button
                onClick={() => window.open('https://www.booking.com/hotel/co/YOUR_BOOKING_PROPERTY.html', '_blank')}
                className="bg-[#003580] hover:bg-[#003580]/90 text-white flex items-center justify-center gap-2"
                size="lg"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm-3 0c0-4.136-3.364-7.5-7.5-7.5S4.5 7.864 4.5 12s3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z"/>
                  <path d="M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm2.5 7.5h-3c-.276 0-.5-.224-.5-.5V9c0-.276.224-.5.5-.5s.5.224.5.5v3.5h2.5c.276 0 .5.224.5.5s-.224.5-.5.5z"/>
                </svg>
                {t.reviewBooking || "Review on Booking.com"}
              </Button>
            </div>

            <p className="text-white/60 text-sm mt-6">
              {t.reviewNote || "Your feedback helps us improve and assists fellow travelers in making informed decisions"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}