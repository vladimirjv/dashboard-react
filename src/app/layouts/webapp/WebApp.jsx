import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import ListMenuSideBar from "../../components/ListMenuSideBar";
import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
import ToolbarComponent from "../../components/toolbar/Toolbar";
import { setDrawerVisibility } from "../../store/actions";
import { styles } from "./WebApp.styles.js";

class ClippedDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.clippedDrawer = this.clippedDrawer.bind(this);
  }
  clippedDrawer() {
    if (this.props.width === "lg" || this.props.width === "md") {
      this.props.changeVisibility(true);
      console.log('hey show');
      // return false;
    } else {
      this.props.changeVisibility(false);
      console.log('hey hide')
      // return true;
    }
  }
  componentDidMount() {
    window.addEventListener("resize",this.clippedDrawer);
  }
  componentWillUnmount() {
    window.removeEventListener("resize",this.clippedDrawer);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <ToolbarComponent />
        </AppBar>
        <Drawer
          className={this.props.classes.drawer}
          variant="persistent"
          open={this.props.visibility}
        >
          <div className={this.props.classes.toolbar} />
          <ListMenuSideBar />
        </Drawer>

        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />

          <Route
            path="/app/"
            exact
            render={() => {
              return <Redirect to="app/dashboard" />;
            }}
          />

          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </main>
      </div>
    );
  }
}

// ClippedDrawer.propTypes = {
//   classes: PropTypes.object.isRequired
// };
const mapStateToProps = state => {
  return {
    visibility: state.visibility
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeVisibility: value => dispatch(setDrawerVisibility(value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(withStyles(styles)(ClippedDrawer)));
