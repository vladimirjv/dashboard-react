import WebApp from "./layouts/WebApp";
import Login from "./pages/login";
import Inbox from "./pages/dashboard/inbox";
// import Mapbox from "./pages/mapbox";
import Map from "./pages/map/map.jsx";
import Licenses from "./pages/licenses/licenses.jsx";

const routes = [
  {
    path:"/login",
    component: Login
  },
  {
    path:"/app",
    component: WebApp,
    routes:[
      {
        path: "/app/dashboard",
        component: Inbox
      },
      {
        path:"/app/map",
        component: Map
      },
      {
        path:"/app/placas",
        component: Licenses
      }
    ]
  }
];
export default routes;
