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
            result:[],
            change:null
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

    handleInput = (e) =>{
        let {search} = this.state;
        this.setState({
            search: e.target.value
        })
    }

    handleClick = () =>{
        let {search} = this.state;
        axios.get('http://localhost:3100/search/?name=' + search)
        .then(res=>{
            this.setState({
                result:res.data.data,
                change:true
            })
        })
    }

    renderFitnessLocations = () =>{
        let {locations, search, result, change} = this.state;
        return(
            <FitnessLocations
                locations={locations}
                input={this.handleInput}
                click={this.handleClick}
                search={search}
                result={result}
                change={change}
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