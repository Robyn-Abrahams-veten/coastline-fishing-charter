import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Clock, Fish, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { fishingPackages, fishSpecies } from '@/data/packages';

function PackageCard({ pkg, index }: { pkg: typeof fishingPackages[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-ocean-deep">
            {pkg.name.toUpperCase()}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-ocean-deep mb-2">{pkg.name}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {pkg.hours}
          </span>
        </div>
        
        <ul className="space-y-2 mb-6">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <Fish className="w-4 h-4 mt-0.5 text-ocean-medium flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        
        <Link to={`/packages/${pkg.id}`}>
          <Button 
            variant="outline" 
            className="w-full border-ocean-medium text-ocean-medium hover:bg-ocean-medium hover:text-white transition-colors"
          >
            View Trip Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}

function FishSpeciesCard({ species, index }: { species: typeof fishSpecies[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col items-center"
    >
      <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-xl bg-gradient-to-b from-ocean-light/50 to-white p-4">
        <img
          src={species.image}
          alt={species.name}
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h4 className="text-sm font-semibold text-ocean-deep text-center">{species.name}</h4>
      <span className="text-xs text-gray-500">{species.location}</span>
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const packagesRef = useRef(null);
  const speciesRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const packagesInView = useInView(packagesRef, { once: true, margin: '-100px' });
  const speciesInView = useInView(speciesRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen ocean-gradient">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero-boat-collie.jpg"
            alt="Fishing charter boat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-ocean-deep mb-6 leading-tight">
              Coastline<br />Fishing Charters
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Built for serious fishing. Designed for unforgettable days at sea.
            </p>
            <Link to="/packages">
              <Button 
                size="lg"
                className="bg-ocean-medium hover:bg-ocean-deep text-white shadow-lg group"
              >
                Explore Charters
                <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Wave Decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="hsl(200 40% 97%)"
              d="M0,64 C480,150 960,-20 1440,64 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </section>

      {/* Packages Section */}
      <section ref={packagesRef} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={packagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-deep mb-4">
              Choose Your Fishing Adventure
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Designed for different timeframes, all built for serious offshore fishing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fishingPackages.map((pkg, index) => (
              <PackageCard key={pkg.id} pkg={pkg} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Fish Species Section */}
      <section ref={speciesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={speciesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-deep mb-4">
              Fishing in Cape Town
            </h2>
            <p className="text-gray-600">
              Explore the top catches in our abundant waters
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {fishSpecies.slice(0, 4).map((species, index) => (
              <FishSpeciesCard key={species.id} species={species} index={index} />
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={speciesInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center"
            >
              <Link 
                to="/packages" 
                className="flex items-center gap-2 text-ocean-medium hover:text-ocean-deep transition-colors font-medium"
              >
                +3 More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-ocean-deep mb-4">
              Ready to Book Your Adventure?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Contact us today to reserve your spot on one of our premium fishing charters. 
              Spots fill up quickly during peak season!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button 
                  size="lg"
                  className="bg-ocean-medium hover:bg-ocean-deep text-white shadow-lg"
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/packages">
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-ocean-medium text-ocean-medium hover:bg-ocean-medium hover:text-white"
                >
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
