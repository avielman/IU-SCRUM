let mongo = require('mongodb');
let MongoClient = mongo.MongoClient;
let url = "mongodb://localhost:27017";
let base = { Base: 'SCRUM',
  get Base(){
    return this.Base;
  },
  set Base(Abase){
    this.Base = Abase;
    rutaBase = url + '/' + Abase;
  }
};

let rutaBase = { "RutaBase": url + '/' + base,
  get RutaBase(){
    return this.RutaBase;
  },
  set RutaBase(ARutaBase){
    this.RutaBase = ARutaBase;
  }
};

let SQL = {
  Texto: '',
  get Texto(){
    return this.Texto;
  },

  set Texto(Asql){
    this.Texto = Asql;
  }
};

let collection = {
  "Collection": '',
  get Collection(){
    return this.Collection;
  },
  set Collection(ACollection){
    this.Collection = ACollection;
  }
};

let usuario = {
  "Usuario": '',
  get Usuario(){
    return this.Usuario;
  },
  set Usuario(AUsuario){
    this.Usuario = AUsuario;
  }
};


function CreateDatabase(ABase, err, db) {
  rutaBase = url + '/' + ABase;
  MongoClient.connect(rutaBase, function(err, db){
    if (err) throw err;
    console.log("Base de Datos " + ABase +" Creada.");
    db.close;
  });
};

function CreateCollection(ACollection){
  MongoClient.connect(url, function(err, db){
      if (err) throw err;
      db.createCollection(ACollection, function(err, res){
        if (err) throw err;
        this.collection = ACollection;
        console.log("Collección: " + ACollection + " creada!");
        db.close;
      });
  });
};

function InsertarUnRegistro(AobjJSon) {
  MongoClient.connect(rutaBase, function(err, db) {
    if (err) throw err;  
    db.collection(collection).insertOne(AobjJSon, function(err, res) {
      if (err) throw err;
      console.log("1 documento Insertado. " + AobjJSon);
      db.close();
    });
  });
};

function InsertarVariosRegistros(AobjJSon){
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    db.collection(collection).insertMany(AobjJSon, function(err, res) {
      if (err) throw err;
      console.log("Número de documentos insertados: " + res.insertedCount);
      db.close();
    });
  });
};



