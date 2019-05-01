/* jshint esversion:6 */
import mapboxgl from "mapbox-gl";

/**
 * @typedef {object} StylesMap
 * @property {string} streets "streets"
 * @property {string} dark "dark"
 * @property {string} ligth "ligth"
 * @property {string} custom "custom"
 */

// ? Constantes
export const apiToken =
  "pk.eyJ1IjoidmxhZGltaXJqdiIsImEiOiJjanU0djdoZHgwMWFoNDNwZnB0bnhlb24yIn0.oEuXyOrAgaNWgqtPC6KPJg";

export const StyleMap = {
  streets: "mapbox://styles/mapbox/streets-v9",
  dark: "dark",
  ligth: "ligth"
};
/**
 * Draw a map
 * @param {String} container
 * @param {keyof StylesMap} type type of the custom map
 * @param {Array<number>} location [lng,lat]
 * @param {number} zoom
 */
export function drawMap(container, type, location, zoom = 10) {
  mapboxgl.accessToken = apiToken;
  var map = new mapboxgl.Map({
    container: container,
    style: StyleMap[type],
    center: [location[0], location[1]],
    zoom: zoom
  });
  return map;
}
export const DRAWER_WIDTH = 180;
