import { useState } from "react";
import { motion } from "framer-motion";
import Agric3 from "../assets/Agric3.jpg";
import Agric4 from "../assets/Agric4.jpg";
import Agric5 from "../assets/Agric5.jpeg";
import Agric6 from "../assets/Agric6.jpeg";
import Agric7 from "../assets/Agric7.jpeg";
import Agric8 from "../assets/Agric8.jpeg";
import Agric9 from "../assets/Agric9.jpeg";
import Agric10 from "../assets/Agric10.jpeg";

function Learn() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      title: "Smart Irrigation Techniques",
      category: "Water Management",
      image: Agric5,
    },
    {
      title: "Organic Farming Essentials",
      category: "Sustainability",
      image: Agric7,
    },
    { title: "AgriTech Innovations", category: "Technology", image: Agric8 },
    {
      title: "Soil Health & Fertilization",
      category: "Soil Science",
      image: Agric4,
    },
    { title: "AI Crop Monitoring", category: "Technology", image: Agric9 },
    { title: "Youth in Agriculture", category: "Education", image: Agric6 },
    {
      title: "Climate Smart Agriculture",
      category: "Sustainability",
      image: Agric3,
    },
    {
      title: "Urban Farming Methods",
      category: "Urban Agriculture",
      image: Agric10,
    },
  ];

  const categories = [
    "All",
    "Technology",
    "Sustainability",
    "Education",
    "Water Management",
    "Soil Science",
    "Urban Agriculture",
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (selectedCategory === "All" || course.category === selectedCategory) &&
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F5F5F5] text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-12"
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
            Learn Agriculture with FARM-IQ
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Explore courses, workshops, and resources to grow your agricultural
            knowledge and skills.
          </p>
        </motion.div>
      </section>

      {/* Filters Section */}
      <section className="py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full font-medium ${
                  selectedCategory === cat
                    ? "bg-[#0F3D2E] text-white shadow-lg"
                    : "bg-white/50 backdrop-blur-md text-[#0F3D2E] shadow-md hover:shadow-xl transition-shadow duration-300"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-full shadow-md backdrop-blur-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] placeholder-gray-500"
          />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <motion.div
                key={idx}
                className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${course.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-gray-700 font-medium mb-2">
                    {course.category}
                  </p>
                  <p className="text-gray-600">
                    Gain insights, hands-on skills, and modern techniques to
                    excel in agriculture.
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-700 col-span-full text-center mt-8">
              No courses found for your search or selected category.
            </p>
          )}
        </div>
      </section>

      {/* Featured Instructors */}
      <section className="py-20 px-6 md:px-12 bg-[#EAF4F0]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet Our Instructors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[Agric6, Agric7, Agric8].map((img, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden text-center p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="h-48 w-48 mx-auto rounded-full bg-cover bg-center mb-4"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
              <h3 className="text-xl font-bold mb-1">John Doe</h3>
              <p className="text-gray-700">AgriTech Specialist</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "FARM-IQ courses helped me transform my small farm into a thriving business.",
              name: "Chinedu A.",
            },
            {
              text: "The AgriTech workshops introduced me to smart farming techniques I never knew existed.",
              name: "Amaka O.",
            },
            {
              text: "Thanks to FARM-IQ, I feel confident using modern technology to boost productivity.",
              name: "Tunde M.",
            },
          ].map((testimonial, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
              <h4 className="text-[#0F3D2E] font-bold">{testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Upcoming Workshops & Events */}
      <section className="py-20 px-6 md:px-12 bg-[#EAF4F0]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Upcoming Workshops & Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Smart Irrigation Workshop",
              date: "Jan 15, 2026",
              description:
                "Learn advanced irrigation techniques to optimize water use and crop yields.",
              image: Agric5,
            },
            {
              title: "Organic Farming Bootcamp",
              date: "Feb 8, 2026",
              description:
                "Hands-on training in sustainable and organic farming practices.",
              image: Agric7,
            },
            {
              title: "AgriTech Innovations Expo",
              date: "Mar 20, 2026",
              description:
                "Discover the latest technologies transforming agriculture across Africa.",
              image: Agric8,
            },
          ].map((event, idx) => (
            <motion.div
              key={idx}
              className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{event.date}</p>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action */}
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
            Ready to Elevate Your Agricultural Skills?
          </h2>
          <motion.button
            className="bg-[#F4C430] text-[#0F3D2E] font-bold px-10 py-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 mt-4"
            whileHover={{ scale: 1.05 }}
          >
            Explore FARM-IQ Courses
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default Learn;
