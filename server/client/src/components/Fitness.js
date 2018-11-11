import React, {Component} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import FitnessLocations from './FitnessLocations';
import FitnessInfo from './FitnessInfo';

class Fitness extends Component{
    constructor(){
        super()
        this.state={
            locations:[],
            search:'',
            result:[]
        }
    }

    componentDidMount(){
        let {locations} = this.state;
        axios.get('http://localhost:3100/locations')
        .then(res=>{
            this.setState({
                locations: res.data.data,
                result:locations.indexOf(res.data.data)
            }) 
        })
    }

    handleInput = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.value);
    }
    renderFitnessLocations = () =>{
        let {locations, search, result} = this.state;
        return(
            <FitnessLocations
                locations={locations}
                input={this.handleInput}
                search={search}
                result={result}
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