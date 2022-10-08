import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddButton }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='tshirt-info'>
            <img src={picture} alt='' />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button onClick={() => handleAddButton(tshirt)}>Add to cart</button>
        </div>
    );
};

export default TShirt;