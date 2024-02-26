const db = require("../utils/database");

// Récupère toutes les factures
exports.fetchAllFacture = async() =>{
    const result = await db.execute("SELECT * FROM factures")
    return result[0];
};

// Ajout d'une nouvelle facture
exports.addNewFacture = async (body) => {
    const result = await db.execute(
        "INSERT INTO factures (clientId, numero, date, montant, etat) VALUES (:clientId, :numero, :date, :montant, :etat)",
        {
            clientId: body.clientId,
            numero: body.numero,
            date: body.date,
            montant: body.montant,
            etat: body.etat
        }
    );

    return result[0];
};

// Mise à jour d'une facture
exports.updateFacture = async (id, body) => {
    const result = await db.execute(
        "UPDATE factures SET clientId = :clientId, numero = :numero, date = :date, montant = :montant, etat = :etat WHERE id = :id",
        {
            id: id,
            clientId: body.clientId,
            numero: body.numero,
            date: body.date,
            montant: body.montant,
            etat: body.etat
        }
    );

    return result[0];
};


// Supprimer une facture
exports.deleteFacture = async(id) =>{
    const result = await db.execute("DELETE FROM factures WHERE id = :id",
        {
        id: id
    });

    return result[0];
};
