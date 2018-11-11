import React from 'react';
import {Link} from 'react-router-dom';

const FitnessLocations = ({locations, input, search, result}) =>{
    return(
        <div className="fitnessLocation">
            <h1>Fitness Locations</h1>
            <input name={search} onInput={input} />
            {result}
            {locations.map(l =><Link to={`/locations/${l.yelp_id}`} key={l.id}><div>{l.name}<br/>
                <img src={l.img_url} height="300px" width="300px" /><br/>
            </div></Link>)}<br/>
        </div>
    )
}
export default FitnessLocations;