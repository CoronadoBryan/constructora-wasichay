import React from 'react';
import './estilosComponentes/Servicios.css';

const ServiceItem = ({ service, onLearnMore }) => {
    return (
        <div className="service-items-box-two p-3 rounded d-flex flex-column" onClick={() => onLearnMore(service)}>
            <div className="d-flex align-items-center mb-3">
                <div className="service-icon-thumb flex-shrink-0">
                    <img src={service.iconSrc} alt={service.iconAlt} />
                </div>
                <div className="service-items-title ms-3">
                    <h4><a href="#">{service.title}</a></h4>
                </div>
            </div>
            <div className="service-items-content-two flex-grow-1">
                <p>{service.description}</p>
            </div>
            <div className="service-items-thumb-two position-relative">
                <img src={service.thumbSrc} alt={service.thumbAlt} className="img-fluid rounded" />
                <div className="service-items-icon-two position-absolute top-0 end-0 me-3 mt-n3">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
