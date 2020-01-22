// GETs the exoplanet -- see README for exo-planation as to why that needs to happen.
async function getExoplanetsArchive(req, res) {
  try {
    const axios = require("axios");
    const uri =
      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json&api_key=" +
      process.env.nasaApiKey;
    const request = await axios.get(uri);
    const exoplanetJSON = {
      exoplanets: request.data
    };
    res.send(exoplanetJSON);
  } catch (error) {
    res.status(500).send({
      message: error.stack
    });
  }
}

module.exports = getExoplanetsArchive;
