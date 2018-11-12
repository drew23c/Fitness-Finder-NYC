import React from 'react';
import {Link} from 'react-router-dom';

const FitnessLocations = ({locations, input, search, result, click, change}) =>{
    return(
        <div className="fitnessLocation">
            <h1>Fitness Locations</h1>
            <div className="search">
            <input name={search} onInput={input} />
                <button onClick={click}>Search</button>
            {
                change === true ? 
                    <div>
                        {result.map(r =><Link to={`/locations/${r.yelp_id}`} key={r.id}><div>{r.name}<br/>
                        <img src={r.img_url} height="300px" width="300px" /><br/>
                        </div></Link>)}<br/>
                    </div>
                :
                <div>
                    {locations.map(l =><Link to={`/locations/${l.yelp_id}`} key={l.id}><div>{l.name}<br/>
                    <img src={l.img_url} height="300px" width="300px" /><br/>
                    </div></Link>)}<br/>
                </div>
            }
            </div>
        </div>
    )
}
export default FitnessLocations;