import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { video } from "../assets";
import Msj from "./Msj";
import { Profile } from "./canvas/Profile";

const Hero = () => {
  let mensajes = [
    "Bienvenido/a",
    "Espero que disfrutes la experiencia!",
    "No olvides dejarme un mensaje!",
    "Desarrollador de software",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Video de fondo */}
      <video
        className="absolute inset-0 w-full h-[85%] object-cover mt-[200px]"
        src={video}
        autoPlay
        muted
      />

      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#52a51e]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} `} style={{color:'chocolate'}}>
            Hola, soy <span className="text-[#8b1ea5]">Matias </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
            <Msj mensajes={mensajes} /> {/*<br className='sm:block hidden' />*/}
          </p>
        </div>
        <div>
          <Profile isMobile={isMobile}></Profile>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
