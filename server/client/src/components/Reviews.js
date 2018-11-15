import React, {Component} from 'react';
import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import AllReviews from './AllReviews';
import SingleReview from './SingleReview';

class Reviews extends Component{
    constructor(){
        super()
        this.state={
            reviews:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3100/reviews')
        .then(res =>{
            this.setState({
                reviews: res.data.data
            })
        })
    }

    renderAllReviews = () =>{
        let {reviews} = this.state;
        return(
            <AllReviews
                reviews={reviews}
            />
        )
    }

    render(){
        return(
            <Switch>
                <Route exact path = "/reviews" render={this.renderAllReviews} />
                <Route path = "/reviews/:id" component={SingleReview} />
            </Switch>
        )
    }
}
export default Reviews;