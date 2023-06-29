require("dotenv").config();
const mysql = require("mysql2/promise");
const fs = require("fs");

const database = mysql.createPool({
  host: process.env.DB_HOST, // address of the server
  port: process.env.DB_PORT, // port of the DB server (mysql), not to be confused with the APP_PORT !
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const exportCsv = async (req, res) => {
  try {
    const filePath = req.file.path;

    const results = [];

    fs.createReadStream(filePath, { encoding: "utf-8" })
      .on("data", (chunk) => {
        const lines = chunk.split("\n");

        const headers = lines[0].split(",");
        for (let i = 1; i < lines.length; i++) {
          const data = lines[i].split(",");
          const row = {};
          for (let j = 0; j < headers.length; j++) {
            row[headers[j].trim()] = data[j].trim();
          }
          results.push(row);
        }
      })
      .on("end", async () => {
        for (const phone of results) {
          let tmp = phone;
          if (isNaN(parseInt(tmp.point_vente_id))) {
            console.log(tmp.point_vente_id, "format de donné non conforme");
          } else {
            tmp.point_vente_id = parseInt(tmp.point_vente_id);
          }
          if (isNaN(parseInt(tmp.ecran))) {
            console.log(tmp.ecran, "format de donné non conforme");
          } else {
            tmp.ecran = parseInt(tmp.ecran);
          }
          if (isNaN(parseInt(tmp.annee_fabrication))) {
            console.log(tmp.annee_fabrication, "format de donné non conforme");
          } else {
            tmp.annee_fabrication = parseInt(tmp.annee_fabrication);
          }
          if (isNaN(parseInt(tmp.stockage))) {
            console.log(tmp.stockage, "format de donné non conforme");
          } else {
            tmp.stockage = parseInt(tmp.stockage);
          }
          if (isNaN(parseInt(tmp.ram))) {
            console.log(tmp.ram, "format de donné non conforme");
          } else {
            tmp.ram = parseInt(tmp.ram);
          }
          if (isNaN(parseInt(tmp.ponderation))) {
            console.log(tmp.ponderation, "format de donné non conforme");
          } else {
            tmp.ponderation = parseInt(tmp.ponderation);
          }
          if (isNaN(parseInt(tmp.chargeur_cable))) {
            console.log(tmp.chargeur_cable, "format de donné non conforme");
          } else {
            tmp.chargeur_cable = parseInt(tmp.chargeur_cable);
          }
          if (isNaN(parseInt(tmp.verrouillage))) {
            console.log(tmp.verrouillage, "format de donné non conforme");
          } else {
            tmp.verrouillage = parseInt(tmp.verrouillage);
          }

          await database.query(
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
              tmp.point_vente_id,
              tmp.modele,
              tmp.marque,
              tmp.systeme_exploitation,
              tmp.ecran,
              tmp.reseau,
              tmp.annee_fabrication,
              tmp.etat,
              tmp.stockage,
              tmp.ram,
              tmp.verrouillage,
              tmp.chargeur_cable,
              tmp.ponderation,
              tmp.categorie_prix,
              tmp.image,
            ]
          );
        }
        res.send(results);
      });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  exportCsv,
};
