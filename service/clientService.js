const db = require("../utils/database");

// récupère tous les clients
exports.fetchAllClient = async() =>{
    const result = await db.execute("SELECT * FROM clients")
    return result[0];
};

// récupère un client grâce à l'id
exports.fetchOneClient = async (id) => {
    const result = await db.execute("SELECT * FROM clients WHERE id = :id",
        { id: id });

    return result[0];
};

// ajoute un nouveau client
exports.addNewClient = async (params) => {
    const result = await db.execute("INSERT INTO clients (nom, email) VALUES (:nom, :email)",
        {nom: params.nom,
        email: params.email});

    return result[0];
};

// Met à jour un client en fonction de l'id
exports.updateClient = async (id, body) => {
    const result = await db.execute("UPDATE clients SET nom = :nom, email = :email WHERE id = :id",
        {nom: body.nom,
        email: body.email,
        id: id});

    return result[0];
};

// supprime un client
exports.deleteClient = async (id, body) => {
    const result = await db.execute("DELETE FROM clients WHERE id = :id",
        {id: id});

    return result[0];
};

// factures par client
exports.showFactures = async (id) => {
    const result = await db.execute("SELECT * FROM factures WHERE clientId = :id",
        {clientId: id});

    return result[0];
};


