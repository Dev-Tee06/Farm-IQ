import { motion } from "framer-motion";
import Agric3 from "../assets/Agric3.jpg";
import Agric4 from "../assets/Agric4.jpg";
import Agric5 from "../assets/Agric5.jpeg";
import Agric6 from "../assets/Agric6.jpeg";
import Agric7 from "../assets/Agric7.jpeg";
import Agric8 from "../assets/Agric8.jpeg";
import Agric9 from "../assets/Agric9.jpeg";
import Agric10 from "../assets/Agric10.jpeg";
import Agric11 from "../assets/Agric11.jpeg";
import {
  FaRobot,
  FaSeedling,
  FaLaptopCode,
  FaLightbulb,
  FaChartLine,
  FaNetworkWired,
} from "react-icons/fa";

function Tech() {
  const solutions = [
    {
      title: "AI Crop Monitoring",
      description:
        "Predictive analytics to optimize yields and reduce crop loss.",
      image: Agric9,
      icon: <FaRobot size={36} className="mx-auto mb-2 text-[#0F3D2E]" />,
    },
    {
      title: "Smart Irrigation",
      description: "Automated water-saving systems for sustainable farming.",
      image: Agric5,
      icon: <FaSeedling size={36} className="mx-auto mb-2 text-[#0F3D2E]" />,
    },
    {
      title: "Drone Technology",
      description: "High-tech drone monitoring for crops and soil health.",
      image: Agric8,
      icon: <FaLaptopCode size={36} className="mx-auto mb-2 text-[#0F3D2E]" />,
    },
    {
      title: "IoT Sensors",
      description:
        "Real-time data collection for smart agriculture management.",
      image: Agric7,
      icon: <FaLightbulb size={36} className="mx-auto mb-2 text-[#0F3D2E]" />,
    },
    {
      title: "Data Analytics",
      description: "Leverage data to make smarter farming decisions.",
      image: Agric10,
      icon: <FaChartLine size={36} className="mx-auto mb-2 text-[#0F3D2E]" />,
    },
    {
      title: "Connected Farmer Network",
      description:
        "Digital platform connecting farmers with experts and markets.",
      image: Agric11,
      icon: (
        <FaNetworkWired size={36} className="mx-auto mb-2 text-[#0F3D2E]" />
      ),
    },
  ];

  const caseStudies = [
    {
      farm: "Green Valley Farms",
      challenge: "Water wastage and inefficient irrigation.",
      solution:
        "Implemented smart IoT irrigation systems, increasing yield by 35%.",
      image: Agric6,
    },
    {
      farm: "Sunrise AgroTech",
      challenge: "Lack of crop monitoring leading to losses.",
      solution:
        "AI crop monitoring reduced losses by 25% and optimized harvest schedules.",
      image: Agric3,
    },
    {
      farm: "Urban Youth Farm",
      challenge: "Limited access to market and technical guidance.",
      solution:
        "Connected to a digital network of experts, boosting sales and efficiency.",
      image: Agric7,
    },
  ];

  return (
    <div className="bg-[#F5F5F5] text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex flex-col justify-center items-center text-center px-6 md:px-12"
        style={{ backgroundImage: `url(${Agric4})` }}
      >
        <div className="absolute inset-0 bg-[#0F3D2E]/70"></div>
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
            Agriculture Technology Innovations
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Discover cutting-edge solutions transforming African agriculture.
          </p>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Agric-Tech Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="h-40 mb-4 rounded-lg bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url(${solution.image})` }}
              ></div>
              {solution.icon}
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className="text-gray-700">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-6 md:px-12 bg-[#EAF4F0]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Case Studies & Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${caseStudy.image})` }}
              ></div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold mb-2">{caseStudy.farm}</h3>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Challenge:</span>{" "}
                  {caseStudy.challenge}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Solution:</span>{" "}
                  {caseStudy.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Technologies */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[Agric3, Agric6, Agric7].map((img, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
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
            Transform Your Farm with Modern Technology
          </h2>
          <motion.button
            className="bg-[#F4C430] text-[#0F3D2E] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 mt-4"
            whileHover={{ scale: 1.05 }}
          >
            Explore Agric-Tech Solutions
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Tech;
