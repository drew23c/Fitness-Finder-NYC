import React from 'react';
import SimpleMap from './Map';


const Home = () =>{
    return(
        <div>
            <h1>Fitness Finder</h1>
            <div>
                <iframe width="1000" height="400" src="https://www.youtube.com/embed/ifQHURWXkWY?autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="simple-map">
                <SimpleMap/>
            </div>
        </div>
    )
}
export default Home;