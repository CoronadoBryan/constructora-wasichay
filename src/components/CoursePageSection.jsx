import React, { useState } from 'react';
import CourseItem from './CourseItem';
import CourseFilterForm from './CourseFilterForm';
import CourseModal from './CourseModal';
import courses1 from '../../public/assets/images/cursos/CursoDeManejoDeDron.jpg';
import courses2 from '../../public/assets/images/cursos/TopografiaConDron.png';
import courses3 from '../../public/assets/images/cursos/CursoTopografiaConEstacionTotal.webp';
import courses4 from '../../public/assets/images/cursos/CartografiaDigital-Y-SIG.webp';
import courses5 from '../../public/assets/images/cursos/FotogrametriaAplicadaConDrones.jpg';
import courses6 from '../../public/assets/images/cursos/InspeccionDeInfraestructuraConDrones.jpg'
import courses7 from '../../public/assets/images/cursos/AvanzadoEstacionTotal.jpg'
import courses8 from '../../public/assets/images/cursos/BIM.webp'
import courses9 from '../../public/assets/images/cursos/autocad.png'
import courses10 from '../../public/assets/images/cursos/modelado-autocad.jpeg'

const courses = [
    {
        id: 1,
        title: 'Curso de manejo de dron',
        description: 'Aprende a manejar drones con nuestro curso especializado.',
        longDescription: 'Este curso de manejo de dron cubre todos los aspectos necesarios para que puedas operar un dron de manera segura y eficiente. Incluye teoría sobre la regulación del espacio aéreo, prácticas de vuelo en diversas condiciones y mantenimiento básico del dron.',
        image: courses1,
        category: 'drones',
        instructor: 'William Cosco',
        duration: '20 horas',
        price: 'S/. 300.00',
        schedule: 'Lunes, Miércoles y Viernes de 9:00 am a 12:00 pm',
    },
    {
        id: 2,
        title: 'Curso de Levantamientos Topográficos con Drones',
        description: 'Aprende a utilizar drones para realizar levantamientos topográficos de alta precisión.',
        longDescription: 'En este curso, te enseñaremos a utilizar drones para llevar a cabo levantamientos topográficos de manera eficiente y precisa. Aprenderás técnicas avanzadas de vuelo, incluyendo planificación de misiones, control de la cámara y navegación. También dominarás el procesamiento de los datos capturados por el dron, desde la generación de nubes de puntos hasta la creación de modelos digitales del terreno. Al finalizar el curso, serás capaz de realizar levantamientos topográficos completos utilizando drones, lo que te permitirá ahorrar tiempo y obtener resultados de alta calidad.',
        image: courses2,
        category: 'topography',
        instructor: 'William Cosco',
        duration: '30 horas',
        price: 'S/. 450.00',
        schedule: 'Lunes, Miércoles y Viernes de 2:00 pm a 5:00 pm',
    },
    {
        id: 3,
        title: 'Curso de manejo de estación total',
        description: 'Conviértete en un experto en el uso de estaciones totales.',
        longDescription: 'En este curso aprenderás a manejar la estación total desde lo más básico hasta nivel avanzado. Cubrimos temas como calibración, medición de distancias y ángulos, y transferencia de datos a software de modelado.',
        image: courses3,
        category: 'station',
        instructor: 'William Cosco',
        duration: '30 horas',
        price: 'S/. 400.00',
        schedule: 'Sábados de 10:00 am a 4:00 pm',
    },
    // {
    //     id: 4,
    //     title: 'Curso de Levantamientos Topográficos con Drones',
    //     description: 'Aprende a utilizar drones para realizar levantamientos topográficos de alta precisión.',
    //     longDescription: 'En este curso, te enseñaremos a utilizar drones para llevar a cabo levantamientos topográficos de manera eficiente y precisa. Aprenderás técnicas avanzadas de vuelo, incluyendo planificación de misiones, control de la cámara y navegación. También dominarás el procesamiento de los datos capturados por el dron, desde la generación de nubes de puntos hasta la creación de modelos digitales del terreno. Al finalizar el curso, serás capaz de realizar levantamientos topográficos completos utilizando drones, lo que te permitirá ahorrar tiempo y obtener resultados de alta calidad.',
    //     image: 'public/assets/images/cursos/TopografiaConDron.png',
    //     category: 'topography',
    //     instructor: 'William Cosco',
    //     duration: '30 horas',
    //     price: 'S/. 450.00',
    //     schedule: 'Lunes, Miércoles y Viernes de 2:00 pm a 5:00 pm',
    // },
    {
        id: 4,
        title: 'Curso de Cartografía Digital y SIG',
        description: 'Domina las herramientas de cartografía digital y sistemas de información geográfica (SIG).',
        longDescription: 'En este curso, aprenderás a utilizar software especializado en cartografía digital y sistemas de información geográfica (SIG) para la creación de mapas y el análisis espacial. Cubriremos temas como la adquisición y procesamiento de datos geográficos, la elaboración de mapas temáticos, la integración de información de diversas fuentes y el uso de herramientas de análisis espacial. Al finalizar el curso, serás capaz de generar mapas de alta calidad, realizar análisis complejos y tomar decisiones informadas a partir de la información geográfica.',
        image: courses4,
        category: 'topography',
        instructor: 'William Cosco',
        duration: '35 horas',
        price: 'S/. 500.00',
        schedule: 'Martes y Jueves de 6:00 pm a 9:00 pm',
    },
    {
        id: 5,
        title: 'Curso de Fotogrametría con Drones',
        description: 'Aprende a utilizar drones para capturar imágenes aéreas y generar modelos 3D.',
        longDescription: 'En este curso, te enseñaremos a utilizar drones para realizar tareas de fotogrametría, es decir, la generación de modelos 3D, ortomosaicos y mapas a partir de imágenes aéreas. Aprenderás técnicas de vuelo específicas para la captura de imágenes, así como el uso de software especializado para el procesamiento y análisis de los datos obtenidos. Al finalizar el curso, serás capaz de planificar y ejecutar misiones de fotogrametría con drones, obteniendo resultados de alta precisión y calidad.',
        image: courses5,
        category: 'drones',
        instructor: 'William Cosco',
        duration: '25 horas',
        price: 'S/. 400.00',
        schedule: 'Sábados de 9:00 am a 2:00 pm',
    },
    {
        id: 6,
        title: 'Curso de Inspección de Infraestructura con Drones',
        description: 'Desarrolla habilidades para inspeccionar y monitorear infraestructura utilizando drones.',
        longDescription: 'En este curso, aprenderás a utilizar drones de manera segura y eficiente para la inspección y monitoreo de infraestructura, como torres, puentes y edificios. Cubriremos temas como la planificación de misiones, el uso de cámaras y sensores especializados, y el análisis de los datos recopilados. Además, te enseñaremos a generar informes detallados y a integrar la información obtenida con herramientas de gestión de activos. Al finalizar el curso, serás capaz de realizar inspecciones de infraestructura de manera rápida, segura y precisa utilizando drones.',
        image: courses6,
        category: 'drones',
        instructor: 'William Cosco',
        duration: '20 horas',
        price: 'S/.350',
        schedule: 'Sábados de 10:00 am a 2:00 pm',
    },
    {
        id: 7,
        title: 'Curso Avanzado de Estación Total',
        description: 'Profundiza en el uso de estaciones totales, incluyendo técnicas de medición y ajuste de datos.',
        longDescription: 'Este curso está diseñado para aquellos que desean dominar el uso de estaciones totales a un nivel avanzado. Aprenderás técnicas de medición de distancias y ángulos, así como métodos de ajuste y procesamiento de datos. También cubriremos aplicaciones especializadas de las estaciones totales, como la medición de deformaciones, el control de movimientos y la integración con otros sistemas de información geográfica. Al finalizar el curso, serás capaz de utilizar una estación total de manera experta, optimizando los resultados de tus levantamientos y proyectos.',
        image: courses7,
        category: 'station',
        instructor: 'William Cosco',
        duration: '40 horas',
        price: 'S/. 550.00',
        schedule: 'Sábados de 9:00 am a 5:00 pm',
    },
    {
        id: 8,
        title: 'Curso de Integración de Estación Total con BIM',
        description: 'Aprende a integrar la información de estaciones totales en modelos BIM.',
        longDescription: 'En este curso, te enseñaremos a integrar la información recopilada con estaciones totales en modelos BIM (Building Information Modeling) para mejorar la gestión de proyectos de construcción. Aprenderás a transferir datos de levantamientos topográficos a software de modelado BIM, a vincular la información de la estación total con los elementos del modelo y a utilizar estas herramientas para la toma de decisiones informadas. Al finalizar el curso, serás capaz de optimizar tus procesos de trabajo, aumentar la precisión de tus proyectos y mejorar la colaboración entre los diferentes equipos involucrados.',
        image: courses8,
        category: 'station',
        instructor: 'William Cosco',
        duration: '30 horas',
        price: 'S/. 450.00',
        schedule: 'Martes y Jueves de 6:00 pm a 9:00 pm',
    },
    {
        id: 9,
        title: 'Curso de AutoCAD para Topografía',
        description: 'Domina el uso de AutoCAD para la creación de planos topográficos.',
        longDescription: 'En este curso, aprenderás a utilizar las herramientas de AutoCAD para la elaboración de planos, mapas y perfiles topográficos. Cubriremos temas como la importación de datos de levantamientos, la creación de curvas de nivel, la generación de perfiles longitudinales y transversales, y la personalización de estilos y plantillas. También aprenderás a integrar información de otras fuentes, como sistemas de información geográfica (SIG) y modelos digitales del terreno. Al finalizar el curso, serás capaz de crear documentación topográfica de alta calidad utilizando AutoCAD.',
        image: courses9,
        category: 'autocad',
        instructor: 'William Cosco',
        duration: '35 horas',
        price: 'S/. 500.00',
        schedule: 'Lunes, Miércoles y Viernes de 6:00 pm a 9:00 pm',
    },
    {
        id: 10,
        title: 'Curso de Modelado 3D en AutoCAD',
        description: 'Aprende a crear modelos 3D avanzados utilizando las herramientas de AutoCAD.',
        longDescription: 'En este curso, te enseñaremos técnicas avanzadas de modelado 3D utilizando las herramientas de AutoCAD. Aprenderás a crear superficies complejas, sólidos y mallas, así como a aplicar texturas, luces y materiales para obtener resultados realistas. También cubriremos el proceso de renderizado y la generación de imágenes de alta calidad. Al finalizar el curso, serás capaz de crear modelos 3D detallados y fotorrealistas, lo que te permitirá mejorar la presentación de tus proyectos y comunicar tus ideas de manera más efectiva.',
        image: courses10,
        category: 'autocad',
        instructor: 'William Cosco',
        duration: '40 horas',
        price: 'S/. 550.00',
        schedule: 'Sábados de 9:00 am a 5:00 pm',
    },
];
const CoursePageSection = () => {
    const [filter, setFilter] = useState({ search: '', category: '' });
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isModalVisible, setModalVisible] = useState(false);

    const filteredCourses = courses.filter(course => {
        return (
            (filter.search === '' || course.title.toLowerCase().includes(filter.search.toLowerCase())) &&
            (filter.category === '' || course.category === filter.category)
        );
    });

    const handleLearnMore = (course) => {
        setSelectedCourse(course);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
        setSelectedCourse(null);
    };

    return (
        <section className="course-section" style={courseSectionStyle}>
            <div className="container" style={containerStyle}>
                <CourseFilterForm filter={filter} setFilter={setFilter} />
                <div className="course-grid" style={courseGridStyle}>
                    {filteredCourses.map((course, index) => (
                        <CourseItem key={index} course={course} onLearnMore={handleLearnMore} />
                    ))}
                </div>
            </div>
            {selectedCourse && (
                <CourseModal
                    course={selectedCourse}
                    isVisible={isModalVisible}
                    onClose={handleCloseModal}
                />
            )}
        </section>
    );
};

const courseSectionStyle = {
    backgroundColor: '#f8f9fa',
    padding: '60px 0',
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 15px',
};

const courseGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
};

export default CoursePageSection;
