import React from 'react';
import {Link} from 'react-router-dom'

const AllReviews = ({reviews}) =>{
    return(
        <div className="reviews">
            <h1>Reviews</h1>
            {reviews.map(r=><ul>
                <li key={r.review_id}>
                <Link to={`/reviews/${r.yelp_id}`}>
                    <img src={r.image_url} /><br/>
                </Link>
                <h2>{r.rating}</h2><br/>
                {/* <p>{r.text}</p>
                <p>{r.time_created}</p>
                <a href={r.profile_url} target="_blank">{r.user_name}</a> */}

                </li>
            </ul>)}
        </div>
    )
}
export default AllReviews;