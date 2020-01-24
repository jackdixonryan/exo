
const express = require("express");
const router = express.Router();
const getExoplanets = require("../controllers/getExoplanets");
const getRandomExoplanet = require("../controllers/getRandomExoplanet");
const wiki = require("../controllers/wiki");

router.get("/exoplanets", getExoplanets);
router.get("/exoplanets/random", getRandomExoplanet);
router.get("/expolanets/:exoplanetName/enrichment", wiki);

module.exports = router;

