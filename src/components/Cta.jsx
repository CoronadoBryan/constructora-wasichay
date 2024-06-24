import React from 'react';
import CtaThumb from '../../public/assets/images/thumbs/cta-img.png';
// import NewsletterForm from '../common/NewsletterForm';

const Cta = (props) => {
    return (
        <section className={`cta padding-b-120 ${props.ctaClass}`}>
            <div className="container container-two">
                <div className="cta-box flx-between gap-2">
                    <div className="cta-content">
                        <h2 className="cta-content__title">HISTORIA DE  <span className="text-gradient">GROUP WASICHAY</span> </h2>
                        <p className="cta-content__desc">En Group Wasichay contamos con 7 años de experiencia en el ámbito de la topografía urbana y rústica, peritaje de lindes, escaneos y mapeados en tres dimensiones, seguimiento de obras e inspección de drones.
                        Ofrecemos las soluciones de construcción ideales que se ajustan a su presupuesto. Nuestro compromiso es brindarle los mejores paquetes de servicios para materializar sus proyectos con excelencia y eficiencia.</p>

                        {/* <NewsletterForm formClass="max-w-unset" inputClass="bg-danger" iconClass="text-gradient"/> */}
                        
                    </div>
               
                    <div className="cta-content__thumb d-xl-block d-none">
                        <img src={CtaThumb} alt="Cta Image"/>
                    </div>
                </div>
            </div>
        </section>   
    );
};

export default Cta;