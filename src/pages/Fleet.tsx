import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Anchor, Ruler } from 'lucide-react';

const boats = [
  {
    name: 'Naema',
    image: '/hero-boat-pikkewyn.jpg',
    capacity: '1-3 guests',
    length: '28 feet',
    description: 'Perfect for small groups and half-day fishing adventures. Compact yet powerful, Naema offers an intimate fishing experience with easy maneuverability.',
    features: ['Half-day fishing specialist', 'Ideal for beginners', 'Quick to fishing grounds']
  },
  {
    name: 'Pikkewyn',
    image: '/hero-boat-collie.jpg',
    capacity: '3-6 guests',
    length: '35 feet',
    description: 'Our most popular vessel for full-day charters. Pikkewyn offers the perfect balance of comfort, stability, and fishing capability.',
    features: ['Full-day fishing specialist', 'Comfortable cabin', 'Extended range']
  },
  {
    name: 'Collie',
    image: '/hero-boat-overnight.jpg',
    capacity: '7+ guests',
    length: '42 feet',
    description: 'Our flagship vessel for overnight expeditions. Collie is equipped with sleeping quarters and all amenities for extended offshore adventures.',
    features: ['Overnight fishing specialist', 'Sleeping quarters onboard', 'Big game equipped']
  }
];

export default function Fleet() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen ocean-gradient">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-boat-collie.jpg"
            alt="Fishing fleet"
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
              Our Fleet
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Three vessels, each designed for specific fishing experiences. 
              From quick half-day trips to overnight big-game adventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Section */}
      <section ref={contentRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {boats.map((boat, index) => (
            <motion.div
              key={boat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={contentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`relative h-72 lg:h-auto ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-ocean-deep">
                      Boat-{boat.name}
                    </span>
                  </div>
                </div>
                
                <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-2xl font-bold text-ocean-deep mb-4">{boat.name}</h2>
                  
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="flex items-center gap-2 px-3 py-1 bg-ocean-light/50 rounded-full text-sm">
                      <Users className="w-4 h-4 text-ocean-medium" />
                      {boat.capacity}
                    </span>
                    <span className="flex items-center gap-2 px-3 py-1 bg-ocean-light/50 rounded-full text-sm">
                      <Ruler className="w-4 h-4 text-ocean-medium" />
                      {boat.length}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {boat.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-ocean-deep mb-3">Features</h4>
                    <ul className="space-y-2">
                      {boat.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <Anchor className="w-4 h-4 text-ocean-medium" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
