const express = require("express");
const router = express.Router();
const factureController = require("../controller/factureController");

// affiche toutes les factures
router.get("/factures", factureController.fetchAll);

router.post("/factures", factureController.add);

router.put("/factures/:id", factureController.update);

router.delete("/factures/:id", factureController.delete)

module.exports = router;