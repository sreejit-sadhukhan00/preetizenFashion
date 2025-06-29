'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
  date: string;
  verified: boolean;
  product?: string;
}

const existingReviews: Review[] = [
  {
    id: 1,
    name: "Priya Sharma",
    rating: 5,
    comment: "Thank you Preetizen for this beautiful dress... soon going to order more from you 🖤",
    image: "https://images.unsplash.com/photo-1494790108755-2616b9fe4d9d?w=400&h=400&fit=crop&crop=face",
    date: "2 days ago",
    verified: true,
    product: "Zen Collection Dress"
  },
  {
    id: 2,
    name: "Arjun & Meera",
    rating: 5,
    comment: "I ordered two pieces for my husband and myself! Sharing a photo for Preeti to see us in her creation. Will post this too! I wish I had a photo of her giving me this.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    date: "1 week ago",
    verified: true,
    product: "Couple Collection"
  },
  {
    id: 3,
    name: "Sakshi Agarwal",
    rating: 5,
    comment: "Absolutely love the quality and design! The fabric feels premium and the fit is perfect. Definitely ordering more!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    date: "3 days ago",
    verified: true,
    product: "Premium Polo Collection"
  },
  {
    id: 4,
    name: "Rahul Kumar",
    rating: 4,
    comment: "Great hoodie! Super comfortable and the print quality is excellent. Fast delivery too.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    date: "5 days ago",
    verified: true,
    product: "Label MN Hoodie"
  },
  {
    id: 5,
    name: "Ananya Singh",
    rating: 5,
    comment: "The oversized tee is exactly what I wanted! Perfect for casual outings and the color is beautiful.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    date: "1 week ago",
    verified: true,
    product: "Oversized Tee"
  },
  {
    id: 6,
    name: "Vikram Patel",
    rating: 5,
    comment: "Amazing quality and unique designs! Preetizen has become my go-to brand for trendy clothes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    date: "2 weeks ago",
    verified: true,
    product: "Vintage Jacket"
  }
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

export default function Review() {
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    rating: 5,
    product: '',
    comment: '',
    image: null as File | null
  });

  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReviewForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReviewForm(prev => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Review submitted:', reviewForm);
    alert('Thank you for your review! We appreciate your feedback.');
    setReviewForm({
      name: '',
      email: '',
      rating: 5,
      product: '',
      comment: '',
      image: null
    });
    setShowForm(false);
  };

  const handleFeatureReviewClick = () => {
    setShowForm(!showForm);
    if (!showForm) {
      // Smooth scroll to form section after a small delay
      setTimeout(() => {
        const formSection = document.getElementById('review-form-section');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <StarIcon key={index} filled={index < rating} />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <section className="relative py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="animate-float">
              <HeartIcon />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-gray-900 animate-slide-up">
              REVIEWS FROM YOU
            </h1>
            <div className="animate-float-delayed">
              <HeartIcon />
            </div>
          </div>

          {/* Elegant Flowing Hearts */}
          <div className="relative flex justify-center items-center my-10">
            <svg className="w-full max-w-md h-16" viewBox="0 0 400 60">
              {/* Flowing curve line */}
              <path
                d="M50 30 Q120 15, 200 30 Q280 45, 350 30"
                stroke="#f3f4f6"
                strokeWidth="3"
                fill="none"
                className="animate-draw-curve"
                opacity="0.7"
              />
              
              {/* Elegant heart elements */}
              <g className="animate-heart-flow">
                <circle cx="50" cy="30" r="12" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="2" className="animate-ripple"/>
                <text x="50" y="36" fontSize="14" textAnchor="middle" className="animate-sparkle">✨</text>
              </g>
              
              <g className="animate-heart-flow-2">
                <circle cx="200" cy="30" r="14" fill="rgba(236, 72, 153, 0.15)" stroke="#ec4899" strokeWidth="2" className="animate-ripple"/>
                <text x="200" y="37" fontSize="16" textAnchor="middle" className="animate-sparkle">💖</text>
              </g>
              
              <g className="animate-heart-flow-3">
                <circle cx="350" cy="30" r="12" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="2" className="animate-ripple"/>
                <text x="350" y="36" fontSize="14" textAnchor="middle" className="animate-sparkle">✨</text>
              </g>
              
              {/* Floating particles */}
              <circle cx="100" cy="20" r="2" fill="#fbbf24" className="animate-particle-1" opacity="0.8"/>
              <circle cx="250" cy="45" r="1.5" fill="#a78bfa" className="animate-particle-2" opacity="0.6"/>
              <circle cx="300" cy="15" r="2" fill="#f472b6" className="animate-particle-3" opacity="0.7"/>
            </svg>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Your words inspire us every day. Here's what our amazing community has to say about their Preetizen experience.
          </p>
          
          <button
            onClick={handleFeatureReviewClick}
            className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            FEATURE YOUR REVIEW {!showForm ? '↓' : '↑'}
          </button>
          
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Review Form */}
      {showForm && (
        <section id="review-form-section" className="py-12 bg-gray-50 animate-slide-down">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Share Your Experience</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={reviewForm.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={reviewForm.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Product Purchased</label>
                    <input
                      type="text"
                      name="product"
                      value={reviewForm.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                      placeholder="Which product did you buy?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Rating</label>
                    <select
                      name="rating"
                      value={reviewForm.rating}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                    >
                      <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                      <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                      <option value={3}>⭐⭐⭐ (3 stars)</option>
                      <option value={2}>⭐⭐ (2 stars)</option>
                      <option value={1}>⭐ (1 star)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Your Review</label>
                  <textarea
                    name="comment"
                    value={reviewForm.comment}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all resize-none"
                    placeholder="Tell us about your experience with Preetizen..."
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Add Photo (Optional)</label>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {existingReviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className="p-6">
                  {/* User Info */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        {review.verified && (
                          <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-sm text-gray-600">({review.rating}/5)</span>
                  </div>

                  {/* Product */}
                  {review.product && (
                    <div className="mb-3">
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                        {review.product}
                      </span>
                    </div>
                  )}

                  {/* Comment */}
                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  
                  {/* Like Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                      <HeartIcon />
                      <span className="text-sm">Helpful</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(2deg);
          }
          66% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }

        @keyframes drawCurve {
          from {
            stroke-dasharray: 0 400;
          }
          to {
            stroke-dasharray: 400 0;
          }
        }

        @keyframes heartFlow {
          0% {
            transform: scale(0.8) translateY(5px);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1) translateY(-2px);
            opacity: 1;
          }
          100% {
            transform: scale(0.9) translateY(0px);
            opacity: 0.8;
          }
        }

        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.4;
          }
          100% {
            transform: scale(1);
            opacity: 0.7;
          }
        }

        @keyframes sparkle {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.8;
          }
          25% {
            transform: scale(1.2) rotate(90deg);
            opacity: 1;
          }
          50% {
            transform: scale(0.9) rotate(180deg);
            opacity: 0.9;
          }
          75% {
            transform: scale(1.1) rotate(270deg);
            opacity: 1;
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-15px) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: translateY(-30px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slideUp 1.2s ease-out forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        .animate-draw-curve {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: drawCurve 2.5s ease-in-out forwards;
        }

        .animate-heart-flow {
          animation: heartFlow 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-heart-flow-2 {
          animation: heartFlow 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-heart-flow-3 {
          animation: heartFlow 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-ripple {
          animation: ripple 3s ease-in-out infinite;
        }

        .animate-sparkle {
          animation: sparkle 4s ease-in-out infinite;
        }

        .animate-particle-1 {
          animation: particle 3s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-particle-2 {
          animation: particle 3.5s ease-in-out infinite;
          animation-delay: 2.5s;
        }

        .animate-particle-3 {
          animation: particle 2.8s ease-in-out infinite;
          animation-delay: 3s;
        }

        .animate-slide-down {
          animation: slideDown 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}