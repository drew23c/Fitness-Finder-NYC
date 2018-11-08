import React, {Component} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import FitnessLocations from './FitnessLocations';
import FitnessInfo from './FitnessInfo';

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
                <Switch>
                    <Route exact path = "/locations" render = {this.renderFitnessLocations} />
                    <Route path = "/locations/:id" component = {FitnessInfo} />
                </Switch>
            </div>
        )
    }
}
export default Fitness;