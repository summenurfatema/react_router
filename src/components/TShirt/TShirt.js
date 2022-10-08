import React from 'react';

const TShirt = ({ tshirt }) => {
    const { picture } = tshirt;
    return (
        <div>
            <img src={picture} alt='' />
        </div>
    );
};

export default TShirt;