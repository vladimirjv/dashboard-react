import * as CuernavacaPoints from "../../assets/geojson.json";
import {
  randomInt,
  nameRandom,
  imageRandom,
  addressRandom
} from "../utils/random.js";

export class MapService {
  constructor() {
    fetch("../../assets/geojson.json").then(data => {
      this.points = data.features;
    });
  }

  getPoints() {
    return CuernavacaPoints;
  }
}

export const Points = CuernavacaPoints.features.map(feature => {
  return feature.geometry.coordinates;
});

export function PanicRandom(amount) {
  var Panic = [];
  for (let index = 0; index < amount; index++) {
    let lngLat = Points[randomInt(0, Points.length)];
    Panic.push(
      Object.assign(
        {},
        {
          type: "panic",
          lng: lngLat[0],
          lat: lngLat[1],
          data: {
            name: nameRandom.findName(),
            photo: imageRandom.avatar(),
            address: addressRandom.streetAddress()
          }
        }
      )
    );
  }
  return Panic;
}
