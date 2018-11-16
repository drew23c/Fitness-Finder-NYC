import React from 'react';
import SimpleMap from './Map';
import './styles/home.css';
import {Jumbotron} from 'react-bootstrap';

const Home = () =>{
    return(
        <div className="home">
            <Jumbotron>
                <h1>Find Your Gym!</h1>
                <p>
                {`Fitness Finder is an app that features a list of open martial
                arts gyms sorted from highest to lowest rated by their customers.
                You can view the reviews from the top rated gyms, get information, 
                and rate each gym.`}
                </p>
            </Jumbotron>
            <div>
                <iframe width="1000" height="400" src="https://www.youtube.com/embed/ifQHURWXkWY?autoplay=1&amp;controls=0&amp;showinfo=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="simple-map">
                <SimpleMap/>
            </div>
        </div>
    )
}
export default Home;