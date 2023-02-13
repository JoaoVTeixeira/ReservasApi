const express = require("express");
const bodyParser = require("body-parser");
const load = require("express-load");
const expressSession = require("express-session");
const ejs = require('ejs');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 3000;

// Define a pasta onde irão ficar as views
app.set("views", __dirname + "/views");
// Define o template engine usado nas views
app.set("view engine", "ejs");

// Define a pasta public para conteúdo estático
app.use(express.static(__dirname + "/public"));

load("controllers") .then("routes") .then("models")  .into(app);

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

app.listen(port, () => {
    console.log("Servidor web ativo");
})

