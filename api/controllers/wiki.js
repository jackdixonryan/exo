// scraper route for wikiepedia
const cheerio = require("cheerio");
const axios = require("axios");
async function scrapeWiki(req, res) {
  try {
    const name = req.params.exoplanetName;
    const requestURL = `https://en.wikipedia.org/wiki/${encodeURIComponent(
      name
    )}`;
    const request = await axios.get(requestURL);
    const $ = cheerio.load(request.data);
    const wikiName = $("h1#firstHeading")[0].children[0].data;
    if (wikiName !== name) {
      res.status(200).send({ status: `REDIRECT` });
    }
    const categories = [];
    const termList = [
      "Giant planet",
      "Mesoplanet",
      "Mini-Neptune",
      "Planemo",
      "Planetar",
      "Super-Earth",
      "Super-Jupiter",
      "Sub-Earth",
      "Chthonian",
      "Gas Dwarf",
      "Gas Giant",
      "Ice Giant",
      "Protoplanet",
      "Puffy planet",
      "Hot Jupiter",
      "Terrestrial",
      "Silicate",
      "Earth-like"
    ];
    for (let i = 0; i < termList.length; i++) {
      const permutations = [
        termList[i].toLowerCase(),
        termList[i].toUpperCase(),
        termList[i]
      ];
      for (let k = 0; k < permutations.length; k++) {
        if (
          request.data.includes(permutations[k]) &&
          !categories.includes(termList[i])
        ) {
          categories.push(termList[i]);
        }
      }
    }
    res.send({
      categories: categories
    });
  } catch (error) {
    if (error.response.status === 404) {
      res.status(200).send({ status: `NOT_FOUND` });
    } else {
      res.status(500).send({
        message: error.stack
      });
    }
  }
}

module.exports = scrapeWiki;
