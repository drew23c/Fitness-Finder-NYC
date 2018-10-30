import React from 'react';
import {Link} from 'react-router-dom';

const FitnessLocations = ({locations}) =>{
    return(
        <div className="fitnessLocation">
            {locations.map(l =><Link to={l.url} key={l.id}><div>{l.name}<br/>
                <img src={l.img_url} height="300px" width="300px" /><br/>
            </div></Link>)}<br/>
        </div>
    )
}
export default FitnessLocations;