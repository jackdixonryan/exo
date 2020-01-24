async function getRandomExoplanet(req, res) {
  try {
    const axios = require("axios");
    const uri =
      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json&api_key=" +
      process.env.nasaApiKey;
    const request = await axios.get(uri);
    const exoplanets = request.data;
    const maxNum = exoplanets.length;
    const randomSelection = Math.floor(Math.random() * maxNum);
    res.send({
      exoplanet: exoplanets[randomSelection]
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error.stack
    });
  }
}

module.exports = getRandomExoplanet;
