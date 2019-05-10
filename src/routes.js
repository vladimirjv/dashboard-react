import WebApp from "./app/layouts/webapp/WebApp";
import Login from "./app/pages/login/login";
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
        component: Dashboard,
        classesFromParms: "content "
      },
      {
        path: "/app/map",
        component: Map
      },
      {
        path: "/app/placas",
        component: Licenses,
        classesFromParms: "content"
      },
      {
        path: "/app/chat",
        component: Chat,
        classesFromParms: "content"
      }
    ]
  }
];
export default routes;
