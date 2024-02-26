const clientService = require("../service/clientService");


// récupère tous les clients
exports.fetchAll = async (req, res) => {
    const clients = await clientService.fetchAllClient();
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        data: clients
    }
    res.status(200).json(response);
}

// récupère un client grâce à l'id
exports.fetchOneById = async (req, res) => {
    const id = req.params.id;
    const clients = await clientService.fetchOneClient(id);
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        data: clients
    }
    res.status(200).json(response);
}

// rajouté un nouveau client
exports.add = async (req, res) => {
    const clients = await clientService.addNewClient(req.body);
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        message: "Client ajouté avec succès",
        data: clients
    }
    res.status(201).json(response);
}

// met à jour un client en fonction de l'id
exports.update = async (req, res) => {
    const clients = await clientService.updateClient(req.params.id, req.body);
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        message: "Client modifié avec succès",
        data: clients
    }
    res.status(201).json(response);
}

// supprime un utilisateur
exports.delete = async (req, res) => {
    const clients = await clientService.deleteClient(req.params.id);
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        message: "Client supprimé avec succès",
        data: clients
    }
    res.status(200).json(response);
}

// récupère les factures par client
exports.showAllfactures = async (req, res) => {

    const factures = await clientService.showFactures(req.params.id);

    //formatage (objet data)
    const response = {
        status: "sucess",
        data: factures
    }
    res.status(200).json(response);
}