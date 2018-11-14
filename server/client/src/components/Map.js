import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import gKey from '../secret/google';
import axios from 'axios';
import {Link} from 'react-router-dom';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
  constructor(){
      super();
      this.state={
        pins:[]
      }
  }

  componentDidMount(){
      axios.get('http://localhost:3100/locations')
      .then(res=>{
          this.setState({
            pins:res.data.data
          })
      })
  }

  static defaultProps = {
    center: {
      lat: 40.69,
      lng: -73.97
    },
    zoom: 11
  };

 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: gKey.key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {this.state.pins.map(p=><AnyReactComponent
            lat={p.latitude}
            lng={p.longitude}
            text={<h3><b><Link to={`/locations/${p.yelp_id}`}>{p.name}</Link></b></h3>}
          />)}
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;