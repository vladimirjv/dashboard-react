import React, { Component } from "react";
// import PropTypes from 'prop-types'
import mapboxgl from "mapbox-gl";
import { apiToken, DRAWER_WIDTH } from "../../utils/map.js";
import { drawMap } from "../../services/mapDrawService";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  map: {
    [theme.breakpoints.up("md")]: {
      left: DRAWER_WIDTH
    },
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    mapboxgl.accessToken = apiToken;
    this.map = drawMap("map", "streets", [-96.144886, 19.196438], 13);
  }

  render() {
    return <div className={this.props.classes.map} id="map" />;
  }
}
export default withStyles(styles)(Map);
