
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
              Prowadzenie dokumentacji kadrowo-płacowej jest w znacznym stopniu zależne od specyfiki przedsiębiorstwa oraz jej wymagań. 
              </p>
              <p className="mb-1">
              Co dana usługa obejmuje?
              </p>
            </div>
            {/* stats */}
            <div className="flex flex-col gap-y-2 mb-5">
              <li className="gradient-text uppercase">Prowadzenie akt osobowych pracowników</li>
              <li className="gradient-text uppercase">Sporządzanie, rozliczanie oraz archiwizowanie umów o pracę i umów cywilnoprawnych</li>
              <li className="gradient-text uppercase">Rozliczanie urlopów, wyjazdów w delegację</li>
              <li className="gradient-text uppercase">Rozliczenia ZUS</li>
              <li className="gradient-text uppercase">Opracowywanie sprawozdań rocznych o dochodach oraz odprowadzanie zaliczek na podatek dochodowy</li>
              <li className="gradient-text uppercase">Wystawianie świadectw pracy, różnego rodzaju zaświadczeń</li>
              <li className="gradient-text uppercase">Nadzór nad sprawami dotyczących BHP i badań lekarskich</li>
              <li className="gradient-text uppercase">Doradztwo z obszaru zarządzania zasobami ludzkimi</li>
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
