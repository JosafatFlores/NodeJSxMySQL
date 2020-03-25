const express = require("express");
const userObj = require('../controllers/usuariosController')

function usuariosApi(app) {
    /***********CRUD****************/
    /*Read*/
    const router = express.Router();
    app.use("/api/usuarios", router);
  
    router.get("/",userObj.getAllUsers);
  
    router.get("/:usuarioID", userObj.getOneUser);
  
    /*Create*/
    router.post("/", userObj.createUser);
  
    /*Update*/
    router.put("/:usuarioID",userObj.updatedUser);
  
    /*Delete*/
    router.delete("/:usuarioID", userObj.deletedUser);
  }
  
  module.exports = usuariosApi;
  