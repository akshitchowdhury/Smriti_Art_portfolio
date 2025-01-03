import React from 'react';
import "./GalleryCategories.css";
import s1 from "../../../assets/artDump/Sketch/s8.jpg";
import s2 from "../../../assets/artDump/misc/m7.jpg";
import s3 from "../../../assets/artDump/Exhibition/e12.jpg";

const GalleryCategories = () => {
  const categories = [
    { id: 1, img: s1, title: 'Sketch Art' },
    { id: 2, img: s2, title: 'Abstract' },
    { id: 3, img: s3, title: 'Acrylic' }
  ];

  return (
    <div className="gallery-main-container w-full h-full md:h-[100vh] overflow-hidden relative">
      <div className="glassPic"></div>
      <div className="glass-overlay"></div>
      <div className="relative z-10 p-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-lg h-[500px] shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            {/* Image */}
            <img
              src={category.img}
              alt={category.title}
              className="w-full h-[500px] object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-300 group-hover:bg-opacity-20"></div>

            {/* Title (Disappears on Hover) */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            >
              <h2 className="text-white text-xl font-semibold">
                {category.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryCategories;
