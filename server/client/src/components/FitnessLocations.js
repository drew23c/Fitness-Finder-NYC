import React from 'react';
import {Link} from 'react-router-dom';

const FitnessLocations = ({locations, click}) =>{
    return(
        <div className="fitnessLocation">
            <h1>Fitness Locations</h1>
            {locations.map(l =><Link onClick={click} to={`/fitness/${l.id}`} key={l.id}><div>{l.name}<br/>
                <img src={l.img_url} height="300px" width="300px" /><br/>
            </div></Link>)}<br/>
        </div>
    )
}
export default FitnessLocations;