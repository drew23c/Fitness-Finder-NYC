import React, {Component} from 'react';
import axios from 'axios';
import {Route, Switch} from 'react-router-dom';
import FitnessLocations from './FitnessLocations';
import FitnessInfo from './FitnessInfo';

class Fitness extends Component{
    constructor(props){
        super(props)
        this.state={
            locations:[],
            location:[],
            details:[]
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

    handleDetails = () =>{
        let id = this.props.match.params.id;
        axios.get('http://localhost:3100/' + id + '/reviews')
        .then(res=>{
            console.log("RES ",this.props)
            this.setState({
                details:res.data.data
            })
        })
    }

    componentDidUpdate(){
        this.handleDetails
    }

    renderFitnessLocations = () =>{
        let {locations} = this.state;
        return(
            <FitnessLocations
                locations={locations}
            />
        )
    }

    renderFitnessInfo = ({match}) =>{
        let id = match.params.id
        axios.get('http://localhost:3100/locations/' + id)
        .then(res=>{
            // console.log("RES ",res.data.data[0])
            this.setState({
                location:res.data.data[0]
            })
        })

        let {location, details} = this.state;
        return(
            <FitnessInfo
                fitnessLocation={location}
                reviews={this.handleDetails}
                details={details}
            />
        )
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path = "/fitness" render = {this.renderFitnessLocations} />
                    <Route path = "/fitness/:id" render = {this.renderFitnessInfo} />
                </Switch>
            </div>
        )
    }
}
export default Fitness;