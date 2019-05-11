import {
  SET_DRAWER_VISIBILITY,
  GET_DRAWER_VISIBILITY,
  TOGGLE_THEME,
  GET_THEME
} from "./types";

/**
 * action Set Drawer Visbility
 * @param {boolean} value
 * @returns {object} actions
 */
export function setDrawerVisibility(value) {
  return { type: SET_DRAWER_VISIBILITY, value };
}

/**
 * Get the state of drawer visibility
 * @returns {object} action
 */
export function getDrawerVisibility() {
  return { type: GET_DRAWER_VISIBILITY };
}

/**
 * @typedef {object} ThemeType
 * @property {string} dark "dark"
 * @property {string} light "light"
 */
/**
 *
 * @param {keyof ThemeType} theme
 */
export function toggleTheme(theme) {
  return { type: TOGGLE_THEME, theme };
}

export function getTheme() {
  return { type: GET_THEME };
}
