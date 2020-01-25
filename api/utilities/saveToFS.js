// async function writePlanets() {
//   try {
//     const db = require("./config");
//     const fs = require("fs");
//     const path = require("path");

//     const file = fs.readFileSync(path.join(__dirname, "../exoplanets.json"));
//     const exoplanets = JSON.parse(file).exoplanets;
//     const addedDocs = [];

//     for (let i = 0; i < exoplanets.length; i++) {
//       const pName = exoplanets[i].pl_name;
//       const recordID = pName.split(" ").join("");
//       const getReq = await db
//         .collection("exoplanets")
//         .doc(recordID)
//         .get();

//         if (!getReq.exists) {
//         await db
//           .collection("exoplanets")
//           .doc(recordID)
//           .set(exoplanets[i]);
//         addedDocs.push(recordID);
//       } 
//     }

//     return addedDocs;

//   } catch (error) {
//     return error;
//   }
// }

// (async function() { 
//   const rewrite = await writePlanets();
//   console.log(rewrite)
// })();

