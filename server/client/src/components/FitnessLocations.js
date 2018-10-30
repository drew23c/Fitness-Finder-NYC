import React from 'react';

const FitnessLocations = ({locations}) =>{
    return(
        <div className="fitnessLocation">
            {locations.map(l =><div key={l.yelpId}>{l.name}</div>)}
        </div>
    )
}
export default FitnessLocations;