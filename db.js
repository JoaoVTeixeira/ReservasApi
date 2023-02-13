const { MongoClient, ObjectId } = require('mongodb');


const DB_URL = "mongodb://127.0.0.1:27017";
const DB_NAME = "reservas";

(async ()=>{

console.log("Conectando DB");
const cliente = await MongoClient.connect(DB_URL);
console.log("DB conectado");
const db = cliente.db(DB_NAME);
const collection = db.collection("reservas_api");

console.log("Collection conectado");
})();