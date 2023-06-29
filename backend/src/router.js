const express = require("express");
const fs = require("fs");
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "./public/uploads/" });

const smartphoneControllers = require("./controllers/smartphoneController");
const userController = require("./controllers/userController");
const csvController = require("./controllers/csvController");

router.post("/api/login", userController.loginCheck);
router.get("/api/smartphone", smartphoneControllers.findAll);
router.get("/api/smartphone/:id", smartphoneControllers.findOne);

router.post("/api/smartphone", smartphoneControllers.postPhone);

router.post("/api/avatar", upload.single("avatar"), (req, res) => {
  const { originalname } = req.file;
  console.log(req.file.originalname);
  const { filename } = req.file;
  fs.rename(
    `./public/uploads/${filename}`,
    `./public/uploads/${originalname}`,
    (err) => {
      if (err) throw err;
      res.send("File uploaded");
    }
  );
});

router.post(
  "/api/import",
  upload.single("csv"),
  (req, res, next) => {
    next();
  },
  csvController.exportCsv
);

module.exports = router;
