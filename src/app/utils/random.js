import faker from "faker";

/**
 * random int in range
 * @param {number} min
 * @param {number} max
 */
export var randomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

export let nameRandom = faker.name;
export let dateRandom = faker.date;
export let addressRandom = faker.address;
export let imageRandom = faker.image;
