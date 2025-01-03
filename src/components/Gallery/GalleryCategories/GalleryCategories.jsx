import React, { useState } from "react";
import { X } from "lucide-react";
import s1 from "../../../assets/artDump/Sketch/s8.jpg";
import s2 from "../../../assets/artDump/misc/m7.jpg";
import s3 from "../../../assets/artDump/Exhibition/e12.jpg";
import "./GalleryCategories.css";

const GalleryCategories = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      img: s1,
      title: "Sketch Art",
      bgClass: "bg-sketch",
      description:
        "Sketch art captures the essence of a subject with minimal, expressive lines. It is a raw form of artistic expression that often serves as a foundation for more complex works.",
    },
    {
      id: 2,
      img: s2,
      title: "Abstract",
      bgClass: "bg-abstract",
      description:
        "Abstract art uses colors, shapes, and forms to create compositions that may not have a recognizable subject. It is about evoking emotions and ideas rather than depicting reality.",
    },
    {
      id: 3,
      img: s3,
      title: "Acrylic",
      bgClass: "bg-acrylic",
      description:
        "Acrylic painting is known for its vibrant colors and versatility. It dries quickly, allowing artists to build layers and create various textures and effects.",
    },
  ];

  const handleCategoryClick = (category) => {
    setExpandedCategory(category);
  };

  const handleCloseExpanded = () => {
    setExpandedCategory(null);
  };

  return (
    <div className="gallery-main-container w-full min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div
        className={`glassPic ${
          hoveredCategory || (expandedCategory && expandedCategory.bgClass)
        }`}
      ></div>
      <div className="glass-overlay"></div>

      {/* Content */}
      <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">
        {expandedCategory ? (
          <div
            className="bg-white bg-opacity-90 rounded-lg overflow-hidden transition-all duration-700 ease-in-out transform scale-100 opacity-100"
            onClick={handleCloseExpanded}
          >
            <div className="flex flex-col md:flex-row h-[calc(100vh-4rem)]">
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative">
                <img
                  src={expandedCategory.img}
                  alt={expandedCategory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {expandedCategory.title}
                  </h2>
                  <p className="text-lg">{expandedCategory.description}</p>
                </div>
                <button
                  onClick={handleCloseExpanded}
                  className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-opacity-80 transition-colors duration-300 self-start"
                >
                  Back to Gallery
                </button>
              </div>
            </div>
            <button
              onClick={handleCloseExpanded}
              className="absolute top-4 right-4 text-black hover:text-gray-700 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`group relative overflow-hidden rounded-lg h-[300px] md:h-[400px] lg:h-[500px] shadow-lg transform transition-transform duration-500 hover:scale-105 cursor-pointer ${category.bgClass}`}
                onMouseEnter={() => setHoveredCategory(category.bgClass)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => handleCategoryClick(category)}
              >
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  <h2 className="text-white text-xl md:text-2xl font-semibold">
                    {category.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryCategories;
