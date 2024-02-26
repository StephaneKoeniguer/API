const express = require("express");
const router = express.Router();
const clientController = require("../controller/clientController");

router.get("/clients", clientController.fetchAll);

router.get("/clients/:id", clientController.fetchOneById);

router.post("/clients", clientController.add);

router.put("/clients/:id", clientController.update);

router.delete("/clients/:id", clientController.delete);

module.exports = router;