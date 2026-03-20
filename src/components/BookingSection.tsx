import { useState } from "react";
import { motion } from "motion/react";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink, AlertCircle } from "lucide-react";
import { DateRange } from "react-day-picker@8.10.1";

interface BookingSectionProps {
  t: any;
}

export function BookingSection({ t }: BookingSectionProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [dateError, setDateError] = useState<string>("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    message: "",
  });
  
  // Premium pricing per night in USD
  const pricePerNight = 250;

  const handleDateRangeChange = (range: DateRange | undefined) => {
    if (range?.from && range?.to) {
      // Calculate the number of days
      const diffTime = Math.abs(range.to.getTime() - range.from.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      // Check if the range exceeds 4 days
      if (diffDays > 4) {
        setDateError("Maximum stay is 4 nights. Please select a shorter date range.");
        return;
      } else {
        setDateError("");
      }
    }
    setDateRange(range);
  };

  // Calculate total nights and price
  const calculateBookingDetails = () => {
    if (!dateRange?.from || !dateRange?.to) return null;
    
    const nights = Math.ceil(
      Math.abs(dateRange.to.getTime() - dateRange.from.getTime()) /
        (1000 * 60 * 60 * 24)
    );
    const totalPrice = nights * pricePerNight;
    
    return { nights, totalPrice };
  };
  
  const bookingDetails = calculateBookingDetails();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!dateRange?.from || !dateRange?.to) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    
    if (dateError) {
      alert("Please fix the date range error before submitting.");
      return;
    }
    
    // Handle form submission
    setFormSubmitted(true);
    alert("Booking inquiry sent! We'll contact you shortly.");
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-br from-[#0E1C3A] to-[#1a2f4f]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-4xl md:text-5xl text-white" style={{ fontFamily: 'Georgia, serif' }}>
            {t.bookingTitle}
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle>{t.selectDates}</CardTitle>
                <CardDescription>
                  Choose your check-in and check-out dates (Maximum 4 nights)
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Calendar
                  mode="range"
                  selected={dateRange}
                  onSelect={handleDateRangeChange}
                  className="rounded-md"
                  numberOfMonths={1}
                  disabled={(date) => date < new Date()}
                />
                
                {/* Date Range Info */}
                {dateRange?.from && dateRange?.to && bookingDetails && (
                  <div className="mt-4 w-full space-y-3">
                    {/* Dates Card */}
                    <div className="p-3 bg-[#CFA349]/10 rounded-lg border border-[#CFA349]/30">
                      <p className="text-sm text-[#0E1C3A]">
                        <span className="font-semibold">Check-in:</span>{" "}
                        {dateRange.from.toLocaleDateString()}
                      </p>
                      <p className="text-sm text-[#0E1C3A]">
                        <span className="font-semibold">Check-out:</span>{" "}
                        {dateRange.to.toLocaleDateString()}
                      </p>
                      <p className="text-sm text-[#0E1C3A] mt-1">
                        <span className="font-semibold">Nights:</span>{" "}
                        {bookingDetails.nights}
                      </p>
                    </div>
                    
                    {/* Price Breakdown Card */}
                    <div className="p-4 bg-[#0E1C3A] text-white rounded-lg border-2 border-[#CFA349]">
                      <h3 className="text-sm font-semibold mb-3 text-[#CFA349]">Price Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-white/80">
                            ${pricePerNight.toLocaleString()} × {bookingDetails.nights} night{bookingDetails.nights > 1 ? 's' : ''}
                          </span>
                          <span className="font-semibold">${bookingDetails.totalPrice.toLocaleString()}</span>
                        </div>
                        <div className="pt-2 border-t border-[#CFA349]/30">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-[#CFA349]">Total</span>
                            <span className="text-xl font-semibold text-[#CFA349]">
                              ${bookingDetails.totalPrice.toLocaleString()} USD
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-white/60 mt-3">
                        * Prices are subject to availability and may vary
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Error Message */}
                {dateError && (
                  <div className="mt-4 w-full p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">{dateError}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* External Booking Links */}
            <div className="mt-6 space-y-4">
              <Button
                className="w-full bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white"
                size="lg"
                onClick={() => window.open('https://airbnb.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                {t.bookViaAirbnb}
              </Button>
              <Button
                className="w-full bg-[#003580] hover:bg-[#003580]/90 text-white"
                size="lg"
                onClick={() => window.open('https://booking.com', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                {t.bookViaBooking}
              </Button>
            </div>
          </motion.div>

          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-white/95 backdrop-blur">
              <CardHeader>
                <CardTitle>Direct Inquiry</CardTitle>
                <CardDescription>Send us a message and we'll respond within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">{t.name}</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">{t.guests}</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="6"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">{t.specialRequests}</Label>
                    <Textarea
                      id="message"
                      placeholder="Any special requests or questions..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]" size="lg">
                    {t.sendInquiry}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}