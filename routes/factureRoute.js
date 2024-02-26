const express = require("express");
const router = express.Router();
const factureController = require("../controller/factureController");

router.get("/factures", factureController.fetchAll);

router.get("/factures/:id");

router.post("/factures");

module.exports = router;