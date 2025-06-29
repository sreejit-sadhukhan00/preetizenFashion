"use client";
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import RootedIntention from './RootedIntention';
import { Scissors, Heart, Users, TreePine, PackageCheck, MapPin } from 'lucide-react';
import type { Variants } from 'framer-motion';

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      } 
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut"
      } 
    }
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1.2, 
        ease: "easeOut" 
      } 
    }
  };

  const cards = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "HANDCRAFTED\nWITH HEART",
      description: "Each piece is made mindfully with local artisans"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "SUSTAINABLY\nSTYLED",
      description: "Eco-friendly fabrics & packaging — conscious in every step."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "EMPOWERING\nEVERY BODY",
      description: "No size, height, color, or label rules here — just style for all."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "COMMUNITY\nDRIVEN",
      description: "From followers to models — we create with real people"
    },
    {
      icon: <PackageCheck className="w-8 h-8" />,
      title: "LIMITED\nAND LOVED",
      description: "We produce in small, purposeful batches so nothing is wasted."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "MADE\nIN INDIA",
      description: "Designed in Kolkata, Made with ♥ in India"
    }
  ];

  return (
    <>
      <motion.section 
        ref={sectionRef}
        className="relative min-h-screen py-20 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Simple Pink Background */}
        <div className="absolute inset-0 bg-pink-50" />

        {/* Background decorative element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ 
            opacity: 0.2, 
            scale: 1, 
            rotate: 0,
            y: isInView ? 0 : 20 
          }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-pink-100/30 to-rose-200/20 blur-3xl z-10"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <motion.h2 
                  ref={titleRef}
                  variants={titleVariants}
                  className="text-5xl lg:text-6xl font-light tracking-wider text-stone-800 mb-8 leading-tight"
                >
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    OUR 
                  </motion.span>
                  <motion.span 
                    className="block font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    STORY
                  </motion.span>
                </motion.h2>
                
                <motion.div 
                  ref={textRef}
                  className="space-y-6"
                  variants={itemVariants}
                >
                  <motion.div 
                    className="w-20 h-0.5 bg-gradient-to-r from-pink-300 to-rose-300"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 80 } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                  
                  <motion.p 
                    className="text-lg text-stone-600 leading-relaxed font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <span className="block">NOT JUST CLOTHES.</span>
                    <span className="block">A CAUSE. A CRAFT.</span>
                    <span className="block">A COMMUNITY.</span>
                  </motion.p>
                  
                  
                  
                  <motion.div 
                    className="pt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    <motion.button 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-8 py-4 bg-transparent border-2 border-stone-300 text-stone-700 font-medium tracking-wider uppercase transition-all duration-300 hover:border-pink-300 hover:text-pink-600 overflow-hidden"
                    >
                      <span className="relative z-10">Learn More</span>
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-pink-50 to-rose-50"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div 
              variants={imageVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              ref={imageRef}
              className="relative"
            >
              {/* Image placeholder */}
              <motion.div 
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-stone-100 to-stone-200 rounded-lg shadow-2xl overflow-hidden">
                  <img 
                    src="team2.png" 
                    alt="Our Story" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Decorative elements */}
                <motion.div 
                  className="absolute -top-4 -left-4 w-24 h-24 border-2 border-pink-200 rounded-full opacity-60"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-rose-100 to-pink-100 rounded-full opacity-40 blur-sm"></div>
              </motion.div>

              {/* Floating elements */}
              <motion.div 
                animate={{ 
                  y: [-5, 5, -5],
                  x: [-2, 2, -2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-8 w-6 h-6 bg-pink-300 rounded-full opacity-60"
              />
              <motion.div 
                animate={{ 
                  y: [5, -5, 5],
                  x: [2, -2, 2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/3 -right-4 w-4 h-4 bg-rose-300 rounded-full opacity-50"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

    
    </>
  );
}

