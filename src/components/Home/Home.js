import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';

const Home = () => {
    const tshirts = useLoaderData()
    return (
        <div>
            {
                tshirts.map(tshirt => <TShirt
                    key={tshirt.id}
                    tshirt={tshirt}
                ></TShirt>)
            }
        </div>
    );
};

export default Home;