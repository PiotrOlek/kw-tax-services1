import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-2">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="">
              <h2 className="h2 leading-tight text-accent">
                Cennik <br />
              </h2>
              <p className="max-w-sm mb-10">Podane ceny są cenami netto.</p>
              <button className="btn btn-sm" onClick={handleContactClick}>
                Skontaktuj się z nami!
              </button>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <motion.img
                src={Img1}
                alt=""
                className={`group-hover:scale-125 transition-all duration-500 z-50 cursor-pointer ${
                  expandedImage === Img1 ? "hidden" : ""
                }`}
                onClick={() => handleImageClick(Img1)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.25 }}
              />
              {/* expanded image */}
              {expandedImage === Img1 && (
                <motion.div
                  className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={closeExpandedImage}
                >
                  <img src={Img1} alt="" className="max-h-full max-w-full" />
                </motion.div>
              )}
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"></span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Pełna Ksiegowość</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <motion.img
                src={Img2}
                alt=""
                className={`group-hover:scale-125 transition-all duration-500 z-50 cursor-pointer ${
                  expandedImage === Img2 ? "hidden" : ""
                }`}
                onClick={() => handleImageClick(Img2)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.25 }}
              />
              {/* expanded image */}
              {expandedImage === Img2 && (
                <motion.div
                  className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={closeExpandedImage}
                >
                  <img src={Img2} alt="" className="max-h-full max-w-full" />
                </motion.div>
              )}
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"></span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Ryczałt</span>
              </div>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <motion.img
                src={Img3}
                alt=""
                className={`group-hover:scale-125 transition-all duration-500 z-50 cursor-pointer ${
                  expandedImage === Img3 ? "hidden" : ""
                }`}
                onClick={() => handleImageClick(Img3)}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.25 }}
              />
              {/* expanded image */}
              {expandedImage === Img3 && (
                <motion.div
                  className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-black bg-opacity-75"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  onClick={closeExpandedImage}
                >
                  <img src={Img3} alt="" className="max-h-full max-w-full" />
                </motion.div>
              )}
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient"></span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">
                  Kadry i Płace
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
