async function exoplanet(parent, args, ctx, info) {
  const db = require("../../config");
  const query = await db
    .collection("exoplanets")
    .doc(args.name)
    .get();
  return query.data();
}

module.exports = exoplanet;