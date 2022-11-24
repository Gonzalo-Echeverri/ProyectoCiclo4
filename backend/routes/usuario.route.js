let mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router();

let usuarioShema = require("../models/Usuario");

// ruta para crear usuario

router.route("/create-usuario").post((req, res, next) => {
    usuarioShema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            console.log(data);
            res.json(data);
        }
    });
});

//Ruta para leer usuario 

router.route("/").get((req, res, next) => {
    // eslint-disable-next-line array-callback-return
    usuarioShema.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Ruta para obtener un usuario

router.route("/edit-usuario/:id").get((req, res, next) => {
    usuarioShema.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

//Ruta par actualizar un usuario
router.route("/update-usuario/:id").put((req, res, next) => {
    usuarioShema.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body,
        },
        (error, data) => {
            if (error) {
                console.log(error);
                return next(error);
            } else {
                res.json(data);
                console.log("Usuario actualizado con exito");
            }
        }
    );
});


//Ruta para eliminar un usuario

router.route("/delete-usuario/:id").delete((req, res, next) => {
    usuarioShema.findByIdAndDelete(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data,
            });
        }
    });
});

module.exports = router;
