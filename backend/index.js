require("dotenv").config();

const express = require("express");
const cors = require("cors")
const app = express();

require("./config/mongoConfig")();

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", require("./routes/routesSms"));

app.listen(3000, () => {
  console.log("Corriendo en el puerto 3000");
});
