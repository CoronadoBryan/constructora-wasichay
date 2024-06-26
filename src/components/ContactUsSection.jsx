import React, { useRef } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const ContactUsSection = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        //   Please se documentation for more information

        emailjs
            .sendForm(
                'service_5opdqb8', // YOUR_SERVICE_ID
                'template_tel2xio', // YOUR_TEMPLATE_ID
                form.current, {
                publicKey: 'TkEXMnREcdrQyndFz', // YOUR_PUBLIC_KEY
            })
            .then(
                () => {
                    form.current.reset();
                    toast.success("Congratulations! You Have Submitted Successfully.", {
                        theme: "colored",
                    });
                    console.log('SUCCESS!');
                },
                (error) => {
                    toast.error("Something went wrong! Your message didn't sent.", {
                        theme: "colored",
                    });
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>
            <ToastContainer />
            <section className="contact-us-section padding-b-120">
                <div className="container container-two">
                    <div className="contact-form bg-white">
                        <div className="section-heading">
                            <span className="section-heading__subtitle bg-gray-100">
                                <span className="text-gradient fw-semibold">Contáctanos</span>
                            </span>
                            <h2 className="section-heading__title">¿Tienes alguna pregunta?</h2>
                            <p className="section-heading__desc">¿Necesitas apoyo en proyectos de construcción o topografía? Nuestro equipo de profesionales altamente calificados está listo para asistirte. Somos la opción preferida por muchos clientes en el sector de la construcción y la topografía.</p>
                        </div>
                        <div className="contact-form__form">
                            <form ref={form} onSubmit={sendEmail} className="contact-form__form">
                                <div className="row gy-4">
                                    <div className="col-md-6 col-xs-6">
                                        <h3>Información Personal</h3>
                                        <div className="form-group">
                                            <label htmlFor="user_name">Nombre:</label>
                                            <input type="text" className="common-input" id="user_name" name='user_name' placeholder="Tu nombre" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_email">Correo Electrónico:</label>
                                            <input type="email" className="common-input" id="user_email" name='user_email' placeholder="Tu correo electrónico" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="user_phone">Número de Teléfono:</label>
                                            <input type="tel" className="common-input" id="user_phone" name='user_phone' placeholder="Número de teléfono" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-6">
                                        <h3>Asunto y Mensaje</h3>
                                        <div className="form-group">
                                            <label htmlFor="user_subject">Asunto:</label>
                                            <input type="text" className="common-input" id="user_subject" name='user_subject' placeholder="Asunto" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="service">Tipo de Servicio:</label>
                                            <select id="service" name="service" className="common-input" required>
                                                <option value="Asesoría en Integración de Drones">Asesoría en Integración de Drones</option>
                                                <option value="Capacitación en Uso de Drones">Capacitación en Uso de Drones</option>
                                                <option value="Análisis de Proyectos Topográficos">Análisis de Proyectos Topográficos</option>
                                                <option value="Asesoría en Normativas y Regulaciones">Asesoría en Normativas y Regulaciones</option>
                                                <option value="Casos de Éxito y Mejores Prácticas">Casos de Éxito y Mejores Prácticas</option>
                                                <option value="Soporte Técnico y Postventa">Soporte Técnico y Postventa</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Mensaje:</label>
                                            <textarea className="common-input" id="message" name='message' placeholder="Tu mensaje" rows="5" required></textarea>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-main w-100">Enviar Ahora</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

    // return (
    //     <>
    //         <ToastContainer />
    //         <section className="contact-us-section padding-b-120">
    //             <div className="container container-two">
    //                 <div className="contact-form bg-white">
    //                     <div className="section-heading">
    //                         <span className="section-heading__subtitle bg-gray-100">
    //                             <span className="text-gradient fw-semibold">Contactanos</span>
    //                         </span>
    //                         <h2 className="section-heading__title">¿Tienes alguna pregunta?</h2>
    //                         <p className="section-heading__desc">¿Necesitas apoyo en proyectos de construcción o topografía? Nuestro equipo de profesionales altamente calificados está listo para asistirte. Somos la opción preferida por muchos clientes en el sector de la construcción y la topografía</p>
    //                     </div>
    //                     <div className="contact-form__form">

    //                         <form ref={form} onSubmit={sendEmail} className="contact-form__form">
    //                             <div className="row gy-4">
    //                                 <div className="col-sm-6 col-xs-6">
    //                                     <input type="text" className="common-input" name='user_name' placeholder="Your fasd" />
    //                                 </div>
    //                                 <div className="col-sm-6 col-xs-6">
    //                                     <input type="email" className="common-input" name='user_email' placeholder="Your E-mail" />
    //                                 </div>
    //                                 <div className="col-sm-6 col-xs-6">
    //                                     <input type="tel" className="common-input" name='user_phone' placeholder="Phone Number" />
    //                                 </div>
    //                                 <div className="col-sm-6 col-xs-6">
    //                                     <input type="text" className="common-input" name='user_subject' placeholder="Subject" />
    //                                 </div>
    //                                 <div className="col-12">
    //                                     <textarea className="common-input" name='message' placeholder="Your Message"></textarea>
    //                                 </div>
    //                                 <div className="col-12">
    //                                     <button type="submit" className="btn btn-main w-100">Submit Now</button>
    //                                 </div>
    //                             </div>
    //                         </form>


    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     </>
    // );
};

export default ContactUsSection;