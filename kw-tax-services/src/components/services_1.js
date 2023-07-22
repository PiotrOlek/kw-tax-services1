
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// countUp
import CountUp from "react-countup";
// intersection observer hook
import { useInView } from "react-intersection-observer";
// motion
import { motion } from "framer-motion";
// variant
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-5 lg:items-center lg:gap-x-5 lg:gap-y-0">
          {/* text */}
          <motion.div 
           variants={fadeIn('left', 0.5)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount: 0.3}}
          >
            <div className="flex-1">
              <h3 className="h2 mb-1 gradient-text">
               USŁUGI KSIĘGOWE
              </h3>
              <p className="mb-1">
              Pełna księgowość wiąże się z prowadzeniem ksiąg rachunkowych, a tym samym z ewidencjonowaniem obrotów i sald dla księgi głównej oraz ksiąg pomocniczych (konta analityczne) czy inwentaryzacją aktywów i pasywów. Pełna lista elementów, na które składają się księgi rachunkowe:
              </p>
            </div>
            {/* stats */}
            <div className="flex flex-col gap-y-2 mb-5">
              <li className="gradient-text uppercase">Prowadzenie wszystkich wymaganych przepisami ewidencji księgowych (księgi główne, księgi pomocnicze)</li>
              <li className="gradient-text uppercase">Prowadzenie ewidencji środków trwałych</li>
              <li className="gradient-text uppercase">Prowadzenie ewidencji wyposażenia</li>
              <li className="gradient-text uppercase">Prowadzenie ewidencji podatku od towarów i usług VAT</li>
              <li className="gradient-text uppercase">Sporządzanie raportów miesięcznych i rocznych</li>
              <li className="gradient-text uppercase">Sporządzanie sprawozdań do GUS</li>
              <li className="gradient-text uppercase">Rozliczanie właścicieli</li>
              <li className="gradient-text uppercase">Sporządzanie i składanie deklaracji do US i ZUS</li>
            </div>

            <div className="flex-1">
              <h3 className="h2 mb-1 gradient-text">
              Księgi przychodów i rozchodów
              </h3>
              <p className="mb-1">
              Księgi przychodów i rozchodów są przeznaczone wyłącznie dla firm, a dokładniej dla przedsiębiorców, którzy prowadzą działalność gospodarczą jako osoby fizyczne lub jako spółki cywilne lub jawne, które nie mają osobowości prawnej. Co wchodzi w usługi:
              </p>
            </div>
            {/* stats */}
            <div className="flex flex-col gap-y-2 mb-5">
              <li className="gradient-text uppercase">Prowadzenie podatkowej księgi przychodów i rozchodów</li>
              <li className="gradient-text uppercase">Obliczanie zaliczek na podatek dochodowy od osób fizycznych (PIT)</li>
              <li className="gradient-text uppercase">Przesyłanie wymaganych dokumentów na serwery Ministra Finansów</li>
              <li className="gradient-text uppercase">Prowadzenie ewidencji dla potrzeb rozliczenia podatku VAT, sporządzanie deklaracji podatkowych, plików JPK</li>
            </div>
            <div className="flex gap-x-8 items-center">
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
