import React from 'react';
import {Link} from 'react-router-dom';
import {FormControl, Button} from 'react-bootstrap';
import './styles/fitnessLocations.css';

const FitnessLocations = ({locations, input, search, result, click, change}) =>{
    return(
        <div className="fitness-locations">
            <h1>Fitness Locations</h1>
            <div className="search">
                <FormControl
                className="search-input"
                type="text"
                placeholder="Search here"
                name={search}
                onInput={input}
                />
                <Button onClick={click}>Search</Button>
            {
                change === true ? 
                <div className="fitness-locations-list">
                    {result.map(r =><Link to={`/locations/${r.yelp_id}`} key={r.id}><div>{r.name}<br/>
                    <img src={r.img_url} height="300px" width="300px" /><br/>
                    </div></Link>)}<br/>
                </div>
                :
                <div className="fitness-locations-list">
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