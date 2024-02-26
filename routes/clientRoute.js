const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

// affiche tous les clients
router.get("/clients", clientController.fetchAll);

// affiche un client
router.get("/clients/:id", clientController.fetchOneById);

// ajoute un client
router.post("/clients", clientController.add);

// met à jour un client
router.put("/clients/:id", clientController.update);

// supprimer un client
router.delete("/clients/:id", clientController.delete);

// récupère toutes les factures d'un client
router.get("/clients/:id/factures", clientController.showAllfactures)

module.exports = router;