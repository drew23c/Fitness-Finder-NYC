import React, {Component} from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import FitnessLocations from './FitnessLocations';

class Fitness extends Component{
    constructor(){
        super()
        this.state={
            locations:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3100/locations')
        .then(res=>{
            this.setState({
                locations: res.data.data
            })
            console.log(res.data.data)
        })
    }

    renderFitnessLocations = () =>{
        let {locations} = this.state;
        return(
            <FitnessLocations
                locations={locations}
            />
        )
    }

    render(){
        return(
            <div>
                <h1>NYC Fitness Locations</h1>
                <Route exact path = "/fitness" render = {this.renderFitnessLocations} />
            </div>
        )
    }
}
export default Fitness;