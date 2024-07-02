import React from 'react';

const CourseModal = ({ course, isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div style={modalOverlayStyle}>
            <div style={modalContentStyle}>
                <button onClick={onClose} style={closeButtonStyle}>&times;</button>
                <div style={modalHeaderStyle}>
                    <h2 style={modalTitleStyle}>{course.title}</h2>
                </div>
                <div style={modalBodyStyle}>
                    <div style={modalImageStyle}>
                        <img src={course.image} alt={course.title} style={{ width: '100%', height: 'auto' }} />
                    </div>
                    <div style={modalDetailsStyle}>
                        <p>{course.longDescription}</p>
                        <p><strong>Instructor:</strong> {course.instructor}</p>
                        <p><strong>Duración:</strong> {course.duration}</p>
                        <p><strong>Precio:</strong> {course.price}</p>
                        <p><strong>Horario:</strong> {course.schedule}</p>
                    </div>
                </div>
                <div style={modalFooterStyle}>
                    <button onClick={onClose} style={modalButtonStyle}>Close</button>
                </div>
            </div>
        </div>
    );
};

const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
};

const modalContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    width: '80%',
    maxWidth: '600px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    position: 'relative',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
};

const modalHeaderStyle = {
    borderBottom: '1px solid #ddd',
    marginBottom: '15px',
};

const modalTitleStyle = {
    margin: 0,
};

const modalBodyStyle = {
    display: 'flex',
    flexDirection: 'row',
};

const modalImageStyle = {
    flex: 1,
    marginRight: '15px',
};

const modalDetailsStyle = {
    flex: 2,
};

const modalFooterStyle = {
    marginTop: '20px',
    textAlign: 'right',
};

const modalButtonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default CourseModal;
