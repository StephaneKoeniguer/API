const factureService = require("../service/factureService");

// Récupère toutes les factures
exports.fetchAll = async (req, res) => {
    const factures = await factureService.fetchAllFacture();
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        data: factures
    }
    res.status(200).json(response);
}

// Ajout d'une facture
exports.add = async (req, res) => {
    const factures = await factureService.addNewFacture(req.body);

    //formatage (objet data)
    const response = {
        status: "sucess",
        message: "Facture créé avec succès",
        data: factures
    }
    res.status(200).json(response);
}

// Mise à jour d'une facture
exports.update = async (req, res) => {
    const factures = await factureService.updateFacture(req.params.id, req.body);

    //formatage (objet data)
    const response = {
        status: "sucess",
        message: "Facture mise à jour avec succès",
        data: factures
    }
    res.status(200).json(response);
}

// Supprimer une facture
exports.delete = async (req, res) => {
    const factures = await factureService.deleteFacture(req.params.id);

    //formatage (objet data)
    const response = {
        status: "sucess",
        message: "Facture supprimée avec succès",
        data: factures
    }
    res.status(200).json(response);
}
