import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Anchor, Fish } from 'lucide-react';

export default function About() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const heroInView = useInView(heroRef, { once: true });
  const contentInView = useInView(contentRef, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Anchor,
      title: 'Experienced Crew',
      description: 'Our skippers and deckhands have decades of combined experience in Cape Town waters.'
    },
    {
      icon: Fish,
      title: 'Prime Locations',
      description: 'Access to the best fishing spots along the Cape Town coastline and offshore waters.'
    },
    {
      icon: Award,
      title: 'Quality Equipment',
      description: 'Top-of-the-line rods, reels, and tackle included with every charter.'
    },
    {
      icon: Users,
      title: 'All Skill Levels',
      description: 'Whether you\'re a beginner or seasoned angler, we tailor the experience to you.'
    }
  ];

  return (
    <div className="min-h-screen ocean-gradient">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/hero-boat-collie.jpg"
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
              About Us
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Coastline Fishing Charters has been providing unforgettable fishing experiences 
              for over 15 years. Built for serious fishing, designed for unforgettable days at sea.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 mb-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-ocean-deep mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Founded in 2009, Coastline Fishing Charters began with a single boat and a passion 
                  for sharing the incredible fishing opportunities that Cape Town's waters have to offer.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Today, we've grown to a fleet of three vessels, each captained by experienced 
                  professionals who know these waters like the back of their hands. From yellowfin tuna 
                  to broadbill swordfish, we've helped thousands of anglers land their dream catch.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you're a first-time fisherman looking for a half-day introduction to offshore 
                  fishing, or a seasoned angler seeking the thrill of an overnight big-game expedition, 
                  we have the perfect package for you.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/package-fullday.jpg"
                  alt="Fishing experience"
                  className="rounded-xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold text-ocean-deep mb-8 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={contentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="w-14 h-14 bg-ocean-light/50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-ocean-medium" />
                  </div>
                  <h3 className="font-semibold text-ocean-deep mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 glass-card rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-ocean-medium mb-2">15+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-ocean-medium mb-2">3</p>
                <p className="text-gray-600">Vessels</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-ocean-medium mb-2">5000+</p>
                <p className="text-gray-600">Happy Anglers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-ocean-medium mb-2">50+</p>
                <p className="text-gray-600">Species Caught</p>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={contentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            © {new Date().getFullYear()} Coastline Fishing Charters. All rights reserved.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
