const firebaseConfig = require('../config/db')
const {
    initializeApp
} = require("firebase/app")
const {
    getFirestore
} = require("firebase/firestore")
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

module.exports = db