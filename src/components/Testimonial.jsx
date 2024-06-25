import React from 'react';
import Slider from "react-slick";

import { testimonials } from '../data/HomeOneData/HomeOneData';
import TestimonialItem from './items/TestimonialItem';
import TestimonialThumb from '../../public/assets/images/thumbs/testimonial-img.png';
import SectionHeading from '../common/SectionHeading';

var settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    draggable: true,
    speed: 900,
    infinite: true,
};

const Testimonial = () => {

    const slider = React.useRef(null);

    return (
        <>
            {/* ==================== Testimonials Section Start ==================== */}
            <section className="testimonial padding-y-60">
                <div className="container container-two">

                    <SectionHeading
                        headingClass="section-heading style-left style-flex"  
                        subtitle="Testimonios de Clientes"
                        title="Opiniones sobre nuestro trabajo" 
                        renderDesc={false}
                        desc="Nuestros clientes valoran la dedicación y profesionalismo con los que abordamos cada proyecto. Aquí puedes leer algunas de sus experiencias y cómo nuestros servicios han superado sus expectativas."
                        renderButton={false}
                        renderBesideDesc={true}
                        buttonClass="btn-main"
                        buttonText="View More"
                    />

                    <div className="testimonial__inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-8">
                                <div className="testimonial-box overflow-hidden position-relative">
                                    <Slider {...settings} ref={slider}>
                                        {
                                            testimonials.map((testimonial, index) => {
                                                return (
                                                    <TestimonialItem testimonial={testimonial} key={index}/>
                                                )
                                            })
                                        }
                                    </Slider>
                                    <button onClick={() => slider?.current?.slickPrev()}></button>
                                    <button onClick={() => slider?.current?.slickNext()}></button>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="testimonial-thumb">
                                    <img src='https://i.ibb.co/3MZYz94/pixelcut-export.jpg' alt="" className="cover-img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ==================== Testimonials Section End ==================== */}   
        </>
    );
};

export default Testimonial;