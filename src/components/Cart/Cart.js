import React from 'react';

const Cart = ({ cart, handleRemoveButton }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item !!!</p>
    }
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
            {
                message
            }

        </div>
    );
};

export default Cart;