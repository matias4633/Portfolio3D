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
  apppeli
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
      'Programación en APEX, SOQL, LWC, HTML, CSS, JavaScript, Omnistudio'
    ],
  },
  {
    title: "Software Engineer",
    company_name: "NetOne",
    icon: netone,
    iconBg: "white",
    date: "Febrero 2022 - Presente",
    points: [
          "Tecnologias : Java , Spring , Hibernate , Servlets , Javascript , JQuery , Boostrap",
          "Bases de datos relacionales con MySQL, No relacionales MongoDB.",
          "Desarrolle integraciones con medios de pago como Mercado Pago, Pago Uno.",
          "Construí microservicios con Express , Node JS , TypeScript , Mongoose.",
          "Desarrollo de checkout, Manejo de suscripciones, caracteristicas y parametros asociados al sistema.",
          "Plataforma de cobro automatico de documentos con medios de pago recurrentes.",
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
    name: "Integración PagoUno",
    description:
      "Le permite al sistema de gestion, cobrar suscripciones, facturas y otros documentos atraves de pagoUno.",
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
    source_code_link: "https://youtu.be/ik11qQkbnT0",
    logo:1,
  },
  {
    name: "MicroServicio Padrones ARG",
    description:
      "Servicio independiente que procesa y proporciona las alicuotas de retenciones y persepciones para las acciones de cobro. Sirve a todos los servidores del sistema de gestion.",
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
    source_code_link: "https://github.com/matias4633/",
    logo:0,
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
