import React from 'react';
import './estilosComponentes/Servicios.css';
import '../../public/assets/Icons/style.css';

const ServiceItem = ({ service, onLearnMore }) => {
    const handleTitleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="service-items-box-two p-3 rounded d-flex flex-column h-100" onClick={() => onLearnMore(service)}>
            <div className="d-flex flex-column align-items-center">
                <div className="service-icon-thumb">
                    <i className={`icon ${service.iconClass}`}></i>
                </div>
                <div className="service-items-title">
                    <h4><a href="#" onClick={handleTitleClick}>{service.title}</a></h4>
                </div>
            </div>
            <div className="service-items-content-two">
                <p>{service.description}</p>
            </div>
            <div className="service-items-thumb-two position-relative">
                <div className="service-items-icon-two">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;
