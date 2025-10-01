import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const values = [
  {
    icon: <Leaf className="w-10 h-10 text-saffron mx-auto mb-4" />,
    title: "Authenticity",
    desc: "We source products directly from trusted artisans and suppliers to ensure purity.",
  },
  {
    icon: <Heart className="w-10 h-10 text-saffron mx-auto mb-4" />,
    title: "Devotion",
    desc: "Every product reflects devotion and respect towards traditions and culture.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-saffron mx-auto mb-4" />,
    title: "Quality",
    desc: "We believe in offering only the best quality items for your spiritual journey.",
  },
];

const AboutUs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative bg-gradient-to-b from-cream via-white to-cream py-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-saffron font-playfair"
          >
            About <span className="text-brown">Shubha</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
            Bringing divinity to your doorstep with authentic pooja items,
            idols, and festive essentials crafted with devotion and care.
          </p>
        </motion.div>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.img
            src="/about.png"
            alt="Devotional products and pooja essentials from Shubha"
            className="rounded-2xl shadow-lg w-full object-contain"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          <motion.article
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-brown mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Shubha was founded with a simple vision – to make spirituality
              accessible for every home. We curate sacred idols, pooja kits, and
              traditional items from skilled artisans across India.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every product is handpicked to ensure authenticity, purity, and
              devotion. Whether it’s for daily pooja or grand festivals, Shubha
              is here to be your trusted spiritual companion.
            </p>
          </motion.article>
        </section>

        {/* About Shubha Section */}
        {/* About & Vision Grid */}
<section className="grid md:grid-cols-2 gap-12 mb-20 max-w-7xl mx-auto px-6 lg:px-12">
  {/* About Shubha */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center md:text-left"
  >
    <h2 className="text-3xl font-bold text-brown mb-4">🌸 About Shubha</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      Life is made of countless moments, and every moment becomes more meaningful when celebrated with purity and joy. Shubha is your one-stop destination for everything auspicious – from Puja essentials, soulful music, elegant decoration, and divine photography to creating memories that last forever.
    </p>
    <p className="text-gray-700 leading-relaxed">
      At Shubha, we believe that every occasion – whether big or small – deserves to be celebrated with devotion, beauty, and grace. With carefully curated services and authentic products, we make your sacred moments truly memorable.
    </p>
  </motion.div>

  {/* Our Vision */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center md:text-left"
  >
    <h2 className="text-3xl font-bold text-brown mb-4">🌟 Our Vision</h2>
    <p className="text-gray-700 leading-relaxed mb-4">
      Our vision is to bring culture, tradition, and celebration together at one place – so that you can focus on cherishing your special moments while we take care of every detail.
    </p>
    <p className="text-gray-700 leading-relaxed">
      We aim to make auspiciousness accessible and effortless, blending timeless traditions with modern convenience. Shubha is here to ensure that every ritual, every celebration, and every memory you create is filled with positivity, devotion, and joy.
    </p>
  </motion.div>
</section>


        {/* Values Section */}
        <section aria-label="Our Values">
          <div className="grid md:grid-cols-3 gap-10 text-center mb-16">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
              >
                {value.icon}
                <h3 className="text-xl font-bold text-brown mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => navigate("/categories/all")}
            className="px-8 py-3 bg-saffron text-white font-semibold rounded-full shadow-md hover:bg-brown transition"
          >
            Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
