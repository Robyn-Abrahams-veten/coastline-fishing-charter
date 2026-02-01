import { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Clock, Users, ChevronLeft, ChevronRight, 
  Check, X, MessageCircle, ArrowRight,
  Calendar, MapPin, Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fishingPackages } from '@/data/packages';

export default function Packages() {
  const { packageId } = useParams();
  const [activeTab, setActiveTab] = useState(packageId || 'full-day');
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  useInView(contentRef, { once: true, margin: '-100px' });

  const activePackage = fishingPackages.find(p => p.id === activeTab) || fishingPackages[1];

  const tabOrder = ['half-day', 'full-day', 'overnight'];
  const currentIndex = tabOrder.indexOf(activeTab);

  const handlePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : tabOrder.length - 1;
    setActiveTab(tabOrder[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex < tabOrder.length - 1 ? currentIndex + 1 : 0;
    setActiveTab(tabOrder[newIndex]);
  };

  const getHeroImage = () => {
    switch (activeTab) {
      case 'half-day': return '/hero-boat-pikkewyn.jpg';
      case 'overnight': return '/hero-boat-overnight.jpg';
      default: return '/hero-boat-collie.jpg';
    }
  };

  return (
    <div className="min-h-screen ocean-gradient">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              src={getHeroImage()}
              alt={activePackage.name}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ocean-deep mb-4">
                  {activePackage.name}
                </h1>
                <p className="text-gray-700 mb-6">{activePackage.description}</p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm">
                    <Clock className="w-4 h-4 text-ocean-medium" />
                    {activePackage.duration}
                  </span>
                  <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm">
                    <Users className="w-4 h-4 text-ocean-medium" />
                    {activePackage.guestRange}
                  </span>
                  {activePackage.id === 'full-day' && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm">
                      <Calendar className="w-4 h-4 text-ocean-medium" />
                      Early departure
                    </span>
                  )}
                  {activePackage.id === 'overnight' && (
                    <span className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm">
                      <MapPin className="w-4 h-4 text-ocean-medium" />
                      Afternoon departure
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex gap-2">
              {fishingPackages.map((pkg) => (
                <button
                  key={pkg.id}
                  onClick={() => setActiveTab(pkg.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === pkg.id
                      ? 'bg-ocean-medium text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {pkg.name.toUpperCase()}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Package Details */}
      <section ref={contentRef} className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass-card rounded-3xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={activePackage.image}
                      alt={activePackage.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <h2 className="text-2xl font-bold text-ocean-deep mb-2">
                      {activePackage.description}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      Best balance of time & action:
                    </p>

                    {/* Quick Specs */}
                    <div className="bg-ocean-light/30 rounded-xl p-4 mb-6">
                      <h3 className="font-semibold text-ocean-deep mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Quick Specs
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4 text-ocean-medium" />
                          {activePackage.hours}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-ocean-medium" />
                          {activePackage.id === 'overnight' ? 'Afternoon departure' : 'Early departure'}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 col-span-2">
                          <Users className="w-4 h-4 text-ocean-medium" />
                          {activePackage.guestRange} (Boat-{activePackage.boatName})
                        </div>
                      </div>
                    </div>

                    {/* Included / Not Included */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-ocean-deep mb-2 text-sm">What's Included</h4>
                        <ul className="space-y-1">
                          {activePackage.included.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <Check className="w-3 h-3 text-green-500" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-ocean-deep mb-2 text-sm">Not Included</h4>
                        <ul className="space-y-1">
                          {activePackage.notIncluded.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <X className="w-3 h-3 text-red-400" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Target Species */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-ocean-deep mb-3 flex items-center gap-2">
                        Target Species
                        <ArrowRight className="w-4 h-4" />
                      </h4>
                      <div className="flex gap-4">
                        {activePackage.targetSpecies.map((species) => (
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

                    {/* CTA Button - WhatsApp Only */}
                    <div className="flex flex-col gap-3">
                      <a
                        href={`https://wa.me/27828824594?text=Hi, I'm interested in booking the ${activePackage.name}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700 text-white"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Book via WhatsApp
                        </Button>
                      </a>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-3">
                      Contact us directly on WhatsApp to check availability and secure your booking.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
