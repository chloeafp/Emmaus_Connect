require("dotenv").config();
const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const findAll = (req, res) => {
  database
    .query("select * from smartphone")
    .then(([smartphone]) => {
      res.json(smartphone);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const findOne = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("select * from smartphone where id =?", [id])
    .then(([smartphone]) => {
      if (smartphone != null) {
        res.json(smartphone[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  findAll,
  findOne,
};
