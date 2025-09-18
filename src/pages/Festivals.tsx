import React from "react";

interface FestivalsProps {
  onNavigate: (page: 'categories', category?: string) => void;
}

const Festivals: React.FC<FestivalsProps> = ({ onNavigate }) => {
  const specials = [
    { name: "Ganesh Chaturthi", image: "/images/ganesh.jpg" },
    { name: "Dasara", image: "/images/dasara.jpg" },
    { name: "Diwali", image: "/images/diwali.jpg" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-cream via-white to-cream">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-saffron mb-8">Festivals</h1>
        <p className="text-gray-700 mb-12">Celebrate with our festival collections 🎉</p>

        <div className="grid md:grid-cols-3 gap-8">
          {specials.map((fest) => (
            <div
              key={fest.name}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition cursor-pointer"
              onClick={() => onNavigate("categories", fest.name)}
            >
              <img src={fest.image} alt={fest.name} className="w-full h-48 object-cover" />
              <h3 className="py-4 font-semibold text-brown">{fest.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Festivals;
