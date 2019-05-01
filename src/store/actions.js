import { SET_DRAWER_VISIBILITY, GET_DRAWER_VISIBILITY } from "./types";

/**
 * action Set Drawer Visbility
 * @param {boolean} value 
 * @returns {object} actions
 */
export function setDrawerVisibility(value){
	return { type: SET_DRAWER_VISIBILITY, value }
}

/**
 * Get the state of drawer visibility
 * @returns {object} action
 */
export function getDrawerVisibility(){
	return { type: GET_DRAWER_VISIBILITY }
}