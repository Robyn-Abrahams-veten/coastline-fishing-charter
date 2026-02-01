import { useState, useRef } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronLeft, Lock, Shield, Check, CreditCard,
  Calendar, Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { fishingPackages } from '@/data/packages';

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const packageId = searchParams.get('package') || 'full-day';
  const dateParam = searchParams.get('date');
  const adults = Number(searchParams.get('adults')) || 2;
  const children = Number(searchParams.get('children')) || 0;
  
  const [step] = useState(2); // Start at checkout step
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    billingAddress: '',
    country: 'South Africa',
    city: '',
    postalCode: '',
    cardholderName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    agreeTerms: false,
    receiveUpdates: false
  });
  
  const contentRef = useRef(null);
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  const currentPackage = fishingPackages.find(p => p.id === packageId) || fishingPackages[1];
  const tripDate = dateParam ? new Date(dateParam) : new Date();
  
  const subtotal = currentPackage.price || 9500;
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate booking confirmation
    navigate('/confirmation');
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen ocean-gradient py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link 
            to={`/booking?package=${packageId}`}
            className="inline-flex items-center gap-2 text-ocean-medium hover:text-ocean-deep transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Booking
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-ocean-deep mb-3">
            Checkout
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto">
            Complete your booking below. Please review your package and enter your information and payment details to confirm your offshore fishing trip!
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex justify-center gap-4 mb-8"
        >
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            step >= 1 ? 'bg-ocean-medium text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            <span className="text-sm font-medium">1. Booking Details</span>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            step >= 2 ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            <span className="text-sm font-medium">2. Checkout</span>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
            step >= 3 ? 'bg-ocean-medium text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            <span className="text-sm font-medium">3. Confirmation</span>
          </div>
        </motion.div>

        {/* Checkout Form */}
        <motion.div
          ref={contentRef}
          initial={{ opacity: 0, y: 20 }}
          animate={contentInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Left Column - Forms */}
          <div className="lg:col-span-3 space-y-6">
            {/* Billing Details */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-ocean-deep mb-4">Billing Details</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className="mt-1"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="billingAddress">Billing Address</Label>
                  <Input
                    id="billingAddress"
                    value={formData.billingAddress}
                    onChange={(e) => handleInputChange('billingAddress', e.target.value)}
                    className="mt-1"
                    placeholder="Enter your address"
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <select
                    id="country"
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-medium"
                  >
                    <option value="South Africa">South Africa</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="Germany">Germany</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="mt-1"
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input
                      id="postalCode"
                      value={formData.postalCode}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="mt-1"
                      placeholder="Postal code"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-ocean-deep mb-4">Payment Information</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input
                    id="cardholderName"
                    value={formData.cardholderName}
                    onChange={(e) => handleInputChange('cardholderName', e.target.value)}
                    className="mt-1"
                    placeholder="Name on card"
                  />
                </div>
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <div className="relative">
                    <Input
                      id="cardNumber"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="mt-1 pr-24"
                      placeholder="0000 0000 0000 0000"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                      <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center text-white text-[8px] font-bold">VISA</div>
                      <div className="w-8 h-5 bg-red-500 rounded flex items-center justify-center text-white text-[8px] font-bold">MC</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="mt-1"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc">CVC</Label>
                    <div className="relative">
                      <Input
                        id="cvc"
                        value={formData.cvc}
                        onChange={(e) => handleInputChange('cvc', e.target.value)}
                        className="mt-1 pr-10"
                        placeholder="123"
                      />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Lock className="w-4 h-4" />
                  <span>Secure Payment. All transactions are encrypted and processed securely.</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeTerms', checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      I agree to the <Link to="/terms" className="text-ocean-medium hover:underline">Terms & Conditions</Link> and <Link to="/privacy" className="text-ocean-medium hover:underline">Privacy Policy</Link>
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="receiveUpdates"
                      checked={formData.receiveUpdates}
                      onCheckedChange={(checked) => handleInputChange('receiveUpdates', checked as boolean)}
                    />
                    <Label htmlFor="receiveUpdates" className="text-sm">
                      I would like to receive updates and offers via email
                    </Label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-ocean-deep mb-4">Order Summary</h2>
              
              {/* Trip Details */}
              <div className="flex gap-4 mb-6">
                <img
                  src={currentPackage.image}
                  alt={currentPackage.name}
                  className="w-24 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-ocean-deep">{currentPackage.name} Charter</h3>
                  <p className="text-sm text-gray-600">{adults + children} Guests</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(tripDate)}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-3 h-3" />
                    Departure: 06:00
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 mb-4 pb-4 border-b border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Package</span>
                  <span className="text-ocean-deep font-medium">R {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">VAT (15%)</span>
                  <span className="text-ocean-deep font-medium">R {vat.toLocaleString()}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="font-semibold text-ocean-deep">Total</span>
                <span className="text-2xl font-bold text-amber-600">R {total.toLocaleString()}</span>
              </div>

              {/* Secure Payment Info */}
              <div className="bg-ocean-light/30 rounded-xl p-4 mb-6">
                <h4 className="font-semibold text-ocean-deep mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Secure Payments
                </h4>
                <div className="flex gap-3 mb-3">
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <Lock className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                    <Shield className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center text-[8px] font-bold text-gray-600">
                    PCI
                  </div>
                </div>
                <ul className="space-y-1 text-xs text-gray-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    SSL Encrypted
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    Secure Credit Card Payments
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    PCI DSS Compliant
                  </li>
                </ul>
              </div>

              <Button 
                onClick={handleSubmit}
                disabled={!formData.agreeTerms}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white shadow-lg disabled:opacity-50"
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Book Now
              </Button>
              
              <p className="text-center text-xs text-gray-500 mt-3">
                You will be charged R {total.toLocaleString()} ZAR
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
