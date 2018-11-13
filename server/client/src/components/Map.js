import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import gKey from '../secret/google';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class SimpleMap extends Component {
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
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: gKey.key }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.6961786}
            lng={-73.9791299}
            text={'Center'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default SimpleMap;