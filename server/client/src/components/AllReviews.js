import React from 'react';
import {Link} from 'react-router-dom'
import './styles/allReviews.css'

const AllReviews = ({reviews}) =>{
    return(
        <div className="reviews">
            <h1>Reviews</h1>
            {reviews.map(r=><ul>
                <li key={r.id}>
                <Link to={`/reviews/${r.yelp_id}`}>
                    <img src={r.image_url} height="300px" width="300px" /><br/>
                </Link>
                <h2>Rating: {r.rating}</h2><br/>
                </li>
            </ul>)}
        </div>
    )
}
export default AllReviews;