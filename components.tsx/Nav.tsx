"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, Menu, X, LogIn } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Nav() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { name: 'OUR STORY', href: '/OurStory' },
    { name: 'T-ZEN COLLECTION', href: '/t-zen-collection' },
    { name: 'WILDFLOWER COLLECTION', href: '/wildflower-collection' },
    { name: 'BE OUR MODEL', href: '/be-our-model' },
    { name: 'REVIEWS', href: '/reviews' },
    { name: 'JOIN US', href: '/join-us' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  const handleNavClick = (href: string, name: string) => {
    setActiveItem(name);
    router.push(href);
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo - Only this should move up and fade out on scroll */}
          <motion.div 
            className="flex items-center justify-between h-8 lg:h-10 px-2"
            animate={{ 
              height: isScrolled ? 0 : (windowWidth < 768 ? 32 : 40),
              opacity: isScrolled ? 0 : 1,
              marginBottom: isScrolled ? 0 : (windowWidth < 768 ? 2 : 4)
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex-1">
              
                <Link href='/'>
                <div className="text-2xl lg:text-4xl font-bold tracking-[0.2em] lg:tracking-[0.3em] text-black mt-2">
                  {'PREETIZEN'.split('').map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ y: -100, opacity: 0, rotateX: -90 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      transition={{
                        delay: index * 0.1,
                        duration: 0.6,
                        ease: "easeOut",
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -5, 
                        scale: 1.1,
                        color: "#ec4899",
                        textShadow: "0 5px 15px rgba(236, 72, 153, 0.3)"
                      }}
                      className="inline-block cursor-pointer"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </div>
                </Link>


              
            </div>

            <div className="flex items-center space-x-3">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShoppingBag 
                  className="w-4 h-4 lg:w-5 lg:h-5 text-stone-700 hover:text-black transition-colors duration-300 cursor-pointer" 
                />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-purple-200 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium"
                >
                  0
                </motion.span>
              </motion.div>

              <motion.button
                className="text-stone-700 hover:text-black transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <User className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.button>

              <motion.div 
                className="hidden lg:flex items-center space-x-1 cursor-pointer group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <LogIn className="w-4 h-4 text-stone-600 group-hover:text-black transition-colors duration-300" />
                <Link href='/auth/login' className="text-sm font-medium text-stone-600 group-hover:text-black transition-colors duration-300">Log In</Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden text-stone-700 hover:text-black transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </motion.div>

          {/* Mobile Menu - Repositioned */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed top-8 lg:top-10 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-stone-200/50 z-50 shadow-lg"
              >
                <div className="px-4 py-2 space-y-3">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      onClick={() => {
                        handleNavClick(item.href, item.name);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`block py-2 font-medium text-lg tracking-wide transition-colors duration-300 cursor-pointer ${
                        activeItem === item.name 
                          ? 'text-pink-600 font-bold' 
                          : 'text-stone-700 hover:text-black'
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-6 mt-6 border-t border-stone-200"
                  >
                    <div className="flex items-center space-x-3">
                      <LogIn className="w-5 h-5 text-stone-600" />
                      <Link href='/auth/login' className="text-base font-medium text-stone-600">Log In</Link>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Menu - Always fixed at top */}
          <div className="flex items-center justify-between py-2">
            {/* Navigation Items */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`relative group font-medium tracking-wide transition-colors duration-300 text-lg cursor-pointer ${
                    activeItem === item.name 
                      ? 'text-pink-600 font-bold' 
                      : 'text-black hover:text-black'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400"
                    initial={{ width: 0 }}
                    animate={{ width: activeItem === item.name ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>

           
          </div>
        </div>

        
      </motion.nav>

      {/* Spacer */}
      <div className={`${isScrolled ? 'h-8 lg:h-10' : 'h-16 lg:h-20'} transition-all duration-300`} />
    </>
  );
}

export default Nav;