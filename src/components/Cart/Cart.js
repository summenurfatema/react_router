import React from 'react';

const Cart = ({ cart, handleRemoveButton }) => {
    return (
        <div>
            order summary {cart.length}
            {
                cart.map(tshirt => <p
                    key={tshirt._id}>
                    {tshirt.name}
                    <button onClick={() => handleRemoveButton(tshirt)}>X</button>
                </p>)
            }

        </div>
    );
};

export default Cart;