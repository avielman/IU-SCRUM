let mongo = require('mongodb');
//let MongoClient = require('mongodb').MongoClient;
let MongoClient = mongo.MongoClient;

let url = "mongodb://localhost:27017";

function CreateDatabase(ABase, err, db) {
  url = url + '/' + ABase;
  MongoClient.connect(url, function(err, db){
    if (err) throw err;
    console.log("Base de Datos Creada!");
    db.close;
  });
};