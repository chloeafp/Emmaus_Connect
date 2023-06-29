require("dotenv").config();
const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const loginCheck = (req, res) => {
  database
    .query("select * from utilisateur where mail = ? AND mdp = ?", [
      req.body.email,
      req.body.password,
    ])
    .then(([user]) => {
      if (user.length) {
        res.send(user);
      } else {
        res.send("denied");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  loginCheck,
};
