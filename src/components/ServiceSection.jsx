import React, { useState } from 'react';
import ServiceItem from './ServiceItem';
import ServiceModal from './ServiceModal';

import EstacionTotal from '../../public/assets/images/servicios/TopografiaConEstacionTotal.jpg';
import TopografiaDron from '../../public/assets/images/servicios/TopografiaConDron.jpg';
import FichasTecnicas from '../../public/assets/images/servicios/FichaTecnica.jpg';
import ExpedientesTecnicos from '../../public/assets/images/servicios/ExpedienteTecnico.jpg';
import ExpedientillosTecnicos from '../../public/assets/images/servicios/ExpedientilloTecnico.jfif';
import Planos from '../../public/assets/images/servicios/Planos.webp';
import EstudioSuelo from '../../public/assets/images/servicios/EstudioSuelo.jpg';
import BusquedaCatastral from '../../public/assets/images/servicios/BusquedaCatastral.jpg';
import LicenciaNegocio from '../../public/assets/images/servicios/LicenciaFuncionamiento.jpg';
import LicenciaConstruccion from '../../public/assets/images/servicios/LicenciaConstruccion.png';
import Independizacion from '../../public/assets/images/servicios/Independizacion.webp';

const services = [
    {
        title: "Topografía con Estación Total",
        description: "Nuestro equipo de topógrafos altamente capacitados utiliza estaciones totales de última generación para realizar levantamientos topográficos precisos y detallados.",
        longDescription: "Estos levantamientos son fundamentales para proyectos de construcción, urbanismo, planificación territorial y estudios de impacto ambiental. Garantizamos resultados de alta calidad, con una precisión milimétrica, que cumplen con los estándares internacionales y las normativas locales vigentes.",
        imageSrc: EstacionTotal,
        thumbAlt: "Topografía con Estación Total",
        iconClass: "icon-EstacionTotal3",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Levantamientos Topográficos con Dron",
        description: "Realizamos levantamientos con drones equipados con cámaras de alta resolución para mayor precisión en tus proyectos.",
        longDescription: "Utilizamos drones de última tecnología para obtener imágenes aéreas detalladas y precisas, permitiéndonos crear modelos 3D y mapas topográficos de alta calidad.",
        imageSrc: TopografiaDron,
        thumbAlt: "Levantamientos Topográficos con Dron",
        iconClass: "icon-drone1",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Elaboración de Fichas Técnicas",
        description: "Nuestros expertos elaboran fichas técnicas detalladas para proyectos de construcción y urbanismo.",
        longDescription: "En nuestra empresa de topografía y construcción, ofrecemos un servicio especializado de elaboración de fichas técnicas detalladas para proyectos de construcción y urbanismo. Nuestros expertos en topografía y arquitectura se encargan de recopilar, analizar y presentar la información técnica necesaria para la planificación y ejecución de obras.",
        imageSrc: FichasTecnicas,
        thumbAlt: "Elaboración de Fichas Técnicas",
        iconClass: "icon-ExpedienteTecnico",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Elaboración de Expedientes Técnicos",
        description: "Nuestro equipo de profesionales elabora expedientes técnicos completos y detallados para proyectos de construcción.",
        longDescription: "Ofrecemos la elaboración de expedientes técnicos detallados para garantizar que cada proyecto cumpla con todas las normativas y especificaciones requeridas, asegurando una ejecución efectiva y segura.",
        imageSrc: ExpedientesTecnicos,
        thumbAlt: "Elaboración de Expedientes Técnicos",
        iconClass: "icon-ExpedienteTecnico2",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Elaboración de Expedientillos Técnicos",
        description: "Ofrecemos la elaboración de expedientillos técnicos para proyectos de menor envergadura.",
        longDescription: "Nos especializamos en la creación de expedientillos técnicos que son ideales para proyectos de menor escala, asegurando que todos los aspectos técnicos y normativos sean abordados de manera eficiente y precisa.",
        imageSrc: ExpedientillosTecnicos,
        thumbAlt: "Elaboración de Expedientillos Técnicos",
        iconClass: "icon-FichaTecnica",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Planos para Viviendas",
        description: "Nuestros expertos en topografía y diseño elaboran planos detallados para proyectos de vivienda.",
        longDescription: "Proporcionamos servicios de elaboración de planos para viviendas que incluyen todos los detalles necesarios para la construcción y el diseño de proyectos residenciales, garantizando la precisión y la conformidad con las normativas.",
        imageSrc: Planos,
        thumbAlt: "Planos para Viviendas",
        iconClass: "icon-planos3",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Estudios de Suelo",
        description: "Realizamos estudios de suelo exhaustivos para garantizar la estabilidad y seguridad de tus proyectos.",
        longDescription: "Nuestros estudios de suelo proporcionan información crucial sobre las propiedades del terreno, lo que ayuda a garantizar la estabilidad y seguridad en todas las fases de construcción.",
        imageSrc: EstudioSuelo,
        thumbAlt: "Estudios de Suelo",
        iconClass: "icon-EstudioSuelo",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Búsqueda Catastral",
        description: "Nuestro equipo realiza búsquedas catastrales precisas para determinar la situación legal de los terrenos.",
        longDescription: "Ofrecemos servicios de búsqueda catastral para obtener información precisa sobre la situación legal de los terrenos, asegurando que todos los proyectos de construcción cumplan con los requisitos legales.",
        imageSrc: BusquedaCatastral,
        thumbAlt: "Búsqueda Catastral",
        iconClass: "icon-BusquedaCatastral4",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Trámite de Licencia de Funcionamiento para Negocios",
        description: "Ofrecemos asesoría y tramitación de licencias de funcionamiento para negocios y establecimientos comerciales.",
        longDescription: "Proporcionamos asistencia completa en la tramitación de licencias de funcionamiento, asegurando que los negocios cumplan con todas las normativas necesarias para operar legalmente.",
        imageSrc: LicenciaNegocio,
        thumbAlt: "Trámite de Licencia de Funcionamiento para Negocios",
        iconClass: "icon-LicenciaFuncionamiento3",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Elaboración de Expediente Técnico para Licencia de Construcción",
        description: "Nuestros expertos elaboran expedientes técnicos completos para obtener licencias de construcción.",
        longDescription: "Ofrecemos la elaboración de expedientes técnicos detallados para garantizar que cada proyecto cumpla con todas las normativas y especificaciones requeridas, asegurando una ejecución efectiva y segura.",
        imageSrc: LicenciaConstruccion,
        thumbAlt: "Elaboración de Expediente Técnico para Licencia de Construcción",
        iconClass: "icon-Licencia2",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Gestión de Subdivisión e Independización de Pisos",
        description: "Ofrecemos asesoría y tramitación para la subdivisión e independización de terrenos y pisos.",
        longDescription: "Nuestros expertos en gestión de terrenos brindan asistencia completa para la subdivisión e independización de pisos, asegurando el cumplimiento de todas las normativas legales.",
        imageSrc: Independizacion,
        thumbAlt: "Gestión de Subdivisión e Independización de Pisos",
        iconClass: "icon-Independizacion4",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Residencia, Supervisión y Ejecución de Obras",
        description: "Garantizamos la calidad y el cumplimiento de tus proyectos de construcción a través de nuestros servicios de residencia, supervisión y ejecución de obras.",
        longDescription: "Nuestro equipo de expertos en construcción ofrece servicios integrales de residencia, supervisión y ejecución de obras, asegurando que cada proyecto se complete según los estándares de calidad y dentro del plazo establecido.",
        imageSrc: "",
        thumbAlt: "Residencia, Supervisión y Ejecución de Obras",
        iconClass: "icon-Residencia4",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    },
    {
        title: "Asesoramiento y Formación Integral en Arquitectura, Ingeniería y Construcción",
        description: "Potenciamos tu expertise en arquitectura, ingeniería y construcción con servicios de asesoría y capacitación especializados.",
        longDescription: "Ofrecemos servicios de asesoramiento y formación integral en arquitectura, ingeniería y construcción para profesionales y empresas, ayudándoles a mejorar sus habilidades y conocimientos en el campo.",
        imageSrc: "",
        thumbAlt: "Asesoramiento y Formación Integral en Arquitectura, Ingeniería y Construcción",
        iconClass: "icon-Asesoria4",
        iconAlt: "Icon Alt Text",
        benefits: [
            "- Documentación detallada y precisa para la planificación y ejecución de proyectos.",
            "- Facilitan la comunicación entre los diferentes equipos y profesionales involucrados.",
            "- Ayudan a cumplir con los requisitos legales y normativos vigentes.",
            "- Optimizan los procesos de construcción y reducen posibles errores o retrabajos.",
            "- Contribuyen a la eficiencia y calidad en la ejecución de las obras."
        ]
    }
];


const ServiceSection = () => {
    const [selectedService, setSelectedService] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    const handleLearnMore = (service) => {
        setSelectedService(service);
        setModalShow(true);
    };

    const handleCloseModal = () => {
        setModalShow(false);
        setSelectedService(null);
    };

    return (
        <section className="service-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <div className="section-shape d-inline-block mb-3">
                        <img src="assets/images/about/section-shape.png" alt="" />
                    </div>
                    <div className="section-sub-title mb-2">
                        <h4>Nuestros servicios</h4>
                    </div>
                    <div className="section-main-title">
                        <h2 className="mb-1">Topografía y Construcción</h2>
                        <h2>Descubre cómo podemos ayudarte en tus proyectos.</h2>
                    </div>
                </div>
                <div className="row g-4">
                    {services.map((service, index) => (
                        <div className="col-lg-4 col-md-6 d-flex" key={index}>
                            <ServiceItem service={service} onLearnMore={handleLearnMore} />
                        </div>
                    ))}
                </div>
            </div>
            {selectedService && (
                <ServiceModal
                    service={selectedService}
                    isVisible={modalShow}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};

export default ServiceSection;
