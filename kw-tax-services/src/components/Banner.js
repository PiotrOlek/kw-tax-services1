import React from "react";
// images
import Image from "../assets/avatar.png";
// type animation
import { TypeAnimation } from "react-type-animation";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Banner = () => {
  const handleCennikClick = () => {
    const cennikSection = document.getElementById("work");
    if (cennikSection) {
      cennikSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="min-h-[100vh] lg:min-h-[65vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[42px] font-bold leading-[0.8] lg:text-[80px]"
            >
              
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[32px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="mr-4 text-white">Biuro</span>
              <TypeAnimation
                sequence={["Księgowe", 3000, "Rachunkowe", 3000]}
                speed={10}
                className="bg-gradient-to-r text-transparent bg-clip-text from-[#fdd4bb] to-[#c9a690] font-bold font-primary;"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              KW-Tax to nowoczesne i przyjazne klientowi biuro rachunkowe z obsługą online, działające w powiecie Wałbrzych. Specjalizujemy się w zakładaniu działalności gospodarczej oraz spółek, a także kompleksowej obsłudze księgowej, rachunkowej, kadrowo-płacowej dla mikro, małych i średnich firm, a także jednoosobowych działalności gospodarczych. Zapraszamy do skorzystania z naszych usług.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-lg" onClick={handleCennikClick}>
                Cennik
              </button>
              <button className="btn btn-lg" onClick={handleContactClick}>
                Kontakt
              </button>
            </motion.div>
            {/* social links */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            ></motion.div>
          </div>
          {/* images */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[1000px] lg:max-w-[1000px] w-80 "
          >
            <img src={Image} alt="" className="ml-2" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
