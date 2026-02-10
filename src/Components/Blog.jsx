import { useState } from "react";
import { motion } from "framer-motion";
import Agric3 from "../assets/Agric3.jpg";
import Agric4 from "../assets/Agric4.jpg";
import Agric5 from "../assets/Agric5.jpeg";
import Agric6 from "../assets/Agric6.jpeg";
import Agric7 from "../assets/Agric7.jpeg";
import Agric8 from "../assets/Agric8.jpeg";
import Agric9 from "../assets/Agric9.jpeg";
import { FaUser, FaClock, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const blogPosts = [
  {
    title: "AgriTech Trends 2025",
    category: "Technology",
    image: Agric8,
    author: "Jane Okafor",
    time: "5 min read",
  },
  {
    title: "Sustainable Farming Methods",
    category: "Sustainability",
    image: Agric4,
    author: "John Ade",
    time: "6 min read",
  },
  {
    title: "Youth in Agriculture",
    category: "Education",
    image: Agric6,
    author: "FARM-IQ Team",
    time: "4 min read",
  },
  {
    title: "AI Crop Monitoring",
    category: "Technology",
    image: Agric9,
    author: "Mary Nwosu",
    time: "7 min read",
  },
  {
    title: "Organic Farming Benefits",
    category: "Sustainability",
    image: Agric3,
    author: "James Eze",
    time: "5 min read",
  },
  {
    title: "Urban Agriculture Innovations",
    category: "Technology",
    image: Agric5,
    author: "Pauline Ayo",
    time: "6 min read",
  },
  {
    title: "Training Young Farmers",
    category: "Education",
    image: Agric7,
    author: "FARM-IQ Team",
    time: "5 min read",
  },
];

const categories = ["All", "Technology", "Sustainability", "Education"];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const featuredArticles = blogPosts.slice(0, 3); // first 3 as featured

  const prevArticle = () =>
    setCarouselIndex((prev) =>
      prev === 0 ? featuredArticles.length - 1 : prev - 1,
    );
  const nextArticle = () =>
    setCarouselIndex((prev) =>
      prev === featuredArticles.length - 1 ? 0 : prev + 1,
    );

  return (
    <div className="bg-gradient-to-b from-[#F7FAF9] via-[#EEF6F3] to-[#EAF4F0] min-h-screen text-gray-800 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-12"
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
            FARM-IQ Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Insights, trends, and stories shaping the future of African
            agriculture.
          </p>
        </motion.div>
      </section>

      {/* Featured Article Carousel */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h3 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent">
          Featured Articles
        </h3>
        <div className="relative bg-white/30 backdrop-blur-xl rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h4 className="text-xl md:text-2xl font-bold mb-2">
              {featuredArticles[carouselIndex].title}
            </h4>
            <div className="flex items-center gap-4 text-sm text-gray-700 mb-3">
              <span className="flex items-center gap-1">
                <FaUser size={12} /> {featuredArticles[carouselIndex].author}
              </span>
              <span className="flex items-center gap-1">
                <FaClock size={12} /> {featuredArticles[carouselIndex].time}
              </span>
            </div>
            <p className="text-gray-700">
              Explore this article to learn how technology and innovation are
              transforming African agriculture.
            </p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button
              onClick={prevArticle}
              className="p-3 bg-white/10 rounded-full hover:bg-[#F4C430] hover:text-[#0F3D2E] transition"
            >
              <FaChevronLeft size={16} />
            </button>
            <button
              onClick={nextArticle}
              className="p-3 bg-white/10 rounded-full hover:bg-[#F4C430] hover:text-[#0F3D2E] transition"
            >
              <FaChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
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
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-5 py-2 rounded-full backdrop-blur-xl bg-white/50 border border-white/30 shadow-md focus:outline-none focus:ring-2 focus:ring-[#0F3D2E]"
          />
        </div>

        {/* Trending Categories */}
        <div className="mb-12">
          <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#0F3D2E] to-[#1B6B4F] bg-clip-text text-transparent">
            Trending Categories
          </h3>
          <div className="flex flex-wrap gap-3">
            {["Technology", "Sustainability", "Education"].map((cat, idx) => (
              <span
                key={idx}
                className="px-4 py-1 bg-gradient-to-r from-[#F4C430]/60 to-[#FFD966]/60 text-[#0F3D2E] rounded-full font-medium cursor-pointer hover:shadow-md transition"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, idx) => (
              <motion.div
                key={idx}
                className="bg-white/50 backdrop-blur-xl border border-white/30 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-700 mb-2">
                    <span className="flex items-center gap-1">
                      <FaUser size={12} /> {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock size={12} /> {post.time}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    Explore this article to learn how technology and innovation
                    are transforming African agriculture.
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-700 col-span-full text-center mt-10">
              No posts found for your search or selected category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
