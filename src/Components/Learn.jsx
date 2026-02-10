import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaClock, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
  const [carouselIndex, setCarouselIndex] = useState(0);

  const courses = [
    {
      title: "Smart Irrigation Techniques",
      category: "Water Management",
      image: Agric5,
      author: "John Ade",
      time: "6 min read",
      trending: true,
      progress: 70,
    },
    {
      title: "Organic Farming Essentials",
      category: "Sustainability",
      image: Agric7,
      author: "Amaka Obi",
      time: "5 min read",
      trending: false,
      progress: 40,
    },
    {
      title: "AgriTech Innovations",
      category: "Technology",
      image: Agric8,
      author: "Mary Nwosu",
      time: "7 min read",
      trending: true,
      progress: 55,
    },
    {
      title: "Soil Health & Fertilization",
      category: "Soil Science",
      image: Agric4,
      author: "James Eze",
      time: "6 min read",
      trending: false,
      progress: 80,
    },
    {
      title: "AI Crop Monitoring",
      category: "Technology",
      image: Agric9,
      author: "Pauline Ayo",
      time: "5 min read",
      trending: true,
      progress: 60,
    },
    {
      title: "Youth in Agriculture",
      category: "Education",
      image: Agric6,
      author: "FARM-IQ Team",
      time: "4 min read",
      trending: false,
      progress: 30,
    },
    {
      title: "Climate Smart Agriculture",
      category: "Sustainability",
      image: Agric3,
      author: "Chinedu A.",
      time: "6 min read",
      trending: false,
      progress: 50,
    },
    {
      title: "Urban Farming Methods",
      category: "Urban Agriculture",
      image: Agric10,
      author: "Tunde M.",
      time: "5 min read",
      trending: true,
      progress: 90,
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
      course.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const featuredCourses = courses.filter((c) => c.trending);

  // Auto-play carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) =>
        prev === featuredCourses.length - 1 ? 0 : prev + 1,
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredCourses.length]);

  const prevCourse = () =>
    setCarouselIndex(
      carouselIndex === 0 ? featuredCourses.length - 1 : carouselIndex - 1,
    );
  const nextCourse = () =>
    setCarouselIndex(
      carouselIndex === featuredCourses.length - 1 ? 0 : carouselIndex + 1,
    );

  return (
    <div className="bg-gradient-to-b from-[#F7FAF9] via-[#EEF6F3] to-[#EAF4F0] text-gray-800 min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[90vh] flex flex-col justify-center items-center text-center px-6 md:px-12"
        style={{ backgroundImage: `url(${Agric4})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F3D2E]/90 via-[#0F3D2E]/75 to-black/60"></div>
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

      {/* Featured Courses Carousel */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent text-center">
          Featured Courses
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              className="bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -200 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex-1 relative">
                {featuredCourses[carouselIndex].trending && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F4C430] to-[#FFD966] text-[#0F3D2E] px-4 py-1 rounded-full font-bold text-sm shadow-md z-10">
                    Trending
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">
                  {featuredCourses[carouselIndex].title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-700 mb-3">
                  <span className="flex items-center gap-1">
                    <FaUser size={12} /> {featuredCourses[carouselIndex].author}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock size={12} /> {featuredCourses[carouselIndex].time}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">
                  Enhance your skills with modern techniques and hands-on
                  insights from industry experts.
                </p>
                {/* Dynamic Progress Bar */}
                <div className="w-full bg-white/30 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] h-3 rounded-full"
                    style={{
                      width: `${featuredCourses[carouselIndex].progress}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-gray-700 mt-1">
                  {featuredCourses[carouselIndex].progress}% completed
                </p>
              </div>

              <div className="flex gap-4 mt-4 md:mt-0">
                <button
                  onClick={prevCourse}
                  className="p-3 bg-white/10 rounded-full hover:bg-[#F4C430] hover:text-[#0F3D2E] transition"
                >
                  <FaChevronLeft size={16} />
                </button>
                <button
                  onClick={nextCourse}
                  className="p-3 bg-white/10 rounded-full hover:bg-[#F4C430] hover:text-[#0F3D2E] transition"
                >
                  <FaChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] text-white shadow-lg"
                    : "bg-white/50 backdrop-blur-xl border border-white/30 text-[#0F3D2E] hover:shadow-xl"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-full shadow-md backdrop-blur-xl bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] placeholder-gray-500"
          />
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course, idx) => (
              <motion.div
                key={idx}
                className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {course.trending && (
                  <div className="absolute top-3 left-3 bg-gradient-to-r from-[#F4C430] to-[#FFD966] text-[#0F3D2E] px-3 py-1 rounded-full font-bold text-sm shadow-md">
                    Trending
                  </div>
                )}
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${course.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-700 mb-2">
                    <span className="flex items-center gap-1">
                      <FaUser size={12} /> {course.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={12} /> {course.time}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Gain insights, hands-on skills, and modern techniques to
                    excel in agriculture.
                  </p>
                  {/* Progress Bar */}
                  <div className="w-full bg-white/30 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] h-3 rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-700 mt-1">
                    {course.progress}% completed
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

      {/* You can keep Instructors, Testimonials, Workshops, Call-to-Action sections with the same enhancements */}
    </div>
  );
}

export default Learn;
