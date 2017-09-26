let mongo = require('./node_modules/mongodb');
let MongoClient = mongo.MongoClient;
let Base = 'SCRUM';
let url = "mongodb://localhost:27017";
url = url + '/' + Base;
let DataBase = require('mongoCreateDatabase');



