import React from 'react';

const ProductNavItem = ({id, index, text, navigate, active}) => {
    const navStyle = active === index ? {
        cursor: 'pointer',
        borderBottom: 'solid 2px black',
        fontWeight: 'bold'
    } : {
        cursor: 'pointer',
    }
    return (
        <a 
            key={id}
            onClick={() => navigate(index)}
            className="mx-5"
            style={navStyle}
        >
        {text}
        </a>
    );
};

export default ProductNavItem;