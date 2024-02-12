import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        ¡Bienvenido a mi portfolio! Soy un apasionado desarrollador de software con una sólida experiencia en proyectos de gestión de negocios y microservicios. Mi carrera como estudiante de ingeniería informática me ha brindado una base sólida en lógica de negocio y un profundo conocimiento de diversas tecnologías.
        <br/>
        <br/>
        Mi enfoque principal se centra en el ecosistema Java, donde me desenvuelvo con soltura utilizando tecnologías como Java EE, Spring, Spring Boot, Spring Security y Spring Cloud. Para front trabajo con React.js, Angular.js o Web puro.
        <br/>
        <br/>
        En mi trayectoria como desarrollador de software, también he trabajado con bases de datos relacionales, especialmente con MySQL. Tengo experiencia sólida en el diseño y la optimización de esquemas de bases de datos, así como en la escritura de consultas complejas para garantizar un rendimiento óptimo y una integridad de datos impecable.
        <br/>
        <br/>
        Además, poseo un sólido conocimiento en bases de datos NoSQL, especialmente en MongoDB. Estas herramientas me permiten crear aplicaciones robustas y escalables que cumplen con los más altos estándares de calidad.
        <br/>
        <br/>
        Estoy emocionado de compartir contigo algunos de los proyectos en los que he trabajado y cómo mi experiencia y habilidades pueden contribuir al éxito de tu próximo proyecto. ¡Gracias por visitar mi portfolio!

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
