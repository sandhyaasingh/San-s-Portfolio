import { motion } from "framer-motion";
import { styles } from "../styles";
import { StarsCanvas } from "./canvas"; 

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Left side vertical line + dot */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Text content */}
        <div className="mt-28 md:mt-5 lg:mt-5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey there! <br />
            I'm{" "}
            <span className="text-[#915EFF] inline-flex items-center">
              Sandhya Singh
              <img
                src="/huh.gif"
                alt="sparkle"
                className="w-25 h-20 object-contain ml-1"
              />
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-6 text-white-100`}>
            Software Developer
          </p>
        </div>
      </div>

      {/* Background Stars only */}
      <div className="w-full h-full">
        <StarsCanvas />
      </div>

      {/* Scroll down indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
