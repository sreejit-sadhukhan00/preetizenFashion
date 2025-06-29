"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight,  Play,  ArrowRight } from "lucide-react";
import Link from "next/link";
export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isNewsletterVisible, setIsNewsletterVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const heroImages = [
    "/model1.png",
    "/clothing1.png",
    "/clothing2.png",
    "/clothing3.png"
  ];

  const collectionImages = [
    { src: "/cloth1.png", title: "T-Zen Collection" },
    { src: "/cloth2.png", title: "Wildflower Series" },
    { src: "/cloth3.png", title: "Premium Line" },
    { src: "/cloth4.png", title: "Casual Wear" }
  ];



  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup:", { name, email });
    setIsNewsletterVisible(true);
    setTimeout(() => setIsNewsletterVisible(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section - Collage Layout */}
      <motion.section 
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content with Elegant Scroll Animations */}
          <motion.div 
            className="space-y-8 z-20 relative lg:order-1"
            initial={{ x: -100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1
            }}
            transition={{ 
              delay: 0.5, 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            style={{
              transform: `translateY(${scrollY * -0.1}px)`,
              opacity: Math.max(0.3, 1 - scrollY * 0.0008)
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "backOut" }}
              style={{
                transform: `translateY(${scrollY * -0.05}px) scale(${Math.max(0.95, 1 - scrollY * 0.0002)})`
              }}
            >
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  PREETI
                </motion.span>
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600"
                  initial={{ 
                    y: 30, 
                    opacity: 0,
                    scale: 0.8
                  }}
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{ 
                    delay: 1.4, 
                    duration: 0.8,
                    ease: "backOut"
                  }}
                >
                  ZEN
                </motion.span>
                <motion.span
                  className="inline-block"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                >
                  FASHION
                </motion.span>
              </motion.h1>
            </motion.div>
            
            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 font-light leading-relaxed max-w-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              Where mindfulness meets style. Discover sustainable fashion that speaks to your soul and elevates your spirit.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.8 }}
            >
              <motion.button 
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transform transition-all duration-500 flex items-center gap-2 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 25px 50px rgba(236, 72, 153, 0.25)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                <Link href='/auth/sign-up' className="relative z-10">Explore Collections</Link >
                <ChevronRight className="w-5 h-5 relative z-10" />
              </motion.button>
              
              <motion.button 
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-gray-900 hover:text-gray-900 transition-all duration-300 flex items-center gap-2 relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <Link href='/OurStory'>Our Story</Link>
              </motion.button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.8 }}
            >
              {[
                { number: "10K+", label: "Customers" },
                { number: "500+", label: "Designs" },
                { number: "15+", label: "Countries" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2.8 + index * 0.1, duration: 0.6 }}
                >
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image Collage with Elegant Scroll Animations */}
          <motion.div 
            className="relative h-[600px] lg:h-[700px] lg:order-2"
            initial={{ x: 100, opacity: 0 }}
            animate={{ 
              x: 0, 
              opacity: 1
            }}
            transition={{ 
              delay: 0.8, 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94] 
            }}
            style={{
              transform: `translateY(${scrollY * 0.05}px) scale(${Math.max(0.98, 1 - scrollY * 0.0001)})`,
              opacity: Math.max(0.4, 1 - scrollY * 0.0006)
            }}
          >
            {/* Large Main Image with Enhanced Hover Effects */}
            <motion.div 
              className="absolute top-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-2xl cursor-pointer"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "backOut" }}
              whileHover={{ 
                scale: 1.08, 
                rotate: 2,
                zIndex: 50,
                transition: { duration: 0.4, ease: "backOut" }
              }}
              style={{
                transform: `translateY(${scrollY * -0.03}px) rotate(${scrollY * 0.01}deg)`
              }}
            >
              <motion.div
                className="w-full h-full relative overflow-hidden"
                whileHover={{
                  filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/model1.png"
                  alt="Fashion Model"
                  fill
                  className="object-cover transition-transform duration-700"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/20 to-purple-900/30"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Shimmer effect on hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  whileHover={{
                    translateX: "200%",
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Top Right Image with Bounce Effect */}
            <motion.div 
              className="absolute top-0 right-0 w-2/5 h-2/5 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              initial={{ scale: 0.8, opacity: 0, rotate: 5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "backOut" }}
              whileHover={{ 
                scale: 1.12, 
                rotate: -5,
                y: -10,
                zIndex: 50,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              style={{
                transform: `translateY(${scrollY * 0.02}px) rotate(${scrollY * -0.005}deg)`
              }}
            >
              <motion.div
                className="w-full h-full relative"
                whileHover={{
                  filter: "brightness(1.15) saturate(1.3)",
                }}
              >
                <Image
                  src="/clothing1.png"
                  alt="Fashion Collection"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Bottom Left Small Image with Spin Effect */}
            <motion.div 
              className="absolute bottom-1/3 left-0 w-1/3 h-1/3 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 1.6, duration: 0.8, ease: "backOut" }}
              whileHover={{ 
                scale: 1.2, 
                rotate: 15,
                zIndex: 50,
                transition: { duration: 0.5, type: "spring", stiffness: 200 }
              }}
              style={{
                transform: `translateY(${scrollY * -0.02}px) rotate(${scrollY * 0.008}deg)`
              }}
            >
              <motion.div
                className="w-full h-full relative"
                whileHover={{
                  filter: "brightness(1.2) contrast(1.2)",
                }}
              >
                <Image
                  src="/cloth1.png"
                  alt="Fashion Item"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-400/30 to-pink-600/30"
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Bottom Right Medium Image with Tilt Effect */}
            <motion.div 
              className="absolute bottom-0 right-0 w-3/5 h-2/5 rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              initial={{ scale: 0.8, opacity: 0, rotate: 3 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: "backOut" }}
              whileHover={{ 
                scale: 1.06, 
                rotate: -3,
                rotateX: 10,
                zIndex: 50,
                transition: { duration: 0.4, ease: "backOut" }
              }}
              style={{
                transform: `translateY(${scrollY * 0.03}px) rotate(${scrollY * -0.006}deg)`
              }}
            >
              <motion.div
                className="w-full h-full relative"
                whileHover={{
                  filter: "brightness(1.1) saturate(1.2)",
                }}
              >
                <Image
                  src="/clothing2.png"
                  alt="Fashion Style"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-purple-500/25 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Small Accent Image with Pulse Effect */}
            <motion.div 
              className="absolute top-1/2 right-1/4 w-1/4 h-1/4 rounded-xl overflow-hidden shadow-lg z-10 cursor-pointer"
              initial={{ scale: 0.8, opacity: 0, rotate: 15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 2, duration: 0.8, ease: "backOut" }}
              whileHover={{ 
                scale: 1.25, 
                rotate: -20,
                zIndex: 60,
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
              style={{
                transform: `translateY(${scrollY * -0.04}px) rotate(${scrollY * 0.01}deg) scale(${Math.max(0.9, 1 - scrollY * 0.0003)})`
              }}
            >
              <motion.div
                className="w-full h-full relative"
                whileHover={{
                  filter: "brightness(1.25) saturate(1.4)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(236, 72, 153, 0)",
                    "0 0 0 10px rgba(236, 72, 153, 0.1)",
                    "0 0 0 0 rgba(236, 72, 153, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Image
                  src="/cloth2.png"
                  alt="Fashion Detail"
                  fill
                  className="object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-400/40 to-purple-600/40"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-30"
              animate={{
                y: [10, -10, 10],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div 
            className="flex flex-col items-center cursor-pointer group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center relative mb-2 group-hover:border-gray-600 transition-colors duration-300"
            >
              <motion.div 
                className="w-1 h-3 bg-gray-500 rounded-full mt-2"
                animate={{
                  y: [0, 12, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
            <motion.span 
              className="text-xs font-light tracking-wider text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 1 }}
            >
              SCROLL
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Collections */}
      <motion.section 
        className="py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Featured Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Curated pieces that blend contemporary design with timeless elegance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collectionImages.map((item, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-sm opacity-90">Explore Now</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-pink-50 to-purple-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10K+", label: "Happy Customers", icon: "👥" },
              { number: "500+", label: "Unique Designs", icon: "✨" },
              { number: "15+", label: "Countries Served", icon: "🌍" },
              { number: "5★", label: "Average Rating", icon: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Signup */}
      <motion.section 
        className="py-20 px-6"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Join the Zen Fashion Community
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Be the first to discover new collections, exclusive offers, and mindful fashion tips
              </p>
              
              <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-6 py-4 rounded-full text-white placeholder-white focus:outline-none focus:ring-4 focus:ring-white/30"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-6 py-4 rounded-full text-gray-900 placeholder-white focus:outline-none focus:ring-4 focus:ring-white/30"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </form>
              
              <AnimatePresence>
                {isNewsletterVisible && (
                  <motion.div
                    className="mt-6 p-4 bg-green-500 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <p className="font-semibold">🎉 Welcome to the community! Check your email for exclusive offers.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="py-20 px-6 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Discover mindful fashion that aligns with your values and elevates your style
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Shop Collections
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn Our Story
            </button>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
           