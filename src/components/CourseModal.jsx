// import React from 'react';

// const CourseModal = ({ course, isVisible, onClose }) => {
//     if (!isVisible) {
//         return null;
//     }

//     return (
//         <div style={modalOverlayStyle}>
//             <div style={modalContentStyle}>
//                 <button onClick={onClose} style={closeButtonStyle}>&times;</button>
//                 <div style={modalHeaderStyle}>
//                     <h2 style={modalTitleStyle}>{course.title}</h2>
//                 </div>
//                 <div style={modalBodyStyle}>
//                     <div style={modalImageStyle}>
//                         <img src={course.image} alt={course.title} style={{ width: '100%', height: 'auto' }} />
//                     </div>
//                     <div style={modalDetailsStyle}>
//                         <p>{course.longDescription}</p>
//                         <p><strong>Instructor:</strong> {course.instructor}</p>
//                         <p><strong>Duración:</strong> {course.duration}</p>
//                         <p><strong>Precio:</strong> {course.price}</p>
//                         <p><strong>Horario:</strong> {course.schedule}</p>
//                     </div>
//                 </div>
//                 <div style={modalFooterStyle}>
//                     <button onClick={onClose} style={modalButtonStyle}>Close</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const modalOverlayStyle = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000,
// };

// const modalContentStyle = {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     width: '80%',
//     maxWidth: '600px',
//     boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//     position: 'relative',
// };

// const closeButtonStyle = {
//     position: 'absolute',
//     top: '10px',
//     right: '10px',
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '1.5rem',
//     cursor: 'pointer',
// };

// const modalHeaderStyle = {
//     borderBottom: '1px solid #ddd',
//     marginBottom: '15px',
// };

// const modalTitleStyle = {
//     margin: 0,
// };

// const modalBodyStyle = {
//     display: 'flex',
//     flexDirection: 'row',
// };

// const modalImageStyle = {
//     flex: 1,
//     marginRight: '15px',
// };

// const modalDetailsStyle = {
//     flex: 2,
// };

// const modalFooterStyle = {
//     marginTop: '20px',
//     textAlign: 'right',
// };

// const modalButtonStyle = {
//     backgroundColor: '#007BFF',
//     color: '#fff',
//     border: 'none',
//     padding: '10px 20px',
//     borderRadius: '4px',
//     cursor: 'pointer',
// };

// export default CourseModal;

import React from 'react';

const CourseModal = ({ course, isVisible, onClose }) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{course.title}</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <img src={course.image} alt={course.title} className="img-fluid mb-3" />
                        <p>{course.longDescription}</p>
                        <p><strong>Instructor:</strong> {course.instructor}</p>
                        <p><strong>Duración:</strong> {course.duration}</p>
                        <p><strong>Precio:</strong> {course.price}</p>
                        <p><strong>Horario:</strong> {course.schedule}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseModal;
