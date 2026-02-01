import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Calendar, Home, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Confirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if accessed directly without booking
    const hasBooking = sessionStorage.getItem('bookingComplete');
    if (!hasBooking) {
      sessionStorage.setItem('bookingComplete', 'true');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen ocean-gradient flex items-center justify-center py-12 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full"
      >
        <div className="glass-card rounded-3xl p-8 text-center">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, type: 'spring' }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-green-600" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-ocean-deep mb-3">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 mb-6">
              Thank you for choosing Cape Town Offshore Charters. We've sent a confirmation email with all the details of your fishing adventure.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-ocean-light/30 rounded-xl p-4 mb-6"
          >
            <div className="flex items-center justify-center gap-2 text-ocean-deep mb-2">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">What happens next?</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-ocean-medium text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">1</span>
                Check your email for booking confirmation and details
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-ocean-medium text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">2</span>
                Our team will contact you 24 hours before the trip
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-full bg-ocean-medium text-white flex items-center justify-center text-xs flex-shrink-0 mt-0.5">3</span>
                Arrive at Hout Bay Harbour 30 minutes before departure
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link to="/" className="flex-1">
              <Button 
                variant="outline"
                className="w-full border-ocean-medium text-ocean-medium hover:bg-ocean-medium hover:text-white"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <a href="tel:+27828824594" className="flex-1">
              <Button 
                className="w-full bg-ocean-medium hover:bg-ocean-deep text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-xs text-gray-500 mt-6"
          >
            Have questions? Reach out to us at{' '}
            <a href="mailto:info@coastline.capetown" className="text-ocean-medium hover:underline">
              info@coastline.capetown
            </a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
