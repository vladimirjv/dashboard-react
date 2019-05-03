import WebApp from "./app/layouts/WebApp";
import Login from "./app/pages/login";
import Inbox from "./app/pages/dashboard/inbox";
// import Mapbox from "./pages/mapbox";
import Map from "./app/pages/map/map.jsx";
import Licenses from "./app/pages/licenses/licenses.jsx";

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
