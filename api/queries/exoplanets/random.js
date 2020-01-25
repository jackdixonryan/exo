async function randomExoplanet(parent, args, ctx, info) {
  const db = require("../../db");
  const fs = require("fs");
  const path = require("path");
  const file = fs.readFileSync(path.join(__dirname, "../../names.json"));
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
