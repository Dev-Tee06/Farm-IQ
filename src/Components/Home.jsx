import { motion } from "framer-motion";
import {
  FaAppleAlt,
  FaUserFriends,
  FaRobot,
  FaSeedling,
  FaLightbulb,
} from "react-icons/fa";
import Agric2 from "../assets/Agric2.jpeg";
import Agric4 from "../assets/Agric4.jpg";
import Agric6 from "../assets/Agric6.jpeg";
import Agric8 from "../assets/Agric8.jpeg";
import Agric9 from "../assets/Agric9.jpeg";
import Agric10 from "../assets/Agric10.jpeg";
import Agric11 from "../assets/Agric11.jpeg";

function Home() {
  return (
    <div className="bg-[#F5F5F5] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[120vh] flex flex-col justify-center items-center text-center px-6 md:px-12"
        style={{ backgroundImage: `url(${Agric2})` }}
      >
        <div className="absolute inset-0 bg-[#0F3D2E]/70"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Shaping the Future of Agriculture through Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Empowering young Africans to innovate, grow, and transform
            agriculture using modern technology.
          </p>
          <motion.button
            className="bg-[#F4C430] text-[#0F3D2E] font-bold px-8 py-3 rounded-md shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore FARM-IQ
          </motion.button>
        </motion.div>
      </section>

      {/* Key Stats */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">FARM-IQ Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: (
                <FaAppleAlt size={48} className="mx-auto mb-4 text-[#0F3D2E]" />
              ),
              value: "1M+",
              label: "Food Supplies Managed",
            },
            {
              icon: (
                <FaUserFriends
                  size={48}
                  className="mx-auto mb-4 text-[#0F3D2E]"
                />
              ),
              value: "500K+",
              label: "Jobs Created",
            },
            {
              icon: (
                <FaRobot size={48} className="mx-auto mb-4 text-[#0F3D2E]" />
              ),
              value: "200+",
              label: "AgriTech Innovations",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {stat.icon}
              <h3 className="text-5xl font-extrabold text-[#0F3D2E]">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 px-6 md:px-12 bg-[#EAF4F0]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "AgriTech Trends 2025", image: Agric8 },
            { title: "Sustainable Farming", image: Agric4 },
            { title: "Youth in Agriculture", image: Agric6 },
          ].map((article, idx) => (
            <motion.div
              key={idx}
              className="bg-white/60 backdrop-blur-md rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="h-48 bg-cover bg-center flex items-center justify-center font-bold text-xl text-white relative"
                style={{ backgroundImage: `url(${article.image})` }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-t-xl"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-700">
                  Learn how technology is revolutionizing agriculture and
                  creating opportunities for the next generation.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AgriTech Highlights */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          AgriTech Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Drone Farming",
              description: "Automated crop monitoring with drones",
              image: Agric9,
            },
            {
              title: "Smart Irrigation",
              description: "Water-saving irrigation technologies",
              image: Agric10,
            },
            {
              title: "AI Crop Monitoring",
              description: "Predictive AI solutions for farms",
              image: Agric11,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="relative group bg-white/40 backdrop-blur-md text-[#0F3D2E] rounded-xl shadow-lg p-8 text-center cursor-pointer hover:scale-105 transition-transform duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="h-40 mb-4 rounded-lg bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
              <motion.div className="absolute inset-0 bg-[#F4C430]/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Features / Benefits */}
      <section className="py-20 px-6 md:px-12 bg-[#EAF4F0]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why FARM-IQ is Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: (
                <FaSeedling size={36} className="mx-auto mb-2 text-[#0F3D2E]" />
              ),
              title: "Innovate",
              desc: "Bring new ideas to life in agriculture.",
            },
            {
              icon: (
                <FaLightbulb
                  size={36}
                  className="mx-auto mb-2 text-[#0F3D2E]"
                />
              ),
              title: "Learn",
              desc: "Master modern farming techniques.",
            },
            {
              icon: (
                <FaUserFriends
                  size={36}
                  className="mx-auto mb-2 text-[#0F3D2E]"
                />
              ),
              title: "Network",
              desc: "Connect with young farmers and experts.",
            },
            {
              icon: (
                <FaRobot size={36} className="mx-auto mb-2 text-[#0F3D2E]" />
              ),
              title: "Grow",
              desc: "Increase productivity with smart tools.",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F5]">
        <h2 className="text-3xl font-bold text-center mb-12">
          What People Say About FARM-IQ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Amina Yusuf",
              role: "Young Farmer",
              text: "FARM-IQ has transformed how I manage my farm. Technology makes everything easier!",
            },
            {
              name: "Tunde Ade",
              role: "AgriTech Entrepreneur",
              text: "The insights and tools from FARM-IQ helped me increase yields and revenue.",
            },
            {
              name: "Chinwe Okeke",
              role: "Agriculture Student",
              text: "I feel empowered and ready to innovate in agriculture thanks to FARM-IQ.",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <h3 className="font-bold text-[#0F3D2E]">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm">{testimonial.role}</p>
            </motion.div>
          ))}
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
            Ready to Explore the Future of Agriculture?
          </h2>
          <motion.button
            className="bg-[#F4C430] text-[#0F3D2E] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 mt-4"
            whileHover={{ scale: 1.05 }}
          >
            Explore FARM-IQ
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
