import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData()
    const handleAddButton = tshirt => {
        console.log(tshirt)
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
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Home;