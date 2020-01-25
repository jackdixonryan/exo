const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyA8D42FOmSZmYEJphME62ulXMLu6L55eaI",
  authDomain: "exo-db.firebaseapp.com",
  databaseURL: "https://exo-db.firebaseio.com",
  projectId: "exo-db",
  storageBucket: "exo-db.appspot.com",
  messagingSenderId: "124644426753",
  appId: "1:124644426753:web:637316bcef1b0b0e0d6c00"
};
firebase.initializeApp(firebaseConfig);
module.exports = firebase.firestore();