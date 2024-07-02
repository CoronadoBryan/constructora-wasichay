import React from "react";

// Banner One
import BannerImg from "../../../public/assets/images/thumbs/banner-img.png";
export const bannerContent = {
  subtitle: "FinTech Fusion",
  title: "Invest today in You ",
  gradientTitle: "Dream Home",
  desc: "Unlock the Power of Real Estate Making Your Real Estate Dreams a Reality Real Estate here Unlock the Power of Real Estate",
  thumb: BannerImg,
};

// Filter Tabs
export const filterTabs = [
  {
    id: 1,
    text: "Rent",
  },
  {
    id: 2,
    text: "Buy",
  },
  {
    id: 3,
    text: "Sell",
  },
];

// About One Content
export const aboutStatistics = {
  icon: <i className="fas fa-users text-gradient"></i>,
  number: "4000+",
  text: "Satisfied Clients",
};
import aboutContentThumb from "../../../public/assets/images/thumbs/about-img.png";
import aboutContentIcon from "../../../public/assets/images/icons/about-icon.svg";
export const aboutContent = {
  thumb: aboutContentThumb,
  icon: aboutContentIcon,
  title: "Your Dream Home Awaits",
  desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties",
};

// Property Data
import propertyThumb1 from "../../../public/assets/images/thumbs/property-1.png";
import propertyThumb2 from "../../../public/assets/images/thumbs/property-2.png";
import propertyThumb3 from "../../../public/assets/images/thumbs/property-3.png";
import propertyThumb4 from "../../../public/assets/images/thumbs/property-4.png";
import propertyThumb5 from "../../../public/assets/images/thumbs/property-5.png";
import propertyThumb6 from "../../../public/assets/images/thumbs/property-6.png";
import propertyThumb7 from "../../../public/assets/images/thumbs/property-7.png";
import propertyThumb8 from "../../../public/assets/images/thumbs/property-8.png";
import propertyThumb9 from "../../../public/assets/images/thumbs/property-9.png";
import propertyThumb10 from "../../../public/assets/images/thumbs/property-10.png";
import propertyThumb11 from "../../../public/assets/images/thumbs/property-11.png";
import propertyThumb12 from "../../../public/assets/images/thumbs/property-12.png";
export const properties = [
  {
    id: 1,
    thumb: propertyThumb1,
    price: "$300.00",
    day: "/per day",
    title: "Turning Dreams into Addresses Home State ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "2 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 1 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Newest",
    dataStatuses: "Sell",
    dataTypes: "Houses",
    dataLocations: "Bangladesh",
  },
  {
    id: 2,
    thumb: propertyThumb2,
    price: "$450.00",
    day: "/per day",
    title: "Your journey home ownership starts here too ",
    desc: "Real Estate is a vast industry that deals with the buying,selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "4 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 2 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Best Seller",
    dataStatuses: "Buy",
    dataTypes: "Apartments",
    dataLocations: "Japan",
  },
  {
    id: 3,
    thumb: propertyThumb3,
    price: "$500.00",
    day: "/per day",
    title: "Opening Doors to Your Dreams For Living ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "4 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Best Match",
    dataStatuses: "Rent",
    dataTypes: "Office",
    dataLocations: "Korea",
  },
  {
    id: 4,
    thumb: propertyThumb4,
    price: "$600.00",
    day: "/per day",
    title: "Home is Where Your Story Begins ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "5 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 4 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Low Price",
    dataStatuses: "Sell",
    dataTypes: "Villa",
    dataLocations: "Singapore",
  },
  {
    id: 5,
    thumb: propertyThumb5,
    price: "$650.00",
    day: "/per day",
    title: "Building Trust, One Home at a Time",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "6 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 4 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "High Price",
    dataStatuses: "Buy",
    dataTypes: "Houses",
    dataLocations: "Germany",
  },
  {
    id: 6,
    thumb: propertyThumb6,
    price: "$700.00",
    day: "/per day",
    title: "Brick by Brick Your Dream Home Awaits ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "7 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Medium Price",
    dataStatuses: "Rent",
    dataTypes: "Apartments",
    dataLocations: "Thailand",
  },
  {
    id: 7,
    thumb: propertyThumb7,
    price: "$350.00",
    day: "/per day",
    title: "Guiding You Home dsadsa Experience",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "7 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Best Seller",
    dataStatuses: "Sell",
    dataTypes: "Office",
    dataLocations: "Bangladesh",
  },
  {
    id: 8,
    thumb: propertyThumb8,
    price: "$530.00",
    day: "/per day",
    title: "A Tradition of Trust in Real Estate ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "7 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Best Match",
    dataStatuses: "Buy",
    dataTypes: "Villa",
    dataLocations: "Japan",
  },
  {
    id: 9,
    thumb: propertyThumb9,
    price: "$560.00",
    day: "/per day",
    title: "Target Audience and Reflect the Values",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "7 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Low Price",
    dataStatuses: "Rent",
    dataTypes: "Houses",
    dataLocations: "Korea",
  },
  {
    id: 10,
    thumb: propertyThumb10,
    price: "$680.00",
    day: "/per day",
    title: "Making House Hunting an Adventure ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "7 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "High Price",
    dataStatuses: "Sell",
    dataTypes: "Apartments",
    dataLocations: "Singapore",
  },
  {
    id: 11,
    thumb: propertyThumb11,
    price: "$580.00",
    day: "/per day",
    title: "Opening New Doors to Your Future ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "7 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Newest",
    dataStatuses: "Buy",
    dataTypes: "Office",
    dataLocations: "Germany",
  },
  {
    id: 12,
    thumb: propertyThumb12,
    price: "$563.00",
    day: "/per day",
    title: "Your Journey to Home Starts Here ",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties. It inv transactions related to residential, commercial, and industrial properties. Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis viverra laoreet augue mattis fmentum ullamcorper viverra laoreet Aliquam eros justo, posuere lobor mattis fmentum ullam",
    locationIcon: <i className="fas fa-map-marker-alt"></i>,
    location: "66 Broklyant, New York America",
    amenities: [
      {
        icon: <i className="fas fa-bed"></i>,
        text: "7 Beds",
      },
      {
        icon: <i className="fas fa-bath"></i>,
        text: " 3 Baths ",
      },
    ],
    btnText: "Book Now",
    dataSort: "Best Seller",
    dataStatuses: "Rent",
    dataTypes: "Villa",
    dataLocations: "Thailand",
  },
];

// Property Type Data
import propertyTypeIcon1 from "../../../public/assets/images/icons/property-type-icon1.svg";
import propertyTypeIcon2 from "../../../public/assets/images/icons/property-type-icon2.svg";
import propertyTypeIcon3 from "../../../public/assets/images/icons/property-type-icon3.svg";
export const propertyTypes = [
  {
    icon: propertyTypeIcon1,
    title: "Seamless Solutions Your Success ",
    desc: "Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word",
  },
  {
    icon: propertyTypeIcon2,
    title: "Proactive Realty Services ",
    desc: "Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word",
  },
  {
    icon: propertyTypeIcon3,
    title: "Supreme Home Finders",
    desc: "Customer satisfaction is crucial for amohlodi business as it leads to customer loyalty loves positive word",
  },
];

// CountUp Data
export const counts = [
  {
    number: "200",
    text: "HAPPY PATIENTS",
  },
  {
    number: "20",
    text: "SAVED HEARTS ",
  },
  {
    number: "10k",
    text: "EXPERT DOCTORS",
  },
  {
    number: "900",
    text: "SERENITY WORK ",
  },
];

// portfolio  Data
import portfolioThumb1 from "../../../public/assets/images/thumbs/portfolio1.png";
import portfolioThumb2 from "../../../public/assets/images/thumbs/portfolio2.png";
import portfolioThumb3 from "../../../public/assets/images/thumbs/portfolio3.png";
import portfolioThumb4 from "../../../public/assets/images/thumbs/portfolio4.png";
export const portfolios = [
  {
    thumb: portfolioThumb1,
    title: "Outsourcing business",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties",
    btnIcon: <i className="fas fa-arrow-right"></i>,
  },
  {
    thumb: portfolioThumb2,
    title: "Outsourcing business",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties",
    btnIcon: <i className="fas fa-arrow-right"></i>,
  },
  {
    thumb: portfolioThumb3,
    title: "Outsourcing business",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties",
    btnIcon: <i className="fas fa-arrow-right"></i>,
  },
  {
    thumb: portfolioThumb4,
    title: "Outsourcing business",
    desc: "Real Estate is a vast industry that deals with the buying, selling, and renting of properties",
    btnIcon: <i className="fas fa-arrow-right"></i>,
  },
];

// Testimonial Data
import quoteIcon from "../../../public/assets/images/icons/quote.svg";
export const testimonials = [
  {
    name: "Lupe Sofia",
    desc: "Su producto superó todas mis expectativas. La calidad y la atención al detalle son sobresalientes y se ha convertido en una herramienta esencial para mi trabajo diario.",
    quote: quoteIcon,
  },
  {
    name: "Smith Santi",
    desc: "El equipo demostró un nivel impresionante de profesionalismo y dedicación. Su trabajo ha mejorado significativamente la eficiencia y la calidad de nuestro proyecto.",
    quote: quoteIcon,
  },
  {
    name: "Pedro Sanchez",
    desc: "La precisión y rapidez del equipo de topografía fueron excepcionales. Gracias a su trabajo, pudimos avanzar en nuestro proyecto sin contratiempos y con total confianza en los datos proporcionados.",
    quote: quoteIcon,
  },
];

// Blog Data
import blogThumb1 from "../../../public/assets/images/blog/blog1.jpg";
import blogThumb2 from "../../../public/assets/images/blog/blog2.jpg";
import blogThumb3 from "../../../public/assets/images/blog/blog3.jpg";
import blogThumb4 from "../../../public/assets/images/blog/blog4.jpg";
import blogThumb5 from "../../../public/assets/images/blog/blog5.jpg";
import blogThumb6 from "../../../public/assets/images/blog/blog6.jpg";

export const blogs = [
  {
    id: 1,
    thumb: blogThumb1,
    admin: "Grupo Wasichay",
    meta: [
      {
        icon: <i className="fas fa-user"></i>,
        text: "bryan coronado",
      },
      // {
      //   icon: <i className="fas fa-comments"></i>,
      //   text: "",
      // },
    ],
    title: "FUNCIONES DE UN TOPÓGRAFO PROFESIONAL",
    desc: "La topografía es una ciencia que resulta fundamental para la ejecución de muchos trabajos. En campos como la construcción, ingeniería civil, edificación, urbanismo, cartografía, etc., se necesita el trabajo de un topógrafo, ya que estos son los profesionales capacitados para estudiar en detalle los terrenos. A través del uso de diferentes técnicas topográficas, los topógrafos pueden plasmar la realidad de un terreno en un plano. Los estudios y análisis que se hacen en el terreno se conocen como levantamiento topográfico. El trabajo del topógrafo se divide, por lo general, en dos tareas: la realización del plano del terreno y llevar al terreno lo recogido en el plano. Para el primer trabajo es necesario realizar una serie de mediciones utilizando sistemas basados en GPS o una estación total, por ejemplo. Tras obtener los datos, estos se descargan en un programa informático para proceder a la realización del estudio. El segundo trabajo consiste en la ejecución del proyecto desarrollado y se lleva a cabo por medio de replanteo inverso. Tareas que puede realizar un topógrafo profesional Teniendo en cuenta cuáles son las funciones de un topógrafo se hace necesario evidenciar qué situaciones pueden requerir los servicios de este profesional. De esta manera podrás saber en qué casos sería útil su contratación.",
    linkText: "Leer más",
  },

  {
    id: 2,
    thumb: blogThumb2,
    date: "28 Mar",
    admin: "John Doe",
    meta: [
      {
        icon: <i className="fas fa-user"></i>,
        text: "adribell samara",
      },
      // {
      //   icon: <i className="fas fa-comments"></i>,
      //   text: "Comments (50)",
      // },
    ],
    title: "5 MEJORES HERRAMIENTAS DE UN TOPÓGRAFO",
    desc: "La topografía se encarga del estudio de la forma y relieve de la forma de una superficie mediante los ángulos y distancias horizontales y verticales, por lo que existen herramientas de medición indispensables para emplear una mayor calidad, precisión y eficiencia de los trabajos solicitados. A continuación, detallaremos las cinco mejores herramientas en el rubro de la topografía. Este instrumento de medición ha ido evolucionando con el pasar de los años en el aspecto electrónico y óptico como parte de la topografía moderna. La estación total está integrada por un teodolito óptico; un distanciómetro óptico electrónico para una correcta medición de distancias y ángulos de manera simultánea; y una computadora capaz de realizar los cálculos necesarios y almacenarlos en una memoria interna.  La estación total es indispensable para cumplir funciones como realizar un levantamiento topográfico, representación de la realidad física de un área, y un replanteo, trazar un diseño de una obra y proyectarlo sobre una superficie. El instrumento está formado por partes indispensables y accesorios para su efectividad. Cuenta con un trípode, una base niveladora, estación total, prisma, un bastón porta prisma, una brújula, cargador y cable de descarga. Es un sistema de navegación formado por un conjunto de satélites y estaciones en tierra firme. Actualmente, se ha convertido en una herramienta indispensable en la determinación de coordenadas tridimensionales, las cuales se hallan mediante el posicionamiento de puntos sobre la superficie terrestre. Estas coordenadas son usadas por la topografía y geodesia para poder emplear una mayor precisión y exactitud en la diferencia de coordenadas entre dos o más puntos receptores. El sistema GPS constituye una herramienta básica y fundamental para realizar levantamientos topográficos y el monitoreo de ellos.",
    linkText: "Leer más",
  },
  {
    id: 3,
    thumb: blogThumb3,
    admin: "Rakibul Islam",
    meta: [
      {
        icon: <i className="fas fa-user"></i>,
        text: "adribell samara",
      },
      // {
      //   icon: <i className="fas fa-comments"></i>,
      //   text: "Comments (10)",
      // },
    ],
    title: "IMPORTANCIA DE LOS ESTUDIOS BATIMÉTRICOS",
    desc: "La batimetría se denomina topografía hidrográfica y se encarga de realizar el levantamiento topográfico del relieve de superficies cubiertas de agua. ¿CÓMO SE REALIZA LA BATIMETRÍA? Para realizar un modelo batimétrico, debemos realizar la medición del área acuático mediante la posición de los puntos muestreados. Estos puntos forman las coordenadas X, Z e Y, estas definen líneas con el valor de la profundidad, el conjunto de ellas se denominará isóbata y generará una representación cartográfica de los puntos de igual profundidad de las zonas del modelo batimétrico. En la actualidad, la tecnología ha evolucionado equipos como el GPS y los instrumentos para la determinación de la profundidad, mediante técnicas sónicas digitales las cuales se computarizan y controlan en tiempo real por un potente software que es capaz de gestionar y analizar datos. En base a ello, para poder analizar las estructuras geomórficas y geológicas de las áreas, se mide la profundidad a través del tiempo que demora el sonido en descender hasta el fondo, rebotar y regresar al dispositivo. Mediante el sonar de las ondas sonoras, se emplean sistemas GPS que informan la ubicación exacta de los puntos.",
    linkText: "Leer más",
  },
  {
    id: 4,
    thumb: blogThumb4,
    admin: "Alex",
    meta: [
      {
        icon: <i className="fas fa-user"></i>,
        text: " adribell samara",
      },
      // {
      //   icon: <i className="fas fa-comments"></i>,
      //   text: "Comments (10)",
      // },
    ],
    title: "¿QUE ESTUDIA LA GEODESIA?",
    desc: "La geodesia es la ciencia que, principalmente, estudia la forma, orientación, posición y dimensiones de la Tierra, lo cual es difícil de definirlo debido a su campo gravitatorio y a que solo puede ser estudiado por medio de los parámetros observados sobre la superficie o en el exterior. ¿CÓMO SE DETERMINAN LOS PUNTOS GEODÉSICOS? La geodesia nos permite determinar con precisión la posición de un punto en base, a la latitud, longitud y altura ortométrica sobre una superficie. Estas mediciones geodésicas dependen de la exactitud y precisión de los métodos matemáticos que se utilizan como el elipsoide de rotación, esferoide local, plano horizontal y geoide, ya que debe existir una aproximación a la superficie verdadera en la ubicación deseada. Cada posición derivada de los puntos, extienden una red geodésica que cubre determinada región, las cuales son analizadas y gestionadas por el sistema de Información Geográfica (SIG). Este sistema se encarga de brindar información sobre espacios de la tierra que luego serán estudiados por la topografía mediante mapas topográficos, por lo que la geodesia se posiciona como una ciencia base de la topografía.",
    linkText: "Leer más",
  },
  {
    id: 5,
    thumb: blogThumb5,
    admin: "Jenon Doe",
    meta: [
      {
        icon: <i className="fas fa-user"></i>,
        text: " adribell samara",
      },
      // {
      //   icon: <i className="fas fa-comments"></i>,
      //   text: "Comments (10)",
      // },
    ],
    title: "EL USO DE DRONES EN LA TOPOGRAFÍA",
    desc: "Los trabajos de topografía han experimentado un desarrollo tecnológico muy importante en los últimos años y entre ellas, se encuentra el uso de drones en los proyectos de topografía. La ciencia de la topografía tiene como principal objetivo, conocer la forma y dimensiones de un terreno mediante el estudio de los relieves que lo conforman, por lo que se necesitan determinar la posición relativa de los puntos solicitados y los drones funcionan como un complemento a la topografía profesional. Los vuelos fotogramétricos realizados por los drones, ayudan a sobrevolar las zonas a trabajar y, de esta manera, brindan información de las propiedades geométricas y las dimensiones con las que cuenta una superficie estudiada a partir de la información recolectada mediante las imágenes. Estas son estudiadas por la planimetría y la altimetría, las cuales ayudan a obtener modelos digitales precisos de un terreno. La altimetría mide, topográficamente, la altura y la planimetría se encarga de medir espacios y representarlos en planos. La lectura de imágenes geo-referenciadas son leídas por el software del dron el cual permite exportar videos y, modelos de mallas con textura, lo que permite realizar un levantamiento topográfico más preciso, a comparación de una medición tradicional como la que se realiza con el teodolito o finalmente, con la estación total.",
    linkText: "Leer más",
  },
  {
    id: 6,
    thumb: blogThumb6,
    admin: "Akramul Hoq",
    meta: [
      {
        icon: <i className="fas fa-user"></i>,
        text: " adribell samara",
      },
      // {
      //   icon: <i className="fas fa-comments"></i>,
      //   text: "Comments (10)",
      // },
    ],
    title: "LA IMPORTANCIA DE LA TOPOGRAFÍA EN LA CONSTRUCCIÓN",
    desc: "Con el transcurso de los años, se ha ido implementando el desarrollo de la tecnología con herramientas topográficas para poder seguir con el progreso de las obras civiles por construcción, siendo parte de los campos de la ingeniería civil y los diseños arquitectónicos. Es fundamental emplear la topografía en un sistema constructivo porque la información topográfica es elemental para los proyectos de construcción, el cual debe ser plasmado en planos que contengan las limitaciones, niveles y alturas de referencia con las que cuenta la obra.  La topografía es una ciencia que permite precisar las características superficiales del terreno al medir una representación gráfica, y en base a la información recolectada del área, se obtiene el control de la obra por medios topográficos, ya que determina la viabilidad del proyecto. Primero, se determinan los métodos topográficos a emplear, ya que se debe implementar un levantamiento topográfico para poder establecer el proyecto en base a coordenadas arbitrarias las cuales usan puntos de referencia en la zona del proyecto, aquello permite calcular las dimensiones, niveles, medidas distanciométricas y angulares, características de la superficie y sus alrededores.",
    linkText: "Leer más",
  },
];
