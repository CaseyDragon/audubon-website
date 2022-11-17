import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import birds from './birds'

const Showcase = () => {

    const navigate = useNavigate();
    const { birdName } = useParams();
    const newBird = birds.find(thisBird => thisBird.name === birdName)
    const { name, genus, image, conservationStatus, homepage } = newBird;

    console.log('bird', newBird);

    return (
        <>
            <h1>Showcase:</h1>
            <div className="image"><img src={image} /></div>
            <div className="birdName">{name}</div>
            <div className="birdGenus">{genus}</div>
            <div className="conservationStatus"><span>Conservation status</span> <br />{conservationStatus}</div>
            <button onClick={() => navigate(-1)}>Back</button>
            <button className='homepage' ><a href={homepage}> Read More</a></button>
            

        </>
    )
}

export default Showcase