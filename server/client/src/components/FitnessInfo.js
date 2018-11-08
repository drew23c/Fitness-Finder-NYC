import React, {Component} from 'react';
import axios from 'axios';

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
            // console.log(res)
        })
    }

    render(){
        let {location} = this.state;
        return(
            <div>
                <h1>{location.name}</h1>
                <img src={location.img_url} />
                <h3>{location.address1}<br/>
                {location.address2}<br/>
                {location.address3}</h3>
                <p>{location.display_phone}</p>
            </div>
        )
    }
}
export default FitnessInfo;