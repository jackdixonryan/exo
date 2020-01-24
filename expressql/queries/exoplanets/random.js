async function randomExoplanet(parent, args, ctx, info) {
  const db = require("../../config");
  const fs = require("fs");
  const file = fs.readFileSync("./names.json");
  const names = JSON.parse(file).names;
  const len = names.length;
  const randomIndex = Math.floor(Math.random() * len);
  const randomName = names[randomIndex];
  const randomDoc = await db
    .collection("exoplanets")
    .doc(randomName)
    .get();
  const randomPlanet = randomDoc.data();
  return randomPlanet;
}

module.exports = randomExoplanet;
