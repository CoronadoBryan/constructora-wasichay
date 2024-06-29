import React from 'react';

const CourseItem = ({ course, onLearnMore }) => {
    return (
        <div className="course-item" style={courseItemStyle}>
            <div className="course-image" style={courseImageStyle}>
                <img src={course.image} alt={course.title} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="course-content" style={courseContentStyle}>
                <h3 style={courseTitleStyle}>{course.title}</h3>
                <p style={courseDescriptionStyle}>{course.description}</p>
                <button style={courseButtonStyle} onClick={() => onLearnMore(course)}>Learn More</button>
            </div>
        </div>
    );
};

const courseItemStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
};

const courseImageStyle = {
    width: '100%',
    height: '200px',
    overflow: 'hidden',
};

const courseContentStyle = {
    padding: '15px',
    textAlign: 'center',
};

const courseTitleStyle = {
    fontSize: '1.2rem',
    margin: '10px 0',
};

const courseDescriptionStyle = {
    fontSize: '1rem',
    color: '#666',
};

const courseButtonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default CourseItem;