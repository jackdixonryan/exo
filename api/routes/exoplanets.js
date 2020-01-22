
const express = require("express");
const router = express.Router();
const getExoplanets = require("../controllers/getExoplanets");
const getRandomExoplanet = require("../controllers/getRandomExoplanet");

router.get("/exoplanets", getExoplanets);
router.get("/exoplanets/random", getRandomExoplanet);

module.exports = router;

