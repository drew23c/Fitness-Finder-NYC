import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class SingleReview extends Component{
    constructor(){
        super()
        this.state={
            singleReview:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id;
        axios.get('http://localhost:3100/reviews/' + id)
        .then(res=>{
            this.setState({
                singleReview: res.data.data[0]
            })
            console.log(res.data)
        })
    }
    render(){
        let {singleReview} = this.state;
        return(
            <div className="singleReview">
                <a href={singleReview.profile_url} target="_blank"><h2>{singleReview.user_name}</h2></a>
                <h2>{singleReview.name}</h2>
                <p>{singleReview.text}</p>
                <p>{singleReview.time_created}</p>
                <Link to={"/reviews"}>Back</Link>
            </div>
        )
    }
}
export default SingleReview;