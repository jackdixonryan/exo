async function exoplanet(parent, args, ctx, info) {
  const db = require("../../db");
  const query = await db
    .collection("exoplanets")
    .doc(args.name)
    .get();
  return query.data();
}

module.exports = exoplanet;