'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface PreviousModel {
  id: number;
  name: string;
  story: string;
  instagramHandle: string;
  image: string;
}

const previousModels: PreviousModel[] = [
  {
    id: 1,
    name: "Sayani",
    story: "Hi, I'm Sayani Barma. Growing up, I was deeply inspired by my father, a classical music teacher, and I loved classical dance and singing. But societal expectations and my own insecurities made me put my dreams on hold. At 19, I joined a central government job, burying my passions even further. Then, my husband encouraged me to rediscover my voice. He reminded me that marriage isn't the end of dreams—it's a new beginning. When Preetizeen reached out, I was hesitant, but with his support, I took the leap. To everyone: 'Tumi parbe, nijer upor biswas rakho, r egiye jao.'",
    instagramHandle: "@sayani_barma_official",
    image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Arjun",
    story: "From being a shy college student to becoming a confident model, my journey with Preetizen has been transformative. I discovered that fashion isn't just about clothes—it's about expressing your authentic self and inspiring others to embrace their uniqueness.",
    instagramHandle: "@arjun_styles",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Priya",
    story: "Being part of Preetizen's previous collection taught me that beauty comes in all forms. As someone who struggled with self-confidence, this platform gave me the courage to pursue my dreams in fashion and helped me realize my worth.",
    instagramHandle: "@priya_fashion",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 4,
    name: "Rohan",
    story: "My experience with Preetizen was about breaking stereotypes. Coming from a small town, I never thought I could be part of such an inclusive brand. This opportunity opened doors I never knew existed.",
    instagramHandle: "@rohan_model",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

export default function Model() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    location: '',
    height: '',
    experience: '',
    instagram: '',
    motivation: '',
    portfolio: null as File | null
  });

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, portfolio: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Application submitted successfully! We\'ll get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Become a Model */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 py-16">
            {/* Left Side - Content */}
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider text-gray-900">
                  BECOME A
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-900">
                  PREETIZEN MODEL
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400"></div>
              </div>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg">
                This is your moment. Step into the Preetizen Frame for our next collection launching 
                <span className="font-semibold text-pink-600"> 15th June 2025</span>.
              </p>

              {/* Application Form */}
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Apply Now</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Age</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                        placeholder="25"
                        min="16"
                        max="50"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Height (cm)</label>
                      <input
                        type="number"
                        name="height"
                        value={formData.height}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                        placeholder="175"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Location</label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                        placeholder="City, State"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Instagram Handle</label>
                      <input
                        type="text"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
                        placeholder="@your_handle"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Modeling Experience</label>
                    <textarea
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all resize-none"
                      placeholder="Tell us about your modeling experience or any relevant background..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Why do you want to be a Preetizen model?</label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all resize-none"
                      placeholder="Share your motivation and what makes you unique..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Portfolio (Optional)</label>
                    <input
                      type="file"
                      name="portfolio"
                      onChange={handleFileChange}
                      accept="image/*,.pdf"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex-1 relative">
              <div className="relative h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/team2.png"
                  alt="Preetizen Model"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-15 animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Models Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900 mb-4">
              MEET OUR PREVIOUS MODELS
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These are the faces that brought our past collections to life.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-6"></div>
          </div>

          {/* Featured Model */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 transform hover:scale-105 transition-all duration-500">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {previousModels[currentModelIndex].name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                  {previousModels[currentModelIndex].story}
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href={`https://instagram.com/${previousModels[currentModelIndex].instagramHandle.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {previousModels[currentModelIndex].instagramHandle}
                  </a>
                  
                  <div className="flex space-x-2">
                    {previousModels.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentModelIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentModelIndex 
                            ? 'bg-pink-500 scale-125' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 relative h-64 lg:h-auto">
                <Image
                  src={previousModels[currentModelIndex].image}
                  alt={previousModels[currentModelIndex].name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Other Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousModels.filter((_, index) => index !== currentModelIndex).map((model, index) => (
              <div
                key={model.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={model.image}
                    alt={model.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-xl mb-1">{model.name}</h4>
                    <p className="text-white/90 text-sm">{model.instagramHandle}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {model.story}
                  </p>
                  <button
                    onClick={() => setCurrentModelIndex(previousModels.findIndex(m => m.id === model.id))}
                    className="mt-4 text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors"
                  >
                    Read Full Story →
                  </button>
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

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}