import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  labs,
  netone,
  java,
  mysql,
  postgres,
  jquery,
  express,
  mongoose,
  spring,
  salesforce,
  hibernate,
  boostrap,
  tienda,
  reloj,
  leandro,
  apppeli,
  perfil,
  firebase,
  sima,
  faco
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Experiencia",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Microservices Developer",
    icon: creator,
  },
];
/* java,
  mysql,
  postgres,
  jquery,
  express,
  mongoose,
  spring,
  salesforce,
  hibernate,
  boostrap,*/

const technologies = [
  {
    name:"Java",
    icon: java
  },
  {
    name:"MySQL",
    icon: mysql
  },
  {
    name:"PostgresSQL",
    icon: postgres
  },
  {
    name:"JQuery",
    icon: jquery
  },
  {
    name:"Express JS",
    icon: express
  },
  {
    name:"Spring Framework",
    icon: spring
  },
  {
    name:"Salesforce Tecnology",
    icon: salesforce
  },
  {
    name:"Hibernate ORM",
    icon: hibernate
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Salesforce Developer",
    company_name: "LabsXD",
    icon: labs,
    iconBg: "white",
    date: "Junio 2021 - Febrero 2022",
    points: [
      'Desarrollo de soluciones ágiles para el ámbito empresarial.',
      'Uso de tecnología Salesforce & Saleforce Industry.',
      'Programación en APEX, SOQL, LWC, HTML, CSS, JavaScript, Omnistudio(Vlocity)'
    ],
  },
  {
    title: "Lider Tecnico | Software Engineer",
    company_name: "NetOne",
    icon: netone,
    iconBg: "white",
    date: "Febrero 2022 - Presente",
    points: [
          "Tecnologias : Java , Spring , Hibernate , Servlets , Javascript , JQuery , Boostrap",
          "Desarrollo Mobile : React Native , Expo , Android Nativo",
          "Bases de datos relacionales con MySQL, No relacionales MongoDB.",
          "Desarrolle integraciones con medios de pago como Mercado Pago, Pago Uno.",
          "Construí microservicios con Express , Node JS , TypeScript , Mongoose.",
          "Desarrollo de checkout, Manejo de suscripciones, caracteristicas y parametros asociados al sistema.",
          "Plataforma de cobro automatico de documentos con medios de pago recurrentes.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Freelancer",
    icon: perfil,
    iconBg: "white",
    date: "Agosto 2022 - Presente",
    points: [
          "Tecnologias : React js , Angular js , Java , Spring Core , Spring Boot , Spring Security , Hibernate , Servlets , Javascript , JQuery , Boostrap",
          "Desarrollo Mobile : React Native , Expo , Tailwind CSS",
          "Bases de datos relacionales con MySQL, No relacionales MongoDB.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
    "Matías es un excelente compañero, no solo ha demostrado su habilidad desde lo técnico, sino que además realiza un gran aporte al equipo. Siempre se puede contar con el para resolver cualquier tipo de problemática, desde algoritmos, bases de datos, front-end, procesos y muchas otras cosas. Siempre desde NetOne valoramos su opinión.",
    name: "Leandro Alfaro",
    designation: "Developer",
    company: "Net One",
    image: leandro,
  },
  {
    testimonial:
    "Trabajar con Matias ha sido una experiencia gratificante. Su código es limpio y eficiente, y siempre cumple con los plazos de entrega.",
    name: "Hernan Rinaldo",
    designation: "PM",
    company: "NetOne",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
    "Matias es un desarrollador competente y confiable. Su creatividad y enfoque en la calidad hacen que sus proyectos destaquen.",
    name: "Hernán Marrapodi",
    designation: "Developer",
    company: "NetOne",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "FacoExtema App",
    description:
      "FacoExtema App es una aplicación innovadora desarrollada específicamente para el congreso médico FacoExtrema. Diseñada para mejorar la experiencia de los asistentes, esta aplicación permite a los usuarios publicar fotos, escanear códigos QR para ganar puntos y canjear premios, así como acceder al programa completo del evento de tres días. Entre sus múltiples funcionalidades, incluye un sistema de control de stock para los artículos canjeables, envío de notificaciones personalizadas y automáticas a través de Firebase Cloud Messaging (FCM), y la posibilidad de marcar módulos favoritos para recibir alertas relevantes. Los usuarios pueden registrarse fácilmente, compartir sus fotos en Instagram y exportar el programa del evento en formato PDF.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "Angular js",
        color: "pink-text-gradient",
      },
    ],
    image: faco,
    source_code_link: "https://youtu.be/i49XVQ1pWYo",
    logo:1,
  },
  {
    name: "Intranet Grupo Sima",
    description:
      "La Intranet del Grupo Sima es una plataforma de gestión interna diseñada para optimizar las operaciones y la administración del grupo empresarial SIMA. Esta herramienta integral proporciona estadísticas detalladas sobre los empleados, gestión de recursos, control de nómina por gerencia, y monitoreo de la asistencia y rendimiento del personal. Además, permite la importación masiva de datos desde archivos Excel y ofrece un control avanzado de roles y permisos para garantizar la seguridad y la privacidad de la información. Construida con tecnologías de alto rendimiento como MySQL, Spring, y AngularJS, la Intranet del Grupo Sima es la solución ideal para mejorar la eficiencia operativa y la toma de decisiones estratégicas dentro de la empresa.",
    tags: [
      {
        name: "MYSQL",
        color: "blue-text-gradient",
      },
      {
        name: "Spring",
        color: "green-text-gradient",
      },
      {
        name: "Angular js",
        color: "pink-text-gradient",
      },
    ],
    image: sima,
    source_code_link: "https://youtu.be/kbACgAgOQhQ",
    logo:1,
  },
  {
    name: "Notificaciones Masivas",
    description:
      "Este microservicio está diseñado para manejar el envío eficiente de notificaciones a tres plataformas diferentes, sirviendo a más de 20 servidores en todo el mundo. Con la integración de Firebase Cloud Messaging (FCM), proporciona un sistema robusto y escalable para la distribución masiva de mensajes. Gracias a su arquitectura basada en Node.js, Express, y MongoDB, este servicio ofrece una alta disponibilidad, rendimiento óptimo y la capacidad de manejar grandes volúmenes de datos de manera rápida y segura. Ideal para empresas que buscan mejorar la comunicación con sus usuarios a través de notificaciones en tiempo real.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: firebase,
    source_code_link: "https://www.linkedin.com/in/matias-basilotta/",
    logo:2,
  },
  {
    name: "Padrones ARG",
    description:
      "Este microservicio autónomo es esencial para la gestión fiscal en Argentina, ya que procesa y proporciona de manera eficiente las alícuotas de retenciones y percepciones necesarias para las acciones de cobro. Diseñado para integrarse sin problemas con todos los servidores de un sistema de gestión, asegura que las transacciones financieras cumplan con las normativas locales en tiempo real. Desarrollado con tecnologías modernas como Node.js, Express, y MongoDB, el microservicio Padrones ARG garantiza una alta precisión, rendimiento y escalabilidad, facilitando una gestión contable precisa y automatizada para cualquier organización que opere en el mercado argentino.",
    tags: [
      {
        name: "Node js",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.linkedin.com/in/matias-basilotta/",
    logo:2,
  },
  {
    name: "Integración PagoUno",
    description:
      "Este servicio de integración permite a los sistemas de gestión procesar pagos de suscripciones, facturas, y otros documentos de manera fácil y segura a través de PagoUno, una plataforma de pagos líder. Implementado con tecnologías robustas como Java, Spring, y JavaScript, este servicio asegura una integración fluida con los sistemas existentes, garantizando transacciones rápidas y seguras. Ideal para empresas que buscan optimizar su proceso de cobro, la integración PagoUno ofrece una solución confiable y eficiente para gestionar pagos de manera automatizada, mejorando la experiencia del usuario final y facilitando la administración financiera.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Spring",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://www.linkedin.com/in/matias-basilotta/",
    logo:2,
  },
  
  {
    name: "Movie Nigth",
    description:
      "Aplicacion de peliculas desarrollada con React JS",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: apppeli,
    source_code_link: "https://github.com/matias4633/AppPeliculasReact",
    logo:0,
  },
  {
    name: "Salesforce PokeApp",
    description:
      "Proyecto donde se uso tecnologias del entorno de salesforce,  tanto tratamiento de datos asincronicos , APEX , LWC , Javascript",
    tags: [
      {
        name: "Salesforce",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "LWC",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/matias4633/PokeAppSalesforce",
    logo:0,
  },
  {
    name: "Tienda Online",
    description:
      "Proyecto desarrolado con tecnologias web Puras , HTML CSS Javascript.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: tienda,
    source_code_link: "https://github.com/matias4633/TiendaOnline",
    logo:0,
  },
  ,
  {
    name: "Web App SmartWatch",
    description:
      "App informativa sobre la cotización del dolar en tiempo real al cambio Argentino.",
    tags: [
      {
        name: "Tizen OS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: reloj,
    source_code_link: "https://github.com/matias4633/Bill-Metal",
    logo:0,
  },
];

export { services, technologies, experiences, testimonials, projects };
