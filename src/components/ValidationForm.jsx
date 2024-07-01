import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ValidationForm = (props) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            address: "",
            message: "",
        },
        validationSchema: yup.object({
            name: yup.string().min(3, "Too Short! Must be at least 3 characters long").required(),
            phone: yup.string().required(),
            address: yup.string().min(3, "Too Short! Must be at least 3 characters long").required(),
            email: yup.string().email("Your Email is not valid! Provide valid email").required(),
            message: yup.string().min(5, "Message must have minimum 5 characters"),
        }),
        onSubmit: (values, { resetForm }) => {
            emailjs.send(
                'service_9pqk6dj',
                'template_cneueim',
                values,
                '1Zp9ssMB4BQqLdgHc'
            ).then((response) => {
                toast.success("Congratulations! You Have Submitted Successfully.", {
                    theme: "colored",
                });
                resetForm();
            }).catch((error) => {
                toast.error("Something went wrong. Please try again later.", {
                    theme: "colored",
                });
            });
        },
    });

    const renderNameError = formik.touched.name && formik.errors.name && (
        <span className="text-danger">{formik.errors.name}</span>
    );
    const renderPhoneError = formik.touched.phone && formik.errors.phone && (
        <span className="text-danger">{formik.errors.phone}</span>
    );
    const renderEmailError = formik.touched.email && formik.errors.email && (
        <span className="text-danger">{formik.errors.email}</span>
    );
    const renderAddressError = formik.touched.address && formik.errors.address && (
        <span className="text-danger">{formik.errors.address}</span>
    );
    const renderMessageError = formik.touched.message && formik.errors.message && (
        <span className="text-danger">{formik.errors.message}</span>
    );

    return (
        <>
            <form action="#" onSubmit={formik.handleSubmit}>
                <div className="row gy-30">
                    <div className={props.colClass}>
                        {props.renderLabel && (
                            <label htmlFor="name" className={`form-label ${props.labelClass}`}>Tu nombre</label>
                        )}
                        <div className="position-relative">
                            <input
                                type="text"
                                placeholder="Tu nombre"
                                name="name"
                                id="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                className={`${props.inputClass} ${
                                    formik.touched.name && formik.errors.name ? "is-invalid" : ""
                                }`}
                            />
                            <span className={`input-icon ${props.iconSpanClass}`}><i className="fas fa-user"></i></span>
                        </div>
                        {renderNameError}
                    </div>

                    <div className={props.colClass}>
                        {props.renderLabel && (
                            <label htmlFor="phone" className={`form-label ${props.labelClass}`}>Tu teléfono</label>
                        )}
                        <div className="position-relative">
                            <input
                                type="tel"
                                placeholder="Tu teléfono"
                                name="phone"
                                id="phone"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                                className={`${props.inputClass} ${
                                    formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
                                }`}
                            />
                            <span className={`input-icon ${props.iconSpanClass}`}><i className="fas fa-phone"></i></span>
                        </div>
                        {renderPhoneError}
                    </div>

                    <div className={props.colClass}>
                        {props.renderLabel && (
                            <label htmlFor="email" className={`form-label ${props.labelClass}`}>Tu correo electrónico</label>
                        )}
                        <div className="position-relative">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                name="email"
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                className={`${props.inputClass} ${
                                    formik.touched.email && formik.errors.email ? "is-invalid" : ""
                                }`}
                            />
                            <span className={`input-icon ${props.iconSpanClass}`}><i className="fas fa-paper-plane"></i></span>
                        </div>
                        {renderEmailError}
                    </div>

                    <div className={props.colClass}>
                        {props.renderLabel && (
                            <label htmlFor="address" className={`form-label ${props.labelClass}`}>Tu dirección</label>
                        )}
                        <div className="position-relative">
                            <input
                                type="text"
                                placeholder="Tu dirección"
                                name="address"
                                id="address"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.address}
                                className={`${props.inputClass} ${
                                    formik.touched.address && formik.errors.address ? "is-invalid" : ""
                                }`}
                            />
                            <span className={`input-icon ${props.iconSpanClass}`}><i className="fas fa-map-marker-alt"></i></span>
                        </div>
                        {renderAddressError}
                    </div>

                    <div className="col-lg-12">
                        {props.renderLabel && (
                            <label htmlFor="message" className={`form-label ${props.labelClass}`}>Tu mensaje</label>
                        )}
                        <div className="position-relative">
                            <textarea
                                placeholder="Escríbenos un mensaje ..."
                                name="message"
                                id="message"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.message}
                                className={`${props.inputClass} ${
                                    formik.touched.message && formik.errors.message ? "is-invalid" : ""
                                }`}
                            ></textarea>
                            <span className={`input-icon ${props.iconSpanClass}`}><i className="fas fa-envelope"></i></span>
                        </div>
                        {renderMessageError}
                    </div>

                    <div className="col-lg-12">
                        <button type="submit" className="btn btn-main w-100"> Enviar mensaje </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};

export default ValidationForm;
