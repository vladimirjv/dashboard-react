import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { connect } from "react-redux";
import routes from "./routes";
import RouteWithSubRoutes from "./app/components/RouteWithSubRoutes";

import "./assets/css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      themeLight: {
        palette: {
          type: "light"
        },
        typography: {
          useNextVariants: true
        }
      },
      themeDark: {
        palette: {
          type: "dark"
        },
        typography: {
          useNextVariants: true
        }
      }
    };
    this.Theme = this.Theme.bind(this);
  }

  Theme() {
    if (this.props.theme === "dark") {
      return createMuiTheme(this.state.themeDark);
    } else {
      return createMuiTheme(this.state.themeLight);
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={this.Theme()}>
        <BrowserRouter>
          <Route
            path="/"
            exact
            render={() => {
              return <Redirect to="/app/dashboard" />;
            }}
          />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
const mapStateToProps = state => ({
  theme: state.Theme
});

// const mapDispatchToProps = {};

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(App);
