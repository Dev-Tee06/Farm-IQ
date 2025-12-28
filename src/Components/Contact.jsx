import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactBg from "../assets/Agric2.jpeg"; // You can replace with another image if needed

function Contact() {
  return (
    <div className="bg-[#F5F5F5] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-12"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
        <div className="absolute inset-0 bg-[#0F3D2E]/70"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Get in Touch with FARM-IQ
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Have questions or want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaPhoneAlt size={36} className="mx-auto mb-4 text-[#0F3D2E]" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-700">+234 123 456 7890</p>
          </motion.div>

          <motion.div
            className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaEnvelope size={36} className="mx-auto mb-4 text-[#0F3D2E]" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-700">info@farm-iq.com</p>
          </motion.div>

          <motion.div
            className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-8 hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaMapMarkerAlt size={36} className="mx-auto mb-4 text-[#0F3D2E]" />
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-700">Lagos, Nigeria</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 md:px-12 bg-[#EAF4F0]">
        <div className="max-w-4xl mx-auto bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#0F3D2E]">
            Send Us a Message
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-lg shadow-md backdrop-blur-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-lg shadow-md backdrop-blur-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-4 rounded-lg shadow-md backdrop-blur-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] md:col-span-2"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-4 rounded-lg shadow-md backdrop-blur-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] md:col-span-2"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-[#0F3D2E] text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0F3D2E]">
          Our Location
        </h2>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="FARM-IQ Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.118290879768!2d3.379206314717097!3d6.524379323384303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4e5d6f01b39%3A0x5f21f152d36ebdab!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0F3D2E] text-white py-24 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F4C430]/10 mix-blend-screen"></div>
        <motion.div
          className="relative z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let's Build the Future of Agriculture Together
          </h2>
          <motion.button
            className="bg-[#F4C430] text-[#0F3D2E] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 mt-4"
            whileHover={{ scale: 1.05 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Contact;
