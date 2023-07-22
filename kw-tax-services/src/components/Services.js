/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// icons
import { BsArrowUpRight } from "react-icons/bs";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

// services
const services = [
  {
    name: "Usługi księgowe",
    description:
      "Pełna księgowość, w tym ewidencja ksiąg rachunkowych, raporty finansowe, deklaracje podatkowe i sprawozdania roczne.",
    link: "https://www.example1.com",
  },
  {
    name: "Usługi kadrowo - płacowe",
    description:
      "Kompleksowa obsługa kadrowo-płacowa, włączając prowadzenie dokumentacji pracowniczej, listy płac, rozliczenia ZUS i doradztwo z zakresu zarządzania zasobami ludzkimi.",
    link: "https://www.example2.com",
  },
  {
    name: "Zakładanie firmy",
    description:
      "Profesjonalne wsparcie w zakładaniu firmy, w tym doradztwo przy wyborze formy prawnej, rejestracja w CEIDG lub e-KRS.",
    link: "https://www.example3.com",
  },
  {
    name: "Rejestracja podatkowa do VAT polskich firm w Niemczech",
    description:
      "Pomoc w rejestracji polskich firm do celów VAT w Niemczech.",
    link: "https://www.example4.com",
  },
];

const Services = () => {
  const handleCennikClick = () => {
    const cennikSection = document.getElementById("work");
    if (cennikSection) {
      cennikSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:mt-16">
          {/* text and images */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 bg-gradient-to-r text-transparent bg-clip-text from-[#fdd4bb] to-[#c9a690] font-bold font-primary">
              OFERTA
            </h2>
            <h4 className="h4 mb-12 max-w-[455px]">
              Specjalizujemy się w kompleksowej obsłudze księgowej,
              kadrowo-płacowej oraz pomocy w zakładaniu i rejestracji firm,
              dedykowanej mikro, małym i średnim przedsiębiorstwom w powiecie
              Wałbrzych.
            </h4>
            <button className="btn btn-lg" onClick={handleCennikClick}>
              Sprawdź nasz cennik
            </button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* services list */}
            <div className="flex-1">
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div className="border-b border-white/20 h-[142px] mb-[36px] flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-5">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">{description}</p>
                    </div>
                    <div className="flex  flex-col flex-1 items-end">
                      <a href={link} className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                        <BsArrowUpRight />
                      </a>
                      <a href={link} className="text-gradient text-sm">
                        Dowiedz się więcej
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
