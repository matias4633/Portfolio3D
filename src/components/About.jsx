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
      <motion.div variants={textVariant()} style={{ marginTop: 40 }}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        ¡Bienvenido a mi portfolio! Soy un desarrollador de software apasionado con una sólida experiencia en la creación de soluciones de gestión empresarial, microservicios y aplicaciones móviles. Como estudiante de ingeniería informática, he desarrollado una base fuerte en lógica de negocio y una amplia comprensión de diversas tecnologías.
        <br />
        <br />
        Mi principal enfoque está en el ecosistema Java, donde domino tecnologías clave como Java EE, Spring, Spring Boot, Spring Security y Spring Cloud. Estas herramientas me permiten construir aplicaciones empresariales robustas y seguras que se adaptan a las necesidades de cada proyecto. En el frontend, tengo experiencia trabajando con React.js y Angular.js, así como con tecnologías web puras, lo que me permite crear interfaces de usuario dinámicas y eficientes.
        <br />
        <br />
        En el ámbito del desarrollo móvil, he trabajado extensamente con React Native para crear aplicaciones móviles tanto para Android como para iOS, destacando en proyectos como FacoExtema App, donde combiné funcionalidades avanzadas con una experiencia de usuario intuitiva y atractiva.
        <br />
        <br />
        A lo largo de mi trayectoria, también he adquirido una experiencia considerable en el manejo de bases de datos relacionales como MySQL. He diseñado y optimizado esquemas de bases de datos, y desarrollado consultas complejas para garantizar un rendimiento óptimo y una integridad de datos sólida. Además, tengo un conocimiento profundo en bases de datos NoSQL, especialmente en MongoDB, lo que me permite crear aplicaciones escalables y de alto rendimiento.
        <br />
        <br />
        Estoy entusiasmado por mostrarte algunos de los proyectos en los que he trabajado y cómo mis habilidades pueden aportar valor a tu próximo proyecto. ¡Gracias por visitar mi portfolio, y espero que encuentres inspiración en mi trabajo!

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
