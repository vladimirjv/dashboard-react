import React from "react";
import { Route } from "react-router-dom";
import ComponentWraper from "./ComponentWraper/ComponentWraper";
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <ComponentWraper className={route.classesFromParms}>
          <route.component {...props} routes={route.routes} />
        </ComponentWraper>
      )}
    />
  );
}
export default RouteWithSubRoutes;
