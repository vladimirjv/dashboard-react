import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import mapboxgl from "mapbox-gl";
import { apiToken, drawMap } from "../utils/map";


export default class Map extends Component {
  
  componentDidMount(){
    mapboxgl.accessToken =  apiToken;
    this.map = drawMap("map","streets")
  }

  render() {
    const style ={
        position: 'absolute',
        top: 0,
        bottom: 0,
        width: '90%'
      };
    return (
      <div style={style} id="map">
      </div>
    )
  }
}
