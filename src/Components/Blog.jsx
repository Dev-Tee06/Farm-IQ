import { useState } from "react";
import { motion } from "framer-motion";
import Agric3 from "../assets/Agric3.jpg";
import Agric4 from "../assets/Agric4.jpg";
import Agric5 from "../assets/Agric5.jpeg";
import Agric6 from "../assets/Agric6.jpeg";
import Agric7 from "../assets/Agric7.jpeg";
import Agric8 from "../assets/Agric8.jpeg";
import Agric9 from "../assets/Agric9.jpeg";

const blogPosts = [
  { title: "AgriTech Trends 2025", category: "Technology", image: Agric8 },
  {
    title: "Sustainable Farming Methods",
    category: "Sustainability",
    image: Agric4,
  },
  { title: "Youth in Agriculture", category: "Education", image: Agric6 },
  { title: "AI Crop Monitoring", category: "Technology", image: Agric9 },
  {
    title: "Organic Farming Benefits",
    category: "Sustainability",
    image: Agric3,
  },
  {
    title: "Urban Agriculture Innovations",
    category: "Technology",
    image: Agric5,
  },
  { title: "Training Young Farmers", category: "Education", image: Agric7 },
];

const categories = ["All", "Technology", "Sustainability", "Education"];

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (selectedCategory === "All" || post.category === selectedCategory) &&
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#F5F5F5] min-h-screen text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-12"
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
            FARM-IQ Blog
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Insights, trends, and stories shaping the future of African
            agriculture.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="py-10 px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 space-y-4 md:space-y-0">
          {/* Categories */}
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
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 rounded-full shadow-md backdrop-blur-md bg-white/50 focus:outline-none focus:ring-2 focus:ring-[#0F3D2E] placeholder-gray-500"
          />
        </div>

        {/* Trending Categories */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Trending Categories</h3>
          <div className="flex flex-wrap gap-3">
            {["Technology", "Sustainability", "Education"].map((cat, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-[#F4C430]/40 text-[#0F3D2E] rounded-full font-medium cursor-pointer hover:bg-[#F4C430]/60 transition-colors duration-300"
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
                className="bg-white/50 backdrop-blur-md rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-700 font-medium mb-2">
                    {post.category}
                  </p>
                  <p className="text-gray-600">
                    Explore this article to learn how technology and innovation
                    are transforming African agriculture.
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-700 col-span-full text-center mt-8">
              No posts found for your search or selected category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Blog;
