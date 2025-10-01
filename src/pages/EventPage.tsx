import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

// Event Data
const eventCategories = {
  corporate: [
    { title: "Product Launch", description: "Organize grand product launches with media coverage.", image: "/images/events/corporate-events/product-luanch-card.jpg", icon: "🚀" },
    { title: "Brand Meetings", description: "Professional brand meetings for top management.", image: "/images/events/corporate-events/brand-meeting-card.jpg", icon: "💼" },
    { title: "Award Ceremonies", description: "Elegant award events to recognize achievements.", image: "/images/events/corporate-events/sports-awards-card.webp", icon: "🏆" },
    { title: "Expos / Exhibitions", description: "Showcase your products at large expos and exhibitions.", image: "/images/events/corporate-events/expo-exhibition-card.svg", icon: "🎪" },
  ],
  social: [
    { title: "Weddings / Engagements", description: "Make your special day memorable and elegant.", image: "/images/events/social-events/wedding-anniversary-card.webp", icon: "💑" },
    { title: "Birthday / Anniversary", description: "Fun-filled celebrations for all ages.", image: "/images/events/social-events/birthday-anniversary-card.jpeg", icon: "🎂" },
    { title: "Baby Shower / Naming Ceremony", description: "Celebrate new beginnings with family and friends.", image: "/images/events/social-events/baby-shower-card.jpg", icon: "👶" },
    { title: "Reunion / Community", description: "Reconnect with your community in style.", image: "/images/events/social-events/reunion-community-card.webp", icon: "🤝" },
    { title: "Unique Gatherings", description: "Plan supernatural or themed events.", image: "/images/events/social-events/unique-gatherings-card.webp", icon: "✨" },
  ],
  cultural: [
    { title: "Festivals & Poojas", description: "Traditional performances and rituals.", image: "/images/events/cultural-events/pooja-festivals-card.webp", icon: "🪔" },
    { title: "Art & Dance Shows", description: "Celebrate art with live performances.", image: "/images/events/cultural-events/art-dance-card.webp", icon: "💃" },
  ],
  entertainment: [
    { title: "Concerts", description: "Live music and entertainment shows.", image: "/images/events/entertainment-events/concert.jpeg", icon: "🎵" },
    { title: "Comedy & Fashion Shows", description: "Engaging and fun-filled events.", image: "/images/events/entertainment-events/comedy-fashion-card.jpeg", icon: "🎭" },
  ],
  public: [
    { title: "Marathons & Walkathons", description: "Health and awareness campaigns.", image: "/images/events/public-events/marathons-walkathons.webp", icon: "🏃" },
    { title: "Blood Donations & Social Service", description: "Make a difference in the community.", image: "/images/events/public-events/blood-donation-card.webp", icon: "❤️" },
  ],
  education: [
    { title: "Graduations & Alumni Meets", description: "Celebrate achievements and networking.", image: "/images/events/education-events/alumini-meets-card.webp", icon: "🎓" },
    { title: "Career Fairs & Competitions", description: "Empowering education and growth.", image: "/images/events/education-events/career-fair-card.jpeg", icon: "📚" },
  ],
};

const testimonials = [
  {
    name: "Srinivas Reddy",
    text: "మేము మా పెళ్లి వేడుక కోసం ఈ ప్లానర్స్‌ను ఎంచుకున్నాం. ప్రతి విషయంలో పర్ఫెక్ట్‌గా ప్లాన్ చేశారు! నిజంగా సంతోషంగా ఉంది.",
    role: "Client",
    rating: 5
  },
  {
    name: "Anjali Devi",
    text: "Our company product launch was full awesome! Team worked very nicely and everything done on time.",
    role: "Client",
    rating: 5
  },
  {
    name: "Ramesh Kumar",
    text: "చిన్న కుంభకోణంలోనూ, ప్రతి విభాగంలో సక్రమంగా అన్ని ఏర్పాట్లు చేశారు. మా కుటుంబం చాలా ఆనందంగా ఉంది.",
    role: "Client",
    rating: 5
  },
  {
    name: "Lakshmi Priya",
    text: "Birthday party was very very good! All decoration, food, music everything was super. I am happy happy!",
    role: "Client",
    rating: 5
  },
  {
    name: "Venkatesh Rao",
    text: "Corporate meeting and award ceremony done very proper. Very very professional and smooth arrangements. Nice team!",
    role: "Client",
    rating: 5
  },
  {
    name: "Sreeja N",
    text: "Baby shower was awesome, decorations super good and all guests enjoyed a lot. Full satisfaction.",
    role: "Client",
    rating: 5
  },
  {
    name: "Manoj Kumar",
    text: "Event planning very nice, everything done on time. I am very very happy with service!",
    role: "Client",
    rating: 5
  },
];

const LandingPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("corporate");
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);

  const categories = [
    { id: "corporate", label: "Corporate", icon: "💼" },
    { id: "social", label: "Social", icon: "🎉" },
    { id: "cultural", label: "Cultural", icon: "🎨" },
    { id: "entertainment", label: "Entertainment", icon: "🎪" },
    { id: "public", label: "Public", icon: "🌍" },
    { id: "education", label: "Education", icon: "🎓" },
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section - Full Screen with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460] via-[#FF4500] to-[#FF9933]">
          <div className="absolute inset-0 opacity-30">
            {[...Array(10)].map((_, i) => ( // Reduced number of elements for mobile performance
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  width: Math.random() * 200 + 50, // Smaller circles on mobile
                  height: Math.random() * 200 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 50 - 25],
                  x: [0, Math.random() * 50 - 25],
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-2xl font-playfair"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,153,51,0.5)",
                  "0 0 40px rgba(255,69,0,0.8)",
                  "0 0 20px rgba(255,153,51,0.5)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              UNFORGETTABLE
              <br />
              <span className="text-[#FFD700]">EVENTS</span>
            </motion.h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 text-white font-light tracking-wide font-Inter">
              Where Dreams Meet Reality
            </p>
            <ScrollLink
              to="categories"
              smooth={true}
              duration={800}
              offset={-80} // Adjusted for mobile headers
              className="inline-block mb-12 sm:mb-20"
            >
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#FF4500] px-8 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-2xl hover:shadow-[#FF9933]/50 transition-all cursor-pointer font-Inter"
              >
                Start Your Journey
              </motion.button>
            </ScrollLink>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-white text-2xl sm:text-4xl">↓</div>
        </motion.div>
      </section>

      {/* Interactive Event Categories */}
      <section id="categories" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              <span className="bg-gradient-to-r from-[#FF9933] to-[#FF4500] bg-clip-text text-transparent font-playfair">
                OUR SERVICES
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-Inter">Choose your event category</p>
          </motion.div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold font-Inter text-base sm:text-lg transition-all ${activeCategory === cat.id
                    ? "bg-gradient-to-r from-[#FF9933] to-[#FF4500] text-white shadow-xl"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-[#FF9933]"
                  }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Event Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {eventCategories[activeCategory as keyof typeof eventCategories].map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  onHoverStart={() => setHoveredEvent(idx)}
                  onHoverEnd={() => setHoveredEvent(null)}
                  className="relative group cursor-pointer"
                >
                  <div className="relative h-64 sm:h-80 rounded-3xl overflow-hidden shadow-2xl font-Inter">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 sm:w-16 h-12 sm:h-16 bg-white rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-xl">
                      {event.icon}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{event.title}</h3>
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: hoveredEvent === idx ? 1 : 0,
                          height: hoveredEvent === idx ? "auto" : 0,
                        }}
                        className="text-xs sm:text-sm mb-4 overflow-hidden"
                      >
                        {event.description}
                      </motion.p>
                      <motion.div
                        animate={{
                          x: hoveredEvent === idx ? 10 : 0,
                        }}
                        className="inline-flex items-center text-[#FFD700] font-semibold text-sm sm:text-base"
                      >
                        Learn More →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#FF9933] to-[#FF4500] text-white font-Inter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "18+", label: "Events Planned" },
              { number: "10+", label: "Happy Clients" },
              { number: "20+", label: "Team Members" },
              { number: "3+", label: "Years Experience" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-2">{stat.number}</div>
                <div className="text-base sm:text-lg md:text-xl font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Carousel Style */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-16"
          >
            <span className="bg-gradient-to-r from-[#FF9933] to-[#FF4500] bg-clip-text text-transparent font-playfair">
              CLIENT STORIES
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 font-Inter">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-3xl shadow-xl border-2 border-[#FF9933]/20 relative"
              >
                <div className="absolute -top-6 -left-6 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-[#FF9933] to-[#FF4500] rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold shadow-xl">
                  "
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFD700] text-xl sm:text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-6 italic leading-relaxed">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-br from-[#FF9933] to-[#FF4500] rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-base sm:text-lg">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm sm:text-base">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & Modern */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f3460] via-[#16213e] to-[#1a1a2e]"></div>
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/4 w-full h-full bg-[#FF9933] opacity-10 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[#FF4500] opacity-10 rounded-full blur-3xl"
          ></motion.div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 font-playfair">
              LET'S CREATE
              <br />
              <span className="text-transparent bg-gradient-to-r from-[#FF9933] to-[#FFD700] bg-clip-text">
                MAGIC TOGETHER
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Your dream event is just one conversation away
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center font-Inter">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#FF9933] to-[#FF4500] text-white px-8 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-xl font-bold shadow-2xl hover:shadow-[#FF9933]/50"
              >
                Book Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-xl font-bold border-2 border-white/30 hover:bg-white/20"
              >
                View Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;