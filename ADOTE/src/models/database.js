//BANCO DE DADOS
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/adotedb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true },
  function (error) {
    if(error) {
      console.error("Não Conectado no MongodDB!:", error)
    } else {
      console.log("Conectado no mongoDB!")
    }
});

mongoose.Promise = global.Promise;

module.exports = mongoose;



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/adotedb', {useMongoClient: true});
// mongoose.Promise = global.Promise

// module.exports = mongoose;
