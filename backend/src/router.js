const express = require("express");

const router = express.Router();

const smartphoneControllers = require("./controllers/smartphoneController");

router.get("/api/smartphone", smartphoneControllers.findAll);
router.get("/api/smartphone/:id", smartphoneControllers.findOne);

module.exports = router;
