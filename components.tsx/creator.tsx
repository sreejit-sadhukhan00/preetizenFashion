"use client";
import React from 'react';
import Image from 'next/image';

const Creator = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-stone-50 via-white to-stone-100 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-wide text-stone-900 mb-8 font-serif">
            OUR TEAM
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-stone-700 max-w-5xl mx-auto leading-relaxed font-light tracking-wide">
            "We're not in the business of making clothes. We're in the business of making stories wearable."
          </p>
        </div>

        {/* Team Members Grid - Angled Layout */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0 lg:h-[600px]">
          {/* Preeti - Left Card Rotated */}
          <div className="group relative animate-fade-in-left lg:transform lg:-rotate-12 lg:translate-x-8 lg:z-10">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-105 group-hover:rotate-0 lg:group-hover:translate-x-0">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-72 lg:h-96">
                <Image
                  src="/creator1.png"
                  alt="Preeti - Founder & Creative Head"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 288px, 288px"
                />
              </div>
              
              {/* Name Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-light text-stone-900 mb-1 tracking-wide">
                  Preeti
                </h3>
                <p className="text-base text-stone-600 font-light tracking-wide">
                  Founder & Creative Head
                </p>
              </div>
            </div>
          </div>

          {/* Navin - Right Card Rotated */}
          <div className="group relative animate-fade-in-right lg:transform lg:rotate-12 lg:-translate-x-8 lg:z-10">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 group-hover:shadow-3xl group-hover:scale-105 group-hover:rotate-0 lg:group-hover:translate-x-0">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-72 lg:h-96">
                <Image
                  src="/creator2.png"
                  alt="Navin - Business & Tech Head"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 288px, 288px"
                />
              </div>
              
              {/* Name Card */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-light text-stone-900 mb-1 tracking-wide">
                  Navin
                </h3>
                <p className="text-base text-stone-600 font-light tracking-wide">
                  Business & Tech Head
                </p>
              </div>
            </div>
          </div>

          {/* Connecting Line/Element */}
          <div className="absolute hidden lg:block w-32 h-1 bg-gradient-to-r from-stone-300 via-stone-400 to-stone-300 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 animate-pulse" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-stone-200/30 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-stone-300/20 rounded-full blur-2xl animate-float-delayed" />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-180deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out 0.3s both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.6s both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Creator;