import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FitnessInfo extends Component{
    constructor(){
        super()
        this.state={
            location:[],
            change:false
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get('http://localhost:3100/locations/' + id)
        .then(res=>{
            this.setState({
                location:res.data.data[0],
                change:true
            })
        })
    }

    render(){
        let {location} = this.state;
        return(
            <div>
                <h1>{location.name}</h1>
                <img src={location.img_url} />
                <Link to={`/map`}><h3>{location.address1}<br/>
                {location.address2}<br/>
                {location.address3}</h3></Link>
                <p>{location.display_phone}</p>
                <a href={location.url} target="_blank">More info</a><br/>
                <Link to={"/locations"}>Back</Link>
            </div>
        )
    }
}
export default FitnessInfo;