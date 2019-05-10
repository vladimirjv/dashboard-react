//? Imports React
import React, { Component } from "react";
//? Imports MaterialUI
import { withStyles } from "@material-ui/core/styles";
//? Imports JSLibraries
import mapboxgl from "mapbox-gl";
//? Imports Styles
import { styles } from "./map.styles.js";
//? Imports Utils-Extra (project files)
import { apiToken } from "../../utils/map.js";
import { drawMap, drawMarkets } from "../../services/mapDrawService";
import ButtonsControl from "../../utils/MapButonsControll.js";
import { PanicRandom } from "../../services/mapService.js";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panicAlerts: PanicRandom(6)
    };
  }

  componentDidMount() {
    mapboxgl.accessToken = apiToken;
    // this.map = drawMap("map", "streets", [-96.144886, 19.196438], 13); //veracruz
    this.map = drawMap("map", "dark", [-99.222127, 18.941464], 12);
    this.panicAlerts = drawMarkets(this.state.panicAlerts, this.map, "#f00");
    this.map.addControl(
      new ButtonsControl({ color: "deep-orange darken-4" }),
      "top-left"
    );
    this.map.addControl(new mapboxgl.FullscreenControl(), "top-right");
  }

  render() {
    return (
      <>
        {/* <div className={this.props.classes.map} id="map" /> */}
        <div className="content p-0" id="map" />
      </>
    );
  }
}
export default withStyles(styles)(Map);
