import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import ReactMapGL from "react-map-gl";
import { apiToken } from "../utils/map";

const drawerWidth = 180;
const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2
  },
  toolbar: theme.mixins.toolbar
});
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiToken: apiToken,
      viewport: {
        width: 400,
        height: 500,
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 15
      },
      test: 8
    };
    this.resize = this.resize.bind(this);
    this.onAskLocation = this.onAskLocation.bind(this);
    this.onErrorAsklocation = this.onErrorAsklocation.bind(this);
  }
  /**
   *? resize funtion
   */
  resize() {
    let width;
    if (
      this.props.width === "lg" ||
      this.props.width === "md" ||
      this.props.width === "xl"
    ) {
      width = window.innerWidth - drawerWidth;
    } else {
      width = window.innerWidth;
    }
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: width,
        height: window.innerHeight - 66
      }
    });
  }
  onAskLocation(pos) {
    this.setState({
      viewport: {
        ...this.state.viewport,
        latitude: pos.coords.latitude,
        longitude: pos.coords.longitude
      }
    });
  }
  onErrorAsklocation(err) {
    console.log(err);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.onAskLocation,
      this.onErrorAsklocation
    );
    this.resize();
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize());
  }

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          mapboxApiAccessToken={this.state.apiToken}
          onViewportChange={viewport => this.setState({ viewport })}
        />
      </div>
    );
  }
}
export default withWidth()(withStyles(styles)(Map));
