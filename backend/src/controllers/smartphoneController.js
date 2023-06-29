require("dotenv").config();
const mysql = require("mysql2/promise");
const calculPrix = require('./calculPrix')
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

const destroy = (req, res) => {
  const id = parseInt(req.params.id);
  database
    .query("delete from smartphone where id =?", [id])
    .then(([result]) => {
      if (result.affectedRows !== 0) {
        res.sendStatus(204);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const postPhone = (req, res) => {
  req.body.categorie_prix = calculPrix.calculPrix(
    req.body.ecran,
    req.body.reseau,
    req.body.etat,
    req.body.stockage,
    req.body.ram,
    req.body.chargeur_cable
  );
  console.log(req.body)
  database
    .query(
      `
  INSERT INTO
smartphone (
point_vente_id,
modele,
marque,
systeme_exploitation,
ecran,
reseau,
annee_fabrication,
date_ajout,
etat,
stockage,
ram,
verrouillage,
chargeur_cable,
ponderation,
categorie_prix,
image
)
VALUES (?,?,?,?,?,?,?,NOW(),?,?,?,?,?,?,?,?)`,
      [
        req.body.point_vente_id,
        req.body.modele,
        req.body.marque,
        req.body.systeme_exploitation,
        req.body.ecran,
        req.body.reseau,
        req.body.annee_fabrication,
        req.body.etat,
        req.body.stockage,
        req.body.ram,
        req.body.verrouillage,
        req.body.chargeur_cable,
        req.body.ponderation,
        req.body.categorie_prix,
        req.body.image,
      ]
    )
    .then(([result]) => {

      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        console.log(result)
        res.send(req.body).status(204);

      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  findAll,
  findOne,
  postPhone,
  destroy,
};
