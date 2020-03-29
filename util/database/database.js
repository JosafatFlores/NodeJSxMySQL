var mysql = require("mysql");
const dotenv = require("dotenv").config();


class Database {
  constructor() {
    this.connection = mysql.createConnection({
        host: process.env.host,
        port: process.env.portDB,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
      });
  }
  query(sql, args) {
    console.log(sql)
    return new Promise((resolve, reject) => {
      this.connection.query(sql, args, (err, rows) => {
        
        if (err) return reject(err);
        resolve(rows);
      });
    });
  }
  close() {
    return new Promise((resolve, reject) => {
      this.connection.end(err => {
        if (err) return reject(err);
        resolve();
      });
    });
  }
}

module.exports = Database;
