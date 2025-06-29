"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Upload, Mail, Phone, User,Instagram, Briefcase, MapPin, Clock, Star } from 'lucide-react';
import Link from 'next/link';

interface JobPosition {
  title: string;
  openings: number;
  description: string;
  type?: string;
}

interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  portfolio: string;
  coverLetter: string;
}

const JoinUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobPositions: JobPosition[] = [
    {
      title: "FASHION DESIGNER",
      openings: 2,
      description: "DESIGN SILHOUETTES THAT TELL STORIES AND START CONVERSATIONS"
    },
    {
      title: "GRAPHIC DESIGNER",
      openings: 2,
      description: "TURN BLANK CANVASES INTO SCROLL-STOPPING VISUALS."
    },
    {
      title: "WEBSITE DEVELOPER",
      openings: 1,
      description: "CODE THE BACKBONE OF PREETIZEN'S DIGITAL MAGIC."
    },
    {
      title: "VIDEO EDITOR",
      openings: 2,
      description: "CRAFT STORIES THAT MOVE — FRAME BY FRAME, CUT BY CUT."
    },
    {
      title: "CONTENT CREATOR INTERN",
      openings: 2,
      description: "CREATIVE ENOUGH TO COME UP WITH UNIQUE CONTENT & MARKETING IDEAS? THIS IS YOUR PLACE TO SHINE.",
      type: "INTERN"
    },
    {
      title: "SHOOT DAY INTERN",
      openings: 4,
      description: "HAVE SKILLS OF WORKING IN A TEAM, CREATING CONTENT, AND EVERYTHING REQUIRED TO MAKE A SHOOT DAY SUCCESSFUL?",
      type: "INTERN"
    }
  ];

  const handleApplyClick = (position: string) => {
    setSelectedPosition(position);
    setApplicationData(prev => ({ ...prev, position }));
    setIsModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
    
      // Reset form and close modal
      setApplicationData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        portfolio: '',
        coverLetter: ''
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      {/* Hero Section */}
      <motion.section 
        className="relative pt-24 pb-16 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-6xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-wider"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 1, ease: "backOut" }}
          >
            WE&apos;RE HIRING!
          </motion.h1>
          
          <motion.p 
            className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Join our creative team and help shape the future of mindful fashion
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full"
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-rose-400/25 to-pink-500/25 rounded-full"
          animate={{
            y: [10, -10, 10],
            x: [-5, 5, -5],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.section>

      {/* Job Positions Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Job Type Badge */}
                {job.type && (
                  <motion.div 
                    className="absolute top-6 right-6 bg-black text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wider"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                  >
                    {job.type}
                  </motion.div>
                )}
                
                {/* Openings Badge */}
                <motion.div 
                  className="flex items-center gap-2 mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                >
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    OPENINGS: {job.openings}
                  </div>
                </motion.div>

                <motion.h3 
                  className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 tracking-wide"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
                >
                  {job.title}
                </motion.h3>

                <motion.p 
                  className="text-gray-600 text-lg font-light leading-relaxed mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                >
                  {job.description}
                </motion.p>

                <motion.button
                  onClick={() => handleApplyClick(job.title)}
                  className="bg-black text-white px-8 py-3 rounded-full font-semibold tracking-wider hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                >
                  APPLY NOW
                  <Briefcase className="w-4 h-4" />
                </motion.button>

                {/* Decorative Corner */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-pink-400/10 to-purple-500/10 rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <motion.section 
        className="py-20 px-6 bg-gradient-to-r from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12 tracking-wider"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            viewport={{ once: true }}
          >
            HAVE A COLLAB IDEA?
          </motion.h2>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              href="https://instagram.com/preetizen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full font-semibold tracking-wider hover:bg-gray-800 transition-all duration-300 text-lg group"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              DM US TO KNOW MORE
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            className="mt-12 flex items-center justify-center gap-8 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Remote Friendly</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Flexible Hours</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              <span className="text-sm">Creative Freedom</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Application Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Apply for Position</h3>
                <p className="text-lg text-gray-600">Join the PREETI ZEN creative team</p>
                {selectedPosition && (
                  <div className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                    {selectedPosition}
                  </div>
                )}
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={applicationData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={applicationData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={applicationData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <select
                      name="experience"
                      value={applicationData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                    >
                      <option value="">Select experience level</option>
                      <option value="Fresher">Fresher (0-1 years)</option>
                      <option value="Junior">Junior (1-3 years)</option>
                      <option value="Mid">Mid-level (3-5 years)</option>
                      <option value="Senior">Senior (5+ years)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio URL
                  </label>
                  <input
                    type="url"
                    name="portfolio"
                    value={applicationData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300"
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cover Letter *
                  </label>
                  <textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 resize-none"
                    placeholder="Tell us why you're perfect for this role and what makes you excited about joining PREETI ZEN..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <motion.div
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                  ) : (
                    <>
                      Submit Application
                      <Upload className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JoinUsPage;
