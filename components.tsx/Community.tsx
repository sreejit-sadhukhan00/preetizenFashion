"use client";
import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

function Community() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageInView = useInView(imageRef, { once: true, margin: "-20%" });
  const textInView = useInView(textRef, { once: true, margin: "-20%" });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="py-24 px-4 relative overflow-hidden"
      style={{
        backgroundColor: '#f7f3ed',
        backgroundImage: `
          repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(139, 69, 19, 0.02) 1px, rgba(139, 69, 19, 0.02) 2px),
          repeating-linear-gradient(-45deg, transparent, transparent 1px, rgba(160, 82, 45, 0.015) 1px, rgba(160, 82, 45, 0.015) 2px)
        `,
        backgroundSize: '20px 20px, 25px 25px'
      }}
    >

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Image Section */}
          <motion.div
            ref={imageRef}
            initial={{ x: -100, opacity: 0 }}
            animate={imageInView ? { 
              x: 0, 
              opacity: 1
            } : { 
              x: -100, 
              opacity: 0
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut"
            }}
            className="relative"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative overflow-hidden rounded-2xl shadow-lg"
            >
              <motion.div
                className="relative aspect-[4/3] overflow-hidden"
              >
                <Image
                  src="/team.png"
                  alt="Preetizen Community Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* All Text Content Side by Side */}
          <motion.div
            ref={textRef}
            initial={{ x: 100, opacity: 0 }}
            animate={textInView ? { 
              x: 0, 
              opacity: 1
            } : { 
              x: 100, 
              opacity: 0
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.3
            }}
            className="space-y-12"
          >
            {/* First Section: Community */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={textInView ? { 
                  opacity: 1, 
                  y: 0 
                } : { 
                  opacity: 0, 
                  y: 30 
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.5
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-black leading-tight mb-4 text-black tracking-tight"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              >
                NOT JUST A BRAND,<br />
                A COMMUNITY
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { 
                  opacity: 1, 
                  y: 0 
                } : { 
                  opacity: 0, 
                  y: 20 
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.8
                }}
                className="text-sm md:text-base text-stone-600 leading-relaxed space-y-3"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              >
                <p>
                  Preetizen isn't just about clothes. It's about the{" "}
                  <span className="font-semibold text-stone-700">people who wear them</span>, the{" "}
                  <span className="font-semibold text-stone-700">hands that make them</span>, and the{" "}
                  <span className="font-semibold text-stone-700">conversations they spark</span>.
                </p>
                <p>
                  We exist for a generation that wants{" "}
                  <span className="font-semibold text-stone-700">fashion with a heart</span>. And we're just getting started.
                </p>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ width: 0 }}
              animate={textInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              className="h-px bg-stone-300"
            />

            {/* Second Section: Limited, Not Disposable */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={textInView ? { 
                opacity: 1, 
                y: 0 
              } : { 
                opacity: 0, 
                y: 30 
              }}
              transition={{
                duration: 0.8,
                delay: 1.0
              }}
            >
              <motion.h3
                className="text-xl md:text-2xl lg:text-3xl font-black leading-tight mb-4 text-black tracking-tight"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                LIMITED, NOT DISPOSABLE
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="text-sm md:text-base text-stone-600 leading-relaxed space-y-3"
                style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
              >
                <p className="font-semibold text-stone-700">
                  We don't mass produce.
                </p>

                <p>
                  We drop small seasonal collections that are as fleeting and special as the stories that inspire them.
                </p>

                <p>
                  Our collection, <span className="font-semibold text-stone-700">Wildflower</span>, is imagined for India's long summers — soft silhouettes, minimal embroidery, and movement-friendly fabrics.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Community;
