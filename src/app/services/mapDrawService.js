import mapboxgl from "mapbox-gl";
import { StyleMap,apiToken } from "../utils/map";

/**
 * @typedef {object} StylesMap
 * @property {string} streets "streets"
 * @property {string} dark "dark"
 * @property {string} ligth "ligth"
 * @property {string} custom "custom"
 */
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