import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { aboutCheckLists } from '../data/HomeThreeData/HomeThreeData';
import CountUp from 'react-countup';
import nosotros from '../../public/assets/images/imagenes-inicio/imagen-nosotros.jpg';
import './estilosComponentes/AboutTheee.css';



const AboutThree = () => {
    return (
        <>
            <section className="about-three bg-white padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="about-three-thumb">
                                <div className="about-three-thumb__inner">
                                    <img className='imagen-nosotros' style={{height:"500px"}} src={nosotros} alt=""/>
                                    <div className="project-content">
                                        <div className="project-content__inner">
                                            <h2 className="project-content__number">
                                                <CountUp end={parseInt(10)} duration={6} delay={0.2} />                                           </h2>
                                            <span className="project-content__text font-12">proyectos completados</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">

                                <SectionHeading
                                    headingClass="style-left"  
                                    subtitle="About Us"
                                    subtitleClass="bg-gray-100" 
                                    title="Realizamos la Mejor Topografía Con Gran Pasión" 
                                    renderDesc={true}
                                    desc="Ofrecemos servicios de topografía de alta calidad. Nuestro equipo de expertos está comprometido con la satisfacción del cliente y la precisión en cada proyecto."
                                    renderButton={false}
                                    buttonClass="btn-main"
                                    buttonText="View More"
                                />

                                <ul className="check-list style-two">
                                    {
                                        aboutCheckLists.map((aboutCheckList, index) => {
                                            return (
                                                <li className="check-list__item d-flex align-items-center" key={index}>
                                                    <span className="icon">{aboutCheckList.icon}</span>
                                                    <span className="text fw-semibold">{aboutCheckList.text}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default AboutThree;