import React from 'react';
import { Link } from 'react-router-dom';
import birds from './birds.js';



function Home() {
    return (
        <div>
            <h2>Birds:</h2>
            <div className="birdPage">
            {birds.map((bird) => {
                return (
                    <div key={bird.name} className='birdCage'>
                        <Link to={'/birds/' + bird.name} >
                            <img src={bird.image} />
                        </Link>
                
                    </div>
                )
             })}
             </div>
        </div>
    )
}
export default Home;