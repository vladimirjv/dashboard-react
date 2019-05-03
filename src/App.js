import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect} from "react-router-dom";
import routes from "./routes";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Route path="/" exact render={()=>{
          return <Redirect to="/app/dashboard"/>
        }} />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        
      </BrowserRouter>
    );
  }
}

export default App;
