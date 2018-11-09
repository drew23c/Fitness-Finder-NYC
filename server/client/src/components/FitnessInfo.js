import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FitnessInfo extends Component{
    constructor(){
        super()
        this.state={
            location:[]
        }
    }
    componentDidMount(){
        let id = this.props.match.params.id
        axios.get('http://localhost:3100/locations/' + id)
        .then(res=>{
            this.setState({
                location:res.data.data[0]
            })
        })
    }

    render(){
        let {location} = this.state;
        return(
            <div>
                <h1>{location.name}</h1>
                <img src={location.img_url} />
                <a href={`https://www.google.com/maps/place/${location.address1},${location.address2}/@${location.latitude},${location.longitude},17z`} target="_blank"><h3>{location.address1}<br/>
                {location.address2}<br/>
                {location.address3}</h3></a>
                <p>{location.display_phone}</p>
                <a href={location.url} target="_blank">More info</a><br/>
                <Link to={"/locations"}>Back</Link>
            </div>
        )
    }
}
export default FitnessInfo;