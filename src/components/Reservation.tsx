import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, Users, Mail, Phone, User, Check, AlertCircle } from 'lucide-react';

const Reservation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    requests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(2847);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        requests: ''
      });
    }, 3000);
  };

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const occasions = [
    'Birthday Celebration',
    'Anniversary',
    'Date Night',
    'Business Dinner',
    'Family Gathering',
    'Other'
  ];

  return (
    <section id="reservation" ref={sectionRef} className="py-20 lg:py-32 bg-[#2E4057] overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A95E' fill-opacity='0.1'%3E%3Cpath d='M40 40L20 20v40l20-20zm20 0L40 20v40l20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Reserve Your Table
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Secure your spot for an unforgettable dining experience. Limited seating available.
          </p>
          
          {/* Social Proof */}
          <div className="inline-flex items-center bg-[#D4A95E]/10 backdrop-blur-sm rounded-full px-6 py-3 text-[#D4A95E]">
            <Users className="w-5 h-5 mr-2" />
            <span className="font-semibold">{waitlistCount.toLocaleString()} people</span>
            <span className="ml-1">already on the waitlist</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Reservation Form */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <Clock className="w-4 h-4 inline mr-2" />
                        Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                      >
                        <option value="">Select time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                      >
                        {[1,2,3,4,5,6,7,8].map((num) => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                      Special Occasion (Optional)
                    </label>
                    <select
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200"
                    >
                      <option value="">Select occasion</option>
                      {occasions.map((occasion) => (
                        <option key={occasion} value={occasion}>{occasion}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#2E4057] mb-2">
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="requests"
                      value={formData.requests}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D4A95E] focus:ring-2 focus:ring-[#D4A95E]/20 transition-all duration-200 resize-none"
                      placeholder="Dietary restrictions, seating preferences, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#D4A95E] text-[#2E4057] py-4 rounded-lg font-bold text-lg hover:bg-[#D4A95E]/90 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Confirm Reservation
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#2E4057] mb-4">
                    Reservation Confirmed!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for choosing Belleful. We've sent a confirmation email with all the details.
                  </p>
                  <p className="text-sm text-gray-500">
                    We can't wait to serve you an unforgettable experience!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Information Card */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="bg-[#D4A95E]/10 backdrop-blur-sm rounded-3xl p-8 border border-[#D4A95E]/20">
              <h3 className="font-serif text-2xl font-bold text-white mb-6">
                What to Expect
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D4A95E] rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-4 h-4 text-[#2E4057]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Dining Experience</h4>
                    <p className="text-gray-300 text-sm">
                      Allow 2-3 hours for the full Belleful experience. Each dish is prepared fresh to order.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D4A95E] rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-[#2E4057]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Dress Code</h4>
                    <p className="text-gray-300 text-sm">
                      Smart casual. We welcome cultural attire and encourage you to express your style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#D4A95E] rounded-full flex items-center justify-center mr-4 mt-1">
                    <AlertCircle className="w-4 h-4 text-[#2E4057]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2">Cancellation Policy</h4>
                    <p className="text-gray-300 text-sm">
                      Please notify us 4 hours in advance for any changes to your reservation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-xl border border-white/20">
                <h4 className="font-serif text-lg font-bold text-[#D4A95E] mb-3">
                  Special Offers
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Birthday celebrations include complimentary dessert</li>
                  <li>• Group bookings (8+) receive 10% discount</li>
                  <li>• Wine pairing available upon request</li>
                </ul>
              </div>

              <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm mb-4">
                  Need immediate assistance?
                </p>
                <a 
                  href="tel:+15551234567"
                  className="inline-flex items-center text-[#D4A95E] hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;