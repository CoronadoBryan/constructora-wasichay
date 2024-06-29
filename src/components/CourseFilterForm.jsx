import React from 'react';

const CourseFilterForm = ({ filter, setFilter }) => {
    const handleInputChange = (e) => {
        setFilter({ ...filter, search: e.target.value });
    };

    const handleSelectChange = (e) => {
        setFilter({ ...filter, category: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Puedes agregar lógica adicional aquí si es necesario
    };

    return (
        <form style={filterFormStyle} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search courses..."
                style={filterInputStyle}
                value={filter.search}
                onChange={handleInputChange}
            />
            <select style={filterSelectStyle} value={filter.category} onChange={handleSelectChange}>
                <option value="">Todas las categorias</option>
                <option value="drones">Drones</option>
                <option value="topography">Topografía</option>
                <option value="station">Estación Total</option>
                <option value="autocad">AutoDesk</option>
            </select>
            <button type="submit" style={filterButtonStyle}>Filter</button>
        </form>
    );
};

const filterFormStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
};

const filterInputStyle = {
    width: '60%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
};

const filterSelectStyle = {
    width: '20%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
};

const filterButtonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
};

export default CourseFilterForm;
