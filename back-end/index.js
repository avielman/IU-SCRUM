let express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    mongoose = require('mongoose');

let puerto = 80;
let mongo = require("./mongo/mongo.js");
let MongoClient = mongo.MongoClient;
let usuario = mongo.usuario;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

let router = express.Router();

router.get('/', function(req, res) {
   res.send("Hola Mundo!");   
	   if (err) throw err;
	 mongo.InsertarUnRegistro(usuario, err, db);
});

app.use(router);

mongoose.connect(mongo.rutaBase, function(err, res) {
  if(err) {
    console.log('ERROR: conectando a la Base de Datos. ' + err);
  }
  app.listen(puerto, function() {
    console.log("Node server running on http://localhost:" + puerto);
  });
});



