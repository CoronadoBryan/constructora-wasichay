import React from 'react';

const ServiceModal = ({ service, isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal fade show" tabIndex="-1" role="dialog" style={{ display: 'block' }} aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-scrollable" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body text-justify">
                        <img src={service.imageSrc} alt={service.title} className="img-fluid mb-3" />
                        <center>
                            <h4 className="modal-title" id="modalLabel">{service.title}</h4>
                        </center>
                        <p>{service.longDescription}</p>
                        <h5>Beneficios:</h5>
                        <ul>
                            {service.benefits && service.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Contactanos</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;
