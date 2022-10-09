import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()

    const [cart, setCart] = useState([])

        ;

    // add to cart

    const handleAddButton = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            alert('no')
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }
    const handleRemoveButton = tshirt => {
        const remain = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remain)
    }
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt.id}
                        tshirt={tshirt}
                        handleAddButton={handleAddButton}
                    ></TShirt>)
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart}
                    handleRemoveButton={handleRemoveButton}
                ></Cart>
            </div>

        </div>
    );
};

export default Home;