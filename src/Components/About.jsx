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
    <div className="bg-[#F5F5F5] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] sm:h-[70vh] flex flex-col justify-center items-center text-center px-6 sm:px-12"
        style={{ backgroundImage: `url(${Agric2})` }}
      >
        <div className="absolute inset-0 bg-[#0F3D2E]/70"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3 sm:mb-4">
            About FARM-IQ
          </h1>
          <p className="text-md sm:text-lg md:text-xl text-gray-200">
            Empowering young Africans to transform agriculture through
            innovation, technology, and knowledge.
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.img
            src={Agric4}
            alt="Vision and Mission"
            className="rounded-xl shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 hover:scale-105 transition-transform duration-300">
              <FaSeedling size={32} className="text-[#0F3D2E]" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F3D2E]">
                  Vision
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Revolutionize African agriculture with technology, innovation,
                  and sustainability.
                </p>
              </div>
            </div>
            <div className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 hover:scale-105 transition-transform duration-300">
              <FaLightbulb size={32} className="text-[#0F3D2E]" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F3D2E]">
                  Mission
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Educate, empower, and provide tools for young Africans to
                  innovate and modernize agriculture.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Agriculture Matters */}
      <section className="py-16 px-4 sm:px-12 bg-[#EAF4F0]">
        <motion.div
          className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#0F3D2E]">
            Why Agriculture Matters to Africa
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-3">
            Agriculture is Africa's backbone—creating jobs, sustaining
            communities, and driving innovation. By empowering farmers and
            leveraging technology, we can achieve food security and economic
            growth.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-3">
            FARM-IQ connects youth with opportunities, modern practices, and
            tech solutions to maximize impact.
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            Through education, sustainable farming practices, and technology
            adoption, African agriculture can feed the continent and compete
            globally.
          </p>
        </motion.div>
      </section>

      {/* Youth Involvement */}
      <section className="py-16 px-4 sm:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
          <motion.img
            src={Agric6}
            alt="Youth in Agriculture"
            className="rounded-xl shadow-lg w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-10 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3D2E]">
              Youth Involvement is Key
            </h2>
            <p className="text-gray-700 text-sm sm:text-base">
              Young Africans bring energy, creativity, and innovation to
              agriculture, ensuring technology adoption, improved productivity,
              and sustainability.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              By equipping youth with knowledge, tools, and networks, we can
              build a thriving agricultural ecosystem that supports the
              continent's growth.
            </p>

            {/* Counters */}
            <div
              ref={ref}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-6"
            >
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E]">
                  {counters.youth}+
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Youth Engaged
                </p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E]">
                  {counters.farms}+
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Farms Transformed
                </p>
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0F3D2E]">
                  {counters.tech}+
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Tech Solutions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Role of Technology */}
      <section className="py-16 px-4 sm:px-12 bg-[#EAF4F0]">
        <motion.div
          className="bg-white/40 backdrop-blur-md rounded-xl shadow-lg p-6 sm:p-10 max-w-5xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[#0F3D2E]">
            Role of Technology
          </h2>
          <p className="text-gray-700 text-sm sm:text-base mb-2">
            Technology is revolutionizing African agriculture with AI, drones,
            IoT, and smart solutions that improve yields, optimize resources,
            and connect farmers to markets.
          </p>
          <p className="text-gray-700 text-sm sm:text-base mb-4">
            Digital platforms and data-driven solutions empower farmers to make
            smarter decisions, reduce losses, and increase productivity
            sustainably.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-4">
            <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
              <FaLaptopCode size={32} className="mx-auto mb-2 text-[#0F3D2E]" />
              <h3 className="font-bold text-sm sm:text-base">AI Solutions</h3>
            </div>
            <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
              <FaSeedling size={32} className="mx-auto mb-2 text-[#0F3D2E]" />
              <h3 className="font-bold text-sm sm:text-base">Smart Farming</h3>
            </div>
            <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
              <FaLightbulb size={32} className="mx-auto mb-2 text-[#0F3D2E]" />
              <h3 className="font-bold text-sm sm:text-base">
                Innovative Tech
              </h3>
            </div>
            <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
              <FaUsers size={32} className="mx-auto mb-2 text-[#0F3D2E]" />
              <h3 className="font-bold text-sm sm:text-base">
                Connected Community
              </h3>
            </div>
            <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
              <FaGlobeAfrica
                size={32}
                className="mx-auto mb-2 text-[#0F3D2E]"
              />
              <h3 className="font-bold text-sm sm:text-base">Global Impact</h3>
            </div>
            <div className="bg-white/50 backdrop-blur-md rounded-xl p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
              <FaBook size={32} className="mx-auto mb-2 text-[#0F3D2E]" />
              <h3 className="font-bold text-sm sm:text-base">
                Education & Training
              </h3>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0F3D2E] text-white py-16 sm:py-24 px-4 sm:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#F4C430]/10 mix-blend-screen"></div>
        <motion.div
          className="relative z-10"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">
            Join Us in Shaping the Future of Agriculture
          </h2>
          <motion.button
            className="bg-[#F4C430] text-[#0F3D2E] font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 mt-2 sm:mt-4"
            whileHover={{ scale: 1.05 }}
          >
            Explore FARM-IQ
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
