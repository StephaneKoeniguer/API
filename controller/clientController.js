const clientService = require("../service/clientService");

exports.fetchAll = async (req, res) => {
    const clients = await clientService.fetchAllClient();
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        data: clients
    }
    res.status(200).json(response);
}

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