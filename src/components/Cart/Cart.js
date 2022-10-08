import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            order summary {cart.length}
        </div>
    );
};

export default Cart;