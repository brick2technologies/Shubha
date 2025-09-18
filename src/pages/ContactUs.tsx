import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactUsProps {
  onNavigate: (page: 'categories') => void;
}

const ContactUs: React.FC<ContactUsProps> = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-saffron mb-8">Contact Us</h1>
        <p className="text-gray-700 mb-12">
          Reach out for queries, feedback, or blessings ✨
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow-md rounded-xl p-6">
            <Phone className="w-8 h-8 text-saffron mx-auto mb-3" />
            <h3 className="font-semibold text-brown">Call Us</h3>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <Mail className="w-8 h-8 text-saffron mx-auto mb-3" />
            <h3 className="font-semibold text-brown">Email</h3>
            <p className="text-gray-600">support@shubha.com</p>
          </div>
          <div className="bg-white shadow-md rounded-xl p-6">
            <MapPin className="w-8 h-8 text-saffron mx-auto mb-3" />
            <h3 className="font-semibold text-brown">Visit Us</h3>
            <p className="text-gray-600">Hyderabad, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
