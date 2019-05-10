import React from "react";
import { Route } from "react-router-dom";
function RouteWithSubRoutes(route) {
  // console.log(route)
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component
          {...props}
          routes={route.routes}
          classNames={route.classesFromParms}
        />
      )}
    />
  );
}
export default RouteWithSubRoutes;
