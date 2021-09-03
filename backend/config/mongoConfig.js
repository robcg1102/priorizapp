const mongoose = require("mongoose");

const connectMongo = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log("Conectado a la DB:", data.connections[0].name);
    })
    .catch((err) => {
      console.log("Error al conectar a la DB, error: ", err);
    });
};

module.exports = connectMongo;
