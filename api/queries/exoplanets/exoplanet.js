async function exoplanets(parent, args, ctx, info) {
  const db = require('../../config');
  console.log(args);
  const query = await db
    .collection("exoplanets")
    .get();
  const exoplanets = [];
  query.forEach(record => {
    exoplanets.push(record.data());
  });
  return exoplanets;
}

module.exports = exoplanets;
