import { useState, useRef, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  Calendar, Users, MessageCircle, MapPin, Award, 
  Clock, ChevronLeft, ChevronRight as ChevronRightIcon,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fishingPackages } from '@/data/packages';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const packageId = searchParams.get('package') || 'full-day';
  
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [activePackage, setActivePackage] = useState(packageId);
  
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  const currentPackage = fishingPackages.find(p => p.id === activePackage) || fishingPackages[1];

  useEffect(() => {
    setActivePackage(packageId);
  }, [packageId]);

  const handleWhatsAppBooking = () => {
    const dateStr = selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const message = `Hi, I'm interested in booking the ${currentPackage.name} for ${adults + children} guests on ${dateStr}.`;
    window.open(`https://wa.me/27645297120?text=${encodeURIComponent(message)}`, '_blank');
  };



  const tabOrder = ['half-day', 'full-day', 'overnight'];
  const currentIndex = tabOrder.indexOf(activePackage);

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : tabOrder.length - 1;
    const newPackage = tabOrder[newIndex];
    setActivePackage(newPackage);
    navigate(`/booking?package=${newPackage}`, { replace: true });
  };

  const handleNext = () => {
    const newIndex = currentIndex < tabOrder.length - 1 ? currentIndex + 1 : 0;
    const newPackage = tabOrder[newIndex];
    setActivePackage(newPackage);
    navigate(`/booking?package=${newPackage}`, { replace: true });
  };

  return (
    <div className="min-h-screen ocean-gradient">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-boat-pikkewyn.jpg"
            alt="Fishing charter boat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
              Book Your Fishing Trip
            </h1>
            <p className="text-gray-700 mb-6">
              Choose a package, select your date and group size, and we'll recommend the best boat.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm">
                <MapPin className="w-4 h-4 text-ocean-medium" />
                Hout Bay Harbour
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm">
                <Award className="w-4 h-4 text-ocean-medium" />
                Licensed & Experienced Crew
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={contentRef} className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Date & Guests Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-4 mb-8"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex items-center gap-3 flex-1 w-full">
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-200 flex-1">
                  <Calendar className="w-5 h-5 text-ocean-medium" />
                  <input
                    type="date"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                    className="flex-1 bg-transparent outline-none text-sm"
                  />
                </div>
                
                <div className="flex items-center gap-2 px-4 py-3 bg-white rounded-xl border border-gray-200 flex-1">
                  <Users className="w-5 h-5 text-ocean-medium" />
                  <select
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="flex-1 bg-transparent outline-none text-sm"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>{n} adult{n > 1 ? 's' : ''}</option>
                    ))}
                  </select>
                  <span className="text-gray-400">•</span>
                  <select
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="bg-transparent outline-none text-sm"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} child{ n !== 1 ? 'ren' : ''}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Button 
                onClick={handleWhatsAppBooking}
                className="w-full lg:w-auto bg-green-600 hover:bg-green-700 text-white shadow-lg"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Book via WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Package Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between mb-6"
          >
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {fishingPackages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => {
                    setActivePackage(pkg.id);
                    navigate(`/booking?package=${pkg.id}`, { replace: true });
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activePackage === pkg.id
                      ? 'bg-ocean-medium text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {pkg.name.toUpperCase()}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
          </motion.div>

          {/* Package Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 lg:h-auto">
                <img
                  src={currentPackage.image}
                  alt={currentPackage.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Quick Specs Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <h4 className="font-semibold text-ocean-deep mb-2">Quick Specs</h4>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center gap-2 text-gray-600">
                        <Award className="w-4 h-4 text-ocean-medium" />
                        Offshore deepsea fishing from Hout Bay
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4 text-ocean-medium" />
                        Seasonal tuna, yellowtail & snoek
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <Award className="w-4 h-4 text-ocean-medium" />
                        Quality tackle • bait included
                      </li>
                      <li className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4 text-ocean-medium" />
                        Experienced skipper & deckhand
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-ocean-deep mb-2">
                  {currentPackage.description}
                </h2>
                <p className="text-gray-600 mb-6">
                  Perfect for small groups:
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-ocean-medium" />
                    <span>{currentPackage.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock className="w-5 h-5 text-ocean-medium" />
                    <span>07:00 or 12:00</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Users className="w-5 h-5 text-ocean-medium" />
                    <span>{currentPackage.guestRange} (Boat-{currentPackage.boatName})</span>
                  </div>
                </div>

                {/* Quick Specs Box */}
                <div className="bg-ocean-light/30 rounded-xl p-4 mb-6">
                  <h4 className="font-semibold text-ocean-deep mb-3">Quick Specs</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-ocean-medium" />
                      {currentPackage.hours}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-ocean-medium" />
                      07:00 or 12:00
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-ocean-medium" />
                      07:00 or 12:00
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-ocean-medium" />
                      {currentPackage.guestRange} (Boat-{currentPackage.boatName})
                    </div>
                  </div>
                </div>

                {/* What's Included / Not Included */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-ocean-deep mb-2 text-sm">What's Included</h4>
                    <ul className="space-y-1">
                      {currentPackage.included.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-ocean-deep mb-2 text-sm">Not Included</h4>
                    <ul className="space-y-1">
                      {currentPackage.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-red-400" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Target Species */}
                <div>
                  <h4 className="font-semibold text-ocean-deep mb-3 flex items-center gap-2">
                    Target Species
                    <ChevronRight className="w-4 h-4" />
                  </h4>
                  <div className="flex gap-4">
                    {currentPackage.targetSpecies.map((species) => (
                      <div key={species.id} className="text-center">
                        <div className="w-20 h-16 bg-ocean-light/30 rounded-lg p-2 mb-1">
                          <img
                            src={species.image}
                            alt={species.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-xs text-gray-600">{species.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  to="/packages" 
                  className="inline-flex items-center gap-2 text-ocean-medium hover:text-ocean-deep transition-colors mt-6 text-sm"
                >
                  View all species
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
