/* jshint esversion: 6 */
import {
  SET_DRAWER_VISIBILITY,
  GET_DRAWER_VISIBILITY,
  TOGGLE_THEME,
  GET_THEME
} from "./types";
import { combineReducers } from "redux";

/**
 * @typedef {Object} ActionType
 * @property {string} type,
 * @property {bool} value
 */

/**
 *
 * @param {object} state
 * @param {ActionType} action
 */
export function drawerVisibility(state = true, action) {
  switch (action.type) {
    case GET_DRAWER_VISIBILITY:
      return state;
    case SET_DRAWER_VISIBILITY:
      return !state;
    default:
      return state;
  }
}

/**
 *
 * @param state
 * @param {keyof import("./actions").ThemeType} action
 */
export function Theme(state = "light", action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return action.theme;
    case GET_THEME:
      return state;
    default:
      return state;
  }
}

const App = combineReducers({
  visibility: drawerVisibility,
  Theme
});
export default App;
