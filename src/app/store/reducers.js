/* jshint esversion: 6 */
import { SET_DRAWER_VISIBILITY, GET_DRAWER_VISIBILITY } from "./types";
// import com

const initialState = {
  visibility: true
};

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
export function drawerVisibility(state = initialState, action) {
  switch (action.type) {
    case GET_DRAWER_VISIBILITY:
      return initialState;
    case SET_DRAWER_VISIBILITY:
      return Object.assign({}, state, { visibility: action.value });
    default:
      return state;
  }
}
