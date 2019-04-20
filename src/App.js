import React, { Component } from 'react';
// import './App.css';
// import WebApp from './layouts/WebApp';
import {BrowserRouter,Route,Redirect} from "react-router-dom";
// import Login from './pages/login';
import routes from "./routes";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        {/* <Switch>
          <Route path='/app' exact component={WebApp} />
          <Route path='/login' exact component={Login} />
        </Switch> */}
        <Route path="/" exact render={()=>{
          return <Redirect to="/app"/>
        }} />
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        
      </BrowserRouter>
    );
  }
}

export default App;
