import React from 'react';

const FitnessInfo = ({fitnessLocation, details, reviews}) =>{
    return(
        <div>
            <h1>{fitnessLocation.name}</h1>
            <img src={fitnessLocation.img_url} />
            <h3>{fitnessLocation.address1}<br/>
            {fitnessLocation.address2}<br/>
            {fitnessLocation.address3}</h3>
            <p>{fitnessLocation.display_phone}</p>
            <button onClick={reviews}>More Details</button>
            {details}
        </div>
    )
}
export default FitnessInfo;