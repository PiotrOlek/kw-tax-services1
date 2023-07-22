import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>

              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
              Skontaktuj się <br /> z nami!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl p-6 pb-16 lg:pb-20 gap-y-6 flex flex-col items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Imię i Nazwisko"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Adres E-mail"
            />
            <textarea
              className="lg:mb-10 mb-8 bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none"
              type="text"
              name=""
              id=""
              cols={30}
              rows={6}
              placeholder="Treść Wiadomości"
            ></textarea>
            <button className="btn btn-lg">Wyślij Wiadomość</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;