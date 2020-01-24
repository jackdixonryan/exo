const fs = require("fs");
const axios = require("axios");
async function refresh() {
  try {
    const uri =
      "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&format=json&api_key=" +
      process.env.nasaApiKey;
    console.log("reached")
    const request = await axios.get(uri);
    console.log("complete");
    const exoplanetJSON = {
      exoplanets: request.data
    };
    fs.writeFileSync("./exoplanets.json", JSON.stringify(exoplanetJSON));
  } catch (error) {
    console.log(error);
  }
}

module.exports = refresh;
