import { motion } from "framer-motion";
import {
  FaSeedling,
  FaLightbulb,
  FaUsers,
  FaLaptopCode,
  FaGlobeAfrica,
  FaBook,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Agric2 from "../assets/Agric2.jpeg";
import Agric4 from "../assets/Agric4.jpg";
import Agric6 from "../assets/Agric6.jpeg";

function About() {
  const [counters, setCounters] = useState({ youth: 0, farms: 0, tech: 0 });
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let youth = 0,
        farms = 0,
        tech = 0;
      const interval = setInterval(() => {
        if (youth < 5000) youth += 250;
        if (farms < 1200) farms += 60;
        if (tech < 200) tech += 10;
        setCounters({ youth, farms, tech });
        if (youth >= 5000 && farms >= 1200 && tech >= 200)
          clearInterval(interval);
      }, 50);
    }
  }, [inView]);

  return (
    <div className="bg-gradient-to-b from-[#F7FAF9] via-[#EEF6F3] to-[#EAF4F0] text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] sm:h-[70vh] flex items-center justify-center text-center px-6 sm:px-12"
        style={{ backgroundImage: `url(${Agric2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D2E]/90 via-[#0F3D2E]/75 to-black/60" />

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            About FARM-IQ
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            Empowering young Africans to transform agriculture through
            innovation, technology, and knowledge.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.img
            src={Agric4}
            alt="Vision and Mission"
            className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition duration-500"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaSeedling size={34} />,
                title: "Vision",
                text: "Revolutionize African agriculture with technology, innovation, and sustainability.",
              },
              {
                icon: <FaLightbulb size={34} />,
                title: "Mission",
                text: "Educate, empower, and provide tools for young Africans to innovate and modernize agriculture.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-6 flex gap-4 hover:scale-105 transition"
              >
                <div className="text-[#0F3D2E]">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Agriculture Matters */}
      <section className="py-20 px-4 sm:px-12">
        <motion.div
          className="max-w-5xl mx-auto bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent">
            Why Agriculture Matters to Africa
          </h2>
          <p className="text-gray-700 mb-4">
            Agriculture is Africa's backbone—creating jobs, sustaining
            communities, and driving innovation. By empowering farmers and
            leveraging technology, we can achieve food security and economic
            growth.
          </p>
          <p className="text-gray-700 mb-4">
            FARM-IQ connects youth with opportunities, modern practices, and
            tech solutions to maximize impact.
          </p>
          <p className="text-gray-700">
            Through education, sustainable farming practices, and technology
            adoption, African agriculture can feed the continent and compete
            globally.
          </p>
        </motion.div>
      </section>

      {/* Youth Involvement */}
      <section className="py-20 px-4 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <motion.img
            src={Agric6}
            alt="Youth in Agriculture"
            className="rounded-2xl shadow-xl w-full object-cover hover:scale-105 transition duration-500"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 sm:p-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent">
              Youth Involvement is Key
            </h2>

            <p className="text-gray-700 mb-4">
              Young Africans bring energy, creativity, and innovation to
              agriculture, ensuring technology adoption, improved productivity,
              and sustainability.
            </p>
            <p className="text-gray-700 mb-6">
              By equipping youth with knowledge, tools, and networks, we can
              build a thriving agricultural ecosystem.
            </p>

            <div ref={ref} className="grid grid-cols-3 gap-6 text-center">
              {[
                { value: counters.youth, label: "Youth Engaged" },
                { value: counters.farms, label: "Farms Transformed" },
                { value: counters.tech, label: "Tech Solutions" },
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="text-4xl font-extrabold bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent">
                    {item.value}+
                  </h3>
                  <p className="text-gray-700">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role of Technology */}
      <section className="py-20 px-4 sm:px-12">
        <motion.div
          className="max-w-6xl mx-auto bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold mb-6 bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent">
            Role of Technology
          </h2>

          <p className="text-gray-700 mb-6">
            Technology is revolutionizing African agriculture with AI, drones,
            IoT, and smart solutions that improve yields and connect farmers to
            markets.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { icon: <FaLaptopCode />, label: "AI Solutions" },
              { icon: <FaSeedling />, label: "Smart Farming" },
              { icon: <FaLightbulb />, label: "Innovative Tech" },
              { icon: <FaUsers />, label: "Connected Community" },
              { icon: <FaGlobeAfrica />, label: "Global Impact" },
              { icon: <FaBook />, label: "Education & Training" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center hover:scale-105 hover:shadow-xl transition"
              >
                <div className="text-[#0F3D2E] text-3xl mb-2 mx-auto">
                  {item.icon}
                </div>
                <h3 className="font-bold">{item.label}</h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 text-center bg-[#0F3D2E] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F4C430]/20 to-transparent" />

        <motion.div
          className="relative z-10 px-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Join Us in Shaping the Future of Agriculture
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-[#F4C430] to-[#FFD966] text-[#0F3D2E] font-bold px-10 py-4 rounded-full shadow-[0_10px_30px_rgba(244,196,48,0.5)]"
          >
            Explore FARM-IQ
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
