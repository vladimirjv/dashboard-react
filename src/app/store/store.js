import { createStore } from "redux";

import { drawerVisibility } from "./reducers";


let store = createStore(drawerVisibility);
export default store;