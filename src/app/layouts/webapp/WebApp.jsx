import React, { Component } from "react";
// import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Hidden from "@material-ui/core/Hidden";

import RouteWithSubRoutes from "../../components/RouteWithSubRoutes";
import ListMenuSideBar from "../../components/ListMenuSideBar";
import { styles } from "./WebApp.styles.js";
import { Route, Redirect } from "react-router-dom";

class ClippedDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clipped: true
    };
    this.Clipped = this.Clipped.bind(this);
    this.clippedDrawer = this.clippedDrawer.bind(this);
  }
  Clipped() {
    if (this.props.width !== "lg" && this.props.width !== "md") {
      return false;
    } else {
      return true;
    }
  }
  clippedDrawer() {
    if (this.props.width !== "lg" && this.props.width !== "md") {
      console.log("show");
    } else {
      console.log("Not show");
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.clippedDrawer);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.clippedDrawer);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar>
            <Hidden lgUp>
              <IconButton color="inherit">
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography variant="h6" color="inherit" noWrap>
              Clipped drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={this.props.classes.drawer}
          // variant="persistent"
          variant="persistent"
          open={this.Clipped()}
        >
          <div className={this.props.classes.toolbar} />
          <List>
            <ListMenuSideBar />
          </List>
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

export default withWidth()(withStyles(styles)(ClippedDrawer));
