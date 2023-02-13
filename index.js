const express = require("express");
const bodyParser = require("body-parser");
const load = require("express-load");
const expressSession = require("express-session");
const ejs = require('ejs');
const { MongoClient, ObjectId } = require('mongodb');
const app = express();
const port = 3000;
const db = require('./db');

// Define a pasta onde irão ficar as views
app.set("views", __dirname + "/views");
// Define o template engine usado nas views
app.set("view engine", "ejs");

// Define a pasta public para conteúdo estático
app.use(express.static(__dirname + "/public"));

load("controllers") .then("routes") .then("models")  .into(app);


app.listen(port, () => {
    console.log("Servidor web ativo");
})

