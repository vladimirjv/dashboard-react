import WebApp from "./layouts/WebApp";
import Login from "./pages/login";
import Inbox from "./pages/inbox";
import Starred from "./pages/starred.jsx";

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
        component: Starred
      },
    ]
  }
];
export default routes;
