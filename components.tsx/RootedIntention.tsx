"use client";
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Scissors, Heart, Users, TreePine, PackageCheck, MapPin } from 'lucide-react';
import type { Variants } from 'framer-motion';

function RootedIntention() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const cards = [
    {
      icon: <Scissors className="w-10 h-10" />,
      title: "HANDCRAFTED\nWITH HEART",
      description: "Each piece is made mindfully with local artisans",
      gradient: "from-rose-400 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50"
    },
    {
      icon: <TreePine className="w-10 h-10" />,
      title: "SUSTAINABLY\nSTYLED",
      description: "Eco-friendly fabrics & packaging — conscious in every step.",
      gradient: "from-emerald-400 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "EMPOWERING\nEVERY BODY",
      description: "No size, height, color, or label rules here — just style for all.",
      gradient: "from-purple-400 to-indigo-500",
      bgGradient: "from-purple-50 to-indigo-50"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "COMMUNITY\nDRIVEN",
      description: "From followers to models — we create with real people",
      gradient: "from-amber-400 to-orange-500",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: <PackageCheck className="w-10 h-10" />,
      title: "LIMITED\nAND LOVED",
      description: "We produce in small, purposeful batches so nothing is wasted.",
      gradient: "from-blue-400 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: <MapPin className="w-10 h-10" />,
      title: "MADE\nIN INDIA",
      description: "Designed in Kolkata, Made with ♥ in India",
      gradient: "from-violet-400 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        damping: 25,
        stiffness: 100
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-32 px-4  relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Grid */}
        <motion.div 
          className="absolute inset-0 opacity-[0.02]"
          style={{ y }}
        >
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </motion.div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
            rotate: [360, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-l from-purple-200/30 to-indigo-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl"
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-20 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "backOut" }}
          className="inline-block mb-6"
        >
          <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
            <Heart className="w-8 h-8 text-white" />
          </div>
        </motion.div>
        
        <motion.h2 
          className="text-5xl md:text-7xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-stone-800 via-stone-600 to-stone-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          ROOTED IN INTENTION
        </motion.h2>
        
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "auto" }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent rounded-full px-12">
            <div className="w-32 h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed"
        >
          Every thread tells a story of conscious creation, sustainable innovation, and boundless inclusion
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              rotateY: 5,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`group relative bg-gradient-to-br ${card.bgGradient} backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/20 overflow-hidden`}
          >
            {/* Card Background Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                variants={iconVariants}
                whileHover="hover"
                className={`mb-8 p-4 rounded-2xl bg-gradient-to-r ${card.gradient} shadow-lg inline-block text-white`}
              >
                {card.icon}
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-2xl font-bold text-stone-800 mb-6 whitespace-pre-line leading-tight group-hover:text-stone-900 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {card.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-stone-600 leading-relaxed group-hover:text-stone-700 transition-colors duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                {card.description}
              </motion.p>

              {/* Decorative Element */}
              <motion.div
                className={`absolute bottom-4 right-4 w-20 h-20 rounded-full bg-gradient-to-r ${card.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Decoration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-20 relative z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-flex items-center space-x-2 text-stone-500 text-sm uppercase tracking-wider"
        >
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-stone-300" />
          <span>Crafted with Purpose</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-stone-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default RootedIntention;
