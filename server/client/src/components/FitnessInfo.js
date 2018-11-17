import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import './styles/fitnessInfo.css';

class FitnessInfo extends Component{
    constructor(){
        super()
        this.rate = ['select',1,2,3,4,5]
        this.r = []
        this.state={
            location:[],
            change:false,
            text:'',
            rating:'',
            newReview:[...this.r]
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

    handleInput = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleChange = (e) =>{
        let {rating} = this.state;
        this.setState({
            rating:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        e.target.reset();
        let {rating, text} = this.state
        let review={rating, text};
        axios.post('http://localhost:3100/post', {
            rating:rating,
            text:text
        })
        .then(()=>{
            this.setState({
                r:this.r.push(review),
                newReview: [...this.r]
            })
        })
    }

    render(){
        let {location, newReview} = this.state;
        return(
            <div className="fitness-info">
                <div className="single-location">
                    <h1>{location.name}</h1>
                    <img src={location.img_url} />
                    <Link to={`/`}><h3>{location.address1}<br/>
                    {location.address2}<br/>
                    {location.address3}</h3></Link>
                    <p>{location.display_phone}</p><br/>
                    <h3>Review</h3>
                    <form onSubmit={this.handleSubmit.bind(this)} className="signle-location-form">
                        <FormGroup controlId="formControlsSelect">
                            <ControlLabel>Rate</ControlLabel><br/>
                            <FormControl componentClass="select" onChange={this.handleChange}>
                            {this.rate.map(r=><option value={r}>{r}</option>)}
                            </FormControl>
                        </FormGroup>

                        <FormGroup controlId="formControlsTextarea">
                            <ControlLabel>Review</ControlLabel><br/>
                            <FormControl onInput={this.handleInput} componentClass="textarea" name="text" placeholder="What do you think?" />
                        </FormGroup>

                        <Button type="sumbit">Submit</Button>
                    </form>
                    <br/><a href={location.url} target="_blank">More info</a><br/>
                    <Link to={"/locations"}>Back</Link>
                </div>
                <div className="list-of-reviews">
                    <ul>
                        {newReview.map(n =><li>{n.rating} <br/> {n.text}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
export default FitnessInfo;