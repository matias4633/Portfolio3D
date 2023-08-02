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
  }/*,
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },*/
];

const testimonials = [
  {
    testimonial:
    "Matias es un desarrollador brillante, siempre encuentra soluciones ingeniosas a los desafíos técnicos. Su pasión por la programación es contagiosa y su habilidad para trabajar en equipo es sobresaliente.",
    name: "German Lopez",
    designation: "Dev Señor",
    company: "Net One",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
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
    "Matias es un desarrollador altamente competente y confiable. Su creatividad y enfoque en la calidad hacen que sus proyectos destaquen.",
    name: "Hernán Marrapodi",
    designation: "Desarrollador",
    company: "NetOne",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
