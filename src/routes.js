import WebApp from "./app/layouts/webapp/WebApp";
import Login from "./app/pages/login";
import Dashboard from "./app/pages/dashboard/dashboard";
// import Mapbox from "./pages/mapbox";
import Map from "./app/pages/map/map";
import Licenses from "./app/pages/licenses/licenses";
import Chat from "./app/pages/chat/chat";

const routes = [
  {
    path: "/login",
    component: Login
  },
  {
    path: "/app",
    component: WebApp,
    routes: [
      {
        path: "/app/dashboard",
        component: Dashboard
      },
      {
        path: "/app/map",
        component: Map
      },
      {
        path: "/app/placas",
        component: Licenses
      },
      {
        path: "/app/chat",
        component: Chat
      }
    ]
  }
];
export default routes;
