
//Objetos 

let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bodyParser = require("body-parser");

const usuarioRoute = require("../backend/routes/usuario.route");
const db = require("../backend/database/db").mongoURI;

//conexion de la base de datos con mongoDB hacia Atlas
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("mongodb conectado satisfactoriamente"))
    .catch((err) => console.log(err));

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use(cors());
app.use("/usuarios", usuarioRoute);

//configuracion del puerto
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Connected to port: " + port);
});

//configuracion de las funciones manejo de errores
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
