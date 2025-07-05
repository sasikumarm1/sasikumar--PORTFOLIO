import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate form submission with realistic delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Hide success message after 4 seconds
      setTimeout(() => setIsSubmitted(false), 4000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: 'Gandhi Park, Coimbatore',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sasikumar23125@gmail.com',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/sasikumarm1',
      color: 'hover:text-gray-300 hover:bg-gray-300/10'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sasi-kumar-a36b05285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-400 hover:bg-blue-400/10'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/_sasi._23?igsh=MWMzNDZwMHFza2Z4Nw==',
      color: 'hover:text-pink-400 hover:bg-pink-400/10'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-500/5 via-transparent to-purple-500/5"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects. Let's connect!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <info.icon size={18} className="text-white sm:w-5 sm:h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base">
                        {info.title}
                      </h4>
                      <p className="text-gray-400 text-sm sm:text-base">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Me</h4>
                <div className="flex space-x-3 sm:space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 transition-all duration-300 hover:scale-110 transform ${social.color} shadow-lg hover:shadow-xl`}
                      title={`Follow me on ${social.name}`}
                    >
                      <social.icon size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-700 overflow-hidden shadow-2xl">
                {/* Success Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/90 to-purple-500/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                  isSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <div className="text-center text-white px-4">
                    <CheckCircle size={48} className="mx-auto mb-4 animate-bounce sm:w-16 sm:h-16" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors duration-200">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 text-sm sm:text-base ${
                        formErrors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="Enter your name"
                    />
                    {formErrors.name && (
                      <div className="flex items-center mt-1 text-red-400 text-xs">
                        <AlertCircle size={12} className="mr-1" />
                        {formErrors.name}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors duration-200">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 text-sm sm:text-base ${
                        formErrors.email 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <div className="flex items-center mt-1 text-red-400 text-xs">
                        <AlertCircle size={12} className="mr-1" />
                        {formErrors.email}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2 group-focus-within:text-blue-400 transition-colors duration-200">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all duration-200 resize-none text-sm sm:text-base ${
                        formErrors.message 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-gray-600 focus:border-blue-500 focus:ring-blue-500/20'
                      }`}
                      placeholder="Enter your message"
                    />
                    {formErrors.message && (
                      <div className="flex items-center mt-1 text-red-400 text-xs">
                        <AlertCircle size={12} className="mr-1" />
                        {formErrors.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="relative w-full px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group text-sm sm:text-base shadow-lg hover:shadow-xl"
                  >
                    <span className={`flex items-center justify-center space-x-2 transition-all duration-300 ${
                      isSubmitting ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <Send size={18} className="sm:w-5 sm:h-5" />
                      <span>Send Message</span>
                    </span>
                    
                    {/* Loading Spinner */}
                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                      isSubmitting ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;