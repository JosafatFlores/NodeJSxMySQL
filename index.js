const express = require('express')
const dotenv = require("dotenv").config();
const app = express()
const usuariosApi = require('./routes/usuarios')

usuariosApi(app)

app.listen(process.env.PORT, () => {
    console.log(
      `Example app listening on port ${process.env.PORT}!\n http://localhost:${process.env.PORT}`
    );
  });