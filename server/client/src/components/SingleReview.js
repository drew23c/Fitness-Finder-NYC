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
                <h2>{singleReview.user_name}</h2>
                <h2>{singleReview.name}</h2>
                <p>{singleReview.text}</p>
                <p>{singleReview.time_created}</p>
                <a href={singleReview.profile_url} target="_blank">Profile</a><br/><br/>
                <Link to={"/reviews"}>Back</Link>
            </div>
        )
    }
}
export default SingleReview;