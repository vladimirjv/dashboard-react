import WebApp from "./layouts/WebApp";
import Login from "./pages/login";
import Inbox from "./pages/inbox";
// import Mapbox from "./pages/mapbox";
import Map from "./pages/map";

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
    ]
  }
];
export default routes;
