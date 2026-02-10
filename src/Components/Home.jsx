import { motion } from "framer-motion";
import {
  FaAppleAlt,
  FaUserFriends,
  FaRobot,
  FaSeedling,
  FaLightbulb,
  FaChartLine,
  FaGlobeAfrica,
  FaHandsHelping,
  FaRegNewspaper,
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
    <div className="bg-gradient-to-b from-[#F3FAF7] via-white to-[#EAF4F0] text-gray-800">
      {/* ================= HERO ================= */}
      <section
        className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12"
        style={{ backgroundImage: `url(${Agric2})` }}
      >
        <div className="absolute  inset-0 bg-gradient-to-br from-[#0F3D2E]/90 via-[#0F3D2E]/70 to-black/60"></div>

        <motion.div
          className="relative pt-25 z-10 max-w-4xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Shaping the Future of Agriculture through Technology
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Empowering young Africans to innovate, grow, and transform
            agriculture using modern technology.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            className="bg-gradient-to-r from-[#F4C430] to-yellow-400 text-[#0F3D2E] font-bold px-10 py-4 rounded-xl shadow-xl"
          >
            Explore FARM-IQ
          </motion.button>
        </motion.div>
      </section>

      {/* ================= IMPACT STATS ================= */}
      <section className="py-24 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          FARM-IQ Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              icon: <FaAppleAlt size={46} className="mx-auto text-[#0F3D2E]" />,
              value: "1M+",
              label: "Food Supplies Managed",
            },
            {
              icon: (
                <FaUserFriends size={46} className="mx-auto text-[#0F3D2E]" />
              ),
              value: "500K+",
              label: "Jobs Created",
            },
            {
              icon: <FaRobot size={46} className="mx-auto text-[#0F3D2E]" />,
              value: "200+",
              label: "AgriTech Innovations",
            },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06 }}
              className="bg-white/50 backdrop-blur-xl border border-white/30 p-10 rounded-2xl shadow-xl"
            >
              {stat.icon}
              <h3 className="text-5xl font-extrabold mt-4 text-[#0F3D2E]">
                {stat.value}
              </h3>
              <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED ARTICLES ================= */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-[#EAF4F0] to-[#F3FAF7]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "AgriTech Trends 2025", image: Agric8 },
            { title: "Sustainable Farming", image: Agric4 },
            { title: "Youth in Agriculture", image: Agric6 },
          ].map((article, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white/60 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl overflow-hidden"
            >
              <div
                className="h-52 bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-700">
                  Learn how technology is revolutionizing agriculture and
                  creating opportunities for the next generation.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= NEW: WHAT WE OFFER ================= */}
      <section className="py-24 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          What FARM-IQ Offers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              icon: <FaSeedling />,
              title: "Smart Farming",
              desc: "Modern tools for efficient crop production.",
            },
            {
              icon: <FaChartLine />,
              title: "Data & Analytics",
              desc: "Actionable insights for higher yields.",
            },
            {
              icon: <FaGlobeAfrica />,
              title: "Community Access",
              desc: "Connect farmers across Africa.",
            },
            {
              icon: <FaHandsHelping />,
              title: "Mentorship",
              desc: "Guidance from industry experts.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06 }}
              className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl p-8 text-center shadow-xl"
            >
              <div className="text-3xl text-[#0F3D2E] mx-auto mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= AGITECH HIGHLIGHTS (UNCHANGED, POLISHED) ================= */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-[#F3FAF7] to-[#EAF4F0]">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          AgriTech Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Drone Farming",
              desc: "Automated crop monitoring with drones",
              image: Agric9,
            },
            {
              title: "Smart Irrigation",
              desc: "Water-saving irrigation technologies",
              image: Agric10,
            },
            {
              title: "AI Crop Monitoring",
              desc: "Predictive AI solutions for farms",
              image: Agric11,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.06 }}
              className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl overflow-hidden"
            >
              <div
                className="h-44 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-8 text-center">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="py-24 px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Stay Updated with FARM-IQ
        </h2>
        <p className="text-gray-600 mb-10">
          Get insights, opportunities, and innovation stories straight to your
          inbox.
        </p>

        <div className="max-w-xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-xl bg-white/60 backdrop-blur-md border border-white/30 outline-none"
          />
          <button className="bg-gradient-to-r from-[#F4C430] to-yellow-400 text-[#0F3D2E] font-bold px-8 py-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
            <FaRegNewspaper /> Subscribe
          </button>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative bg-gradient-to-br from-[#0F3D2E] to-black text-white py-28 px-6 md:px-12 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#F4C430]/10 blur-3xl"></div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Explore the Future of Agriculture?
          </h2>

          <motion.button
            whileHover={{ scale: 1.08 }}
            className="bg-gradient-to-r from-[#F4C430] to-yellow-400 text-[#0F3D2E] font-bold px-12 py-4 rounded-xl shadow-2xl"
          >
            Explore FARM-IQ
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;
