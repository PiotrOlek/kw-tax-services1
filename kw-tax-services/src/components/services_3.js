
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
              USŁUGI KADROWO - PŁACOWE
              </h3>
              <p className="mb-1">
              Wybór formy działalności oraz decyzje podejmowane podczas zakładania nowej firmy to pierwszy i zarazem najważniejszy krok rozpoczynający przedsiębiorczą działalność, dlatego warto zadbać o wszystkie szczegóły i uniknąć błędów, które mogą w przyszłości przysporzyć nieprzyjemności.
              </p>
              <p className="mb-1">
              Z przyjemnością pomożemy wybrać formę prawną pod przyszły profil działalności, założymy firmę za Ciebie oraz pomożemy wybrać formę opodatkowania
              </p>
              <p className="mb-1">
              Oferujemy pomoc w zakładaniu takich form działalności jak:
              </p>
            </div>
            {/* stats */}
            <div className="flex flex-col gap-y-2 mb-5">
              <li className="gradient-text uppercase">Jednoosobowa działalność gospodarcza</li>
              <li className="gradient-text uppercase">Spółka z ograniczoną odpowiedzialnością</li>
              <li className="gradient-text uppercase">Spółka jawna</li>
              <li className="gradient-text uppercase">Spółka komandytowa</li>
              <li className="gradient-text uppercase">Spółka komandytowo - akcyjna</li>
              <li className="gradient-text uppercase">Prosta spółka akcyjna</li>
            </div>
            <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Cennik</button>
              <a href="#" className="text-gradient btn-link">
                Kontakt
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
