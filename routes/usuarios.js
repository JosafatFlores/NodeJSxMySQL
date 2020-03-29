const express = require("express");
const userObj = require("../controllers/usuariosController");
const bodyParser = require("body-parser");

function usuariosApi(app) {
  /***********CRUD****************/
  /*Read*/
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.raw());

  const router = express.Router();

  app.use("/api/usuarios", router);

  router.post("/:id", userObj.getAllUsers);

  router.get("/:usuarioID", userObj.getOneUser);

  /*Create*/
  router.post("/", userObj.createUser);

  /*Update*/
  router.put("/:usuarioID", userObj.updatedUser);

  /*Delete*/
  router.delete("/:usuarioID", userObj.deletedUser);
}

module.exports = usuariosApi;
