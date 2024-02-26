const express = require("express");
const router = express.Router();
const factureController = require("../controller/factureController");

// Affiche toutes les factures
router.get("/factures", factureController.fetchAll);

// Ajoute une facture
router.post("/factures", factureController.add);

// Mettre à jour une facture
router.put("/factures/:id", factureController.update);

// Supprimer une facture
router.delete("/factures/:id", factureController.delete)

module.exports = router;
