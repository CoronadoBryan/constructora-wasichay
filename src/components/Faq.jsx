import SectionHeading from '../common/SectionHeading';
import FaqAccordion from '../common/FaqAccordion';

const Faq = () => {
    return (
        <>
            <section className="faq padding-y-120 mt-minus-120">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-6 pe-xl-5">

                            <SectionHeading
                                headingClass="section-heading style-left"  
                                subtitle=""
                                subtitleClass="" 
                                title="Preguntas más Frecuentes" 
                                renderDesc={false}
                                desc="Real estate is a lucrative ind involves the buying selling and reproperties. It Real estate is a lucrative ind involves. Real estate is a lucrative"
                                renderButton={false}
                                renderBesideDesc={false}
                                buttonClass="btn-main"
                                buttonText="View More"
                            />
                            
                            <FaqAccordion accordionClass="" itemClass=""/>
                            
                        </div>
                        <div className="col-lg-6  d-lg-block d-none">
                            <div className="faq-thumb">
                                <img src="https://i.ibb.co/zbQr2yp/istockphoto-850824032-612x612.jpg" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>   
        </>
    );
};

export default Faq;