"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, EyeOff, User, Mail, Lock, ArrowRight,  X, Star, } from "lucide-react";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function SignUpPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState<FormErrors>({});

  const backgroundImages = [
    "/model1.png",
    "/clothing1.png", 
    "/clothing2.png",
    "/clothing3.png",
    "/clothing4.png",
    "/clothing5.png",
    "/wildflower.png"
  ];

 

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
    return strength;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear errors when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Sign up successful:', formData);
      // Handle successful signup - redirect to dashboard or login
    } catch (error) {
      console.error('Sign up error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = (): string => {
    if (passwordStrength <= 2) return 'bg-red-400';
    if (passwordStrength <= 3) return 'bg-yellow-400';
    if (passwordStrength <= 4) return 'bg-blue-400';
    return 'bg-green-400';
  };

  const getPasswordStrengthText = (): string => {
    if (passwordStrength <= 2) return 'Weak';
    if (passwordStrength <= 3) return 'Fair';
    if (passwordStrength <= 4) return 'Good';
    return 'Strong';
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              x: [-10, 10, -10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Left Side - Elegant Image Collage - Home Page Style */}
      <motion.div 
        className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50/30"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Subtle Background Patterns */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, #ec4899 0%, transparent 60%), radial-gradient(circle at 80% 70%, #8b5cf6 0%, transparent 60%)',
          }}
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Main Image Collage Grid - Inspired by Home Page */}
        <div className="relative w-full h-full p-6 flex items-center justify-center">
          {/* Grid Container */}
          <div className="relative w-full max-w-lg h-4/5 grid grid-cols-12 grid-rows-12 gap-3">
            
            {/* Hero Image - Large Featured */}
            <motion.div 
              className="col-span-7 row-span-8 rounded-3xl overflow-hidden shadow-2xl relative group"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <Image
                src="/model1.png"
                alt="Fashion Model"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-transparent via-pink-500/5 to-purple-900/15"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Elegant shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
                animate={{
                  translateX: ["-100%", "200%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Top Right Fashion Item */}
            <motion.div 
              className="col-span-5 row-span-6 rounded-2xl overflow-hidden shadow-xl relative group"
              initial={{ scale: 0.8, opacity: 0, x: 30 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: "backOut" }}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
            >
              <Image
                src="/clothing1.png"
                alt="Fashion Collection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Bottom Left Small Accent */}
            <motion.div 
              className="col-span-3 row-span-4 rounded-xl overflow-hidden shadow-lg relative group"
              initial={{ scale: 0.7, opacity: 0, rotate: -10 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.9, duration: 1, ease: "backOut" }}
              whileHover={{ 
                scale: 1.1,
                rotate: 3,
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
            >
              <Image
                src="/cloth1.png"
                alt="Fashion Detail"
                fill
                className="object-cover group-hover:scale-115 transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-rose-400/20 to-pink-600/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Middle Right Medium */}
            <motion.div 
              className="col-span-4 row-span-5 rounded-2xl overflow-hidden shadow-lg relative group"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1, ease: "backOut" }}
              whileHover={{ 
                scale: 1.06,
                x: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <Image
                src="/clothing2.png"
                alt="Fashion Style"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-600"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-indigo-500/15 to-transparent opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Bottom Right Circle Accent */}
            <motion.div 
              className="col-span-3 row-span-3 rounded-full overflow-hidden shadow-lg relative group"
              initial={{ scale: 0.6, opacity: 0, rotate: 15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: "backOut" }}
              whileHover={{ 
                scale: 1.15,
                rotate: -8,
                transition: { duration: 0.3, type: "spring", stiffness: 300 }
              }}
            >
              <Image
                src="/cloth2.png"
                alt="Fashion Accessory"
                fill
                className="object-cover group-hover:scale-120 transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-400/25 to-teal-600/25 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Small Floating Wildflower */}
            <motion.div 
              className="col-span-2 row-span-2 rounded-lg overflow-hidden shadow-md relative group"
              initial={{ scale: 0.5, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 1, ease: "backOut" }}
              whileHover={{ 
                scale: 1.2,
                y: -5,
                transition: { duration: 0.3, type: "spring", stiffness: 350 }
              }}
            >
              <Image
                src="/wildflower.png"
                alt="Wildflower Collection"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-bl from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </div>
        </div>

        {/* Subtle Floating Decoration Elements */}
        <motion.div 
          className="absolute top-1/4 right-12 w-4 h-4 bg-gradient-to-br from-pink-400/30 to-purple-500/30 rounded-full"
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 left-12 w-6 h-6 bg-gradient-to-br from-rose-300/25 to-pink-400/25 rounded-full"
          animate={{
            y: [8, -8, 8],
            x: [-5, 5, -5],
            opacity: [0.25, 0.6, 0.25],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.div 
          className="absolute top-2/3 left-1/4 w-3 h-3 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>

      {/* Right Side - Enhanced Sign Up Form */}
      <motion.div 
        className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-white to-purple-50/30 relative"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-full opacity-50 blur-2xl" />

        <div className="w-full max-w-md relative z-10">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center mb-8"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="/" className="inline-block mb-6 group">
              <motion.h1 
                className="text-3xl font-bold text-gray-900 tracking-wider"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                PREETI<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600">ZEN</span>
              </motion.h1>
              <motion.div 
                className="h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 0 }}
              />
            </Link>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600">Join our mindful fashion community</p>
              
              {/* Decorative Stars */}
              <div className="flex justify-center gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sign Up Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 ${
                      errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="Enter first name"
                  />
                </div>
                {errors.firstName && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <X className="w-3 h-3" />
                    {errors.firstName}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 ${
                      errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                    placeholder="Enter last name"
                  />
                </div>
                {errors.lastName && (
                  <motion.p 
                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <X className="w-3 h-3" />
                    {errors.lastName}
                  </motion.p>
                )}
              </motion.div>
            </div>

            {/* Email Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 ${
                    errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                  }`}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <motion.p 
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <X className="w-3 h-3" />
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 ${
                    errors.password ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                  }`}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <motion.div 
                  className="mt-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                        initial={{ width: 0 }}
                        animate={{ width: `${(passwordStrength / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-600">{getPasswordStrengthText()}</span>
                  </div>
                </motion.div>
              )}
              
              {errors.password && (
                <motion.p 
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <X className="w-3 h-3" />
                  {errors.password}
                </motion.p>
              )}
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 ${
                    errors.confirmPassword ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                  }`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.confirmPassword && (
                <motion.p 
                  className="text-red-500 text-sm mt-1 flex items-center gap-1"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <X className="w-3 h-3" />
                  {errors.confirmPassword}
                </motion.p>
              )}
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              {isLoading ? (
                <motion.div
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                <>
                  Create Account
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Footer */}
          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link 
                href="/auth/login" 
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-semibold hover:underline"
              >
                Sign in
              </Link>
            </p>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500">
                By creating an account, you agree to our{' '}
                <Link href="/terms" className="text-purple-600 hover:underline">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="text-purple-600 hover:underline">Privacy Policy</Link>
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
