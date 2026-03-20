import { useState } from "react";
import { motion } from "motion/react";
import { useCart } from "../context/CartContext";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { 
  CreditCard, 
  Lock, 
  Package, 
  MapPin, 
  Mail, 
  Phone, 
  User,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router";

interface CheckoutPageProps {
  t: any;
}

export function CheckoutPage({ t }: CheckoutPageProps) {
  const { items, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    notes: "",
  });

  const subtotal = totalPrice;
  const shipping = subtotal > 50 ? 0 : 5;
  const total = subtotal + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
    }, 2000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-2 border-green-500/20 shadow-2xl">
              <CardContent className="p-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-green-500/10 p-6 rounded-full">
                    <CheckCircle2 className="h-20 w-20 text-green-500" />
                  </div>
                </div>
                
                <h1 className="text-4xl md:text-5xl mb-6 text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                  Order Confirmed!
                </h1>
                
                <p className="text-xl text-gray-600 mb-4">
                  Thank you for your order, {formData.firstName}!
                </p>
                
                <p className="text-lg text-gray-500 mb-8">
                  Your order has been successfully received and is being prepared. We'll send a confirmation email to <strong>{formData.email}</strong> with your order details and tracking information.
                </p>
                
                <div className="bg-amber-50 border-2 border-[#CFA349]/20 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-[#0E1C3A] mb-3">
                    What's Next?
                  </h3>
                  <ul className="text-left space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>You'll receive an order confirmation email shortly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Your coffee will be freshly roasted to order</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Shipping typically takes 5-7 business days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>We'll send you tracking information once shipped</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <Link to="/coffee-shop">
                    <Button
                      size="lg"
                      className="w-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A]"
                    >
                      Continue Shopping
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full border-2 border-[#0E1C3A] text-[#0E1C3A] hover:bg-[#0E1C3A] hover:text-white"
                    >
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl mb-8 text-[#0E1C3A] text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Secure Checkout
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Forms */}
              <div className="lg:col-span-2 space-y-6">
                {/* Contact Information */}
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-[#CFA349]/10 p-2 rounded-lg">
                        <User className="h-6 w-6 text-[#CFA349]" />
                      </div>
                      <h2 className="text-2xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                        Contact Information
                      </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                          className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                          className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+1 (555) 123-4567"
                          className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Shipping Address */}
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-[#CFA349]/10 p-2 rounded-lg">
                        <MapPin className="h-6 w-6 text-[#CFA349]" />
                      </div>
                      <h2 className="text-2xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                        Shipping Address
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                          Street Address *
                        </label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          placeholder="123 Main Street"
                          className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                            City *
                          </label>
                          <Input
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            placeholder="New York"
                            className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                          />
                        </div>

                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                            State / Province *
                          </label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            placeholder="NY"
                            className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-2">
                            ZIP / Postal Code *
                          </label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                            placeholder="10001"
                            className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                          />
                        </div>

                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                            Country *
                          </label>
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            placeholder="United States"
                            className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="bg-[#CFA349]/10 p-2 rounded-lg">
                        <CreditCard className="h-6 w-6 text-[#CFA349]" />
                      </div>
                      <h2 className="text-2xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                        Payment Method
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <Input
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          required
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                        />
                      </div>

                      <div>
                        <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">
                          Name on Card *
                        </label>
                        <Input
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <Input
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            required
                            placeholder="MM/YY"
                            maxLength={5}
                            className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                          />
                        </div>

                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <Input
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                            placeholder="123"
                            maxLength={4}
                            className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
                      <Lock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-blue-900">Secure Payment</p>
                        <p className="text-sm text-blue-700">
                          Your payment information is encrypted and secure. We never store your card details.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Order Notes */}
                <Card className="border-2 border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Package className="h-6 w-6 text-[#CFA349]" />
                      <h2 className="text-xl text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                        Order Notes (Optional)
                      </h2>
                    </div>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Any special instructions or gift message..."
                      rows={4}
                      className="border-gray-300 focus:border-[#CFA349] focus:ring-[#CFA349]"
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="border-2 border-[#CFA349]/20 shadow-lg">
                    <CardContent className="p-6">
                      <h2 className="text-2xl mb-6 text-[#0E1C3A]" style={{ fontFamily: 'Georgia, serif' }}>
                        Order Summary
                      </h2>

                      <div className="space-y-4 mb-6">
                        {items.map((item) => (
                          <div key={item.id} className="flex gap-3 pb-4 border-b border-gray-200">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium text-[#0E1C3A] text-sm">{item.name}</h3>
                              <p className="text-sm text-gray-500">{item.roast}</p>
                              <p className="text-sm text-gray-500">{item.weight}</p>
                              <p className="text-sm text-[#0E1C3A] font-semibold">
                                Qty: {item.quantity} × ${item.price.toFixed(2)}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="space-y-3 py-4 border-y border-gray-200">
                        <div className="flex justify-between text-gray-600">
                          <span>Subtotal</span>
                          <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                          <span>Shipping</span>
                          <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                        </div>
                        {shipping > 0 && (
                          <p className="text-xs text-amber-600">
                            Spend ${(50 - subtotal).toFixed(2)} more for free shipping!
                          </p>
                        )}
                      </div>

                      <div className="flex justify-between text-lg font-semibold text-[#0E1C3A] mt-4 mb-6">
                        <span>Total</span>
                        <span>${total.toFixed(2)} USD</span>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#CFA349] hover:bg-[#CFA349]/90 text-[#0E1C3A] text-lg py-6"
                      >
                        <Lock className="mr-2 h-5 w-5" />
                        Place Order
                      </Button>

                      <div className="mt-6 space-y-2 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Secure checkout</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>Freshly roasted to order</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>We ship worldwide</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}