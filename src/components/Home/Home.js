import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()

    const [cart, setCart] = useState([])

        ;

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
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Home;