const db = require("../utils/database");

exports.fetchAllClient = async() =>{
    const result = await db.execute("SELECT * FROM clients")
    return result[0];
};

exports.fetchOneClient = async (id) => {
    const result = await db.execute("SELECT * FROM clients WHERE id = ?", [id]);
    return result[0];
};

exports.addNewClient = async (params) => {
    const result = await db.execute("INSERT INTO clients (nom, email) VALUES (?, ?)", [params.nom, params.email]);
    return result[0];
};

exports.addNewClient = async (params) => {
    const result = await db.execute("INSERT INTO clients (nom, email) VALUES (?, ?)", [params.nom, params.email]);
    return result[0];
};

exports.updateClient = async (id, body) => {
    const result = await db.execute("UPDATE clients SET nom = ?, email = ? WHERE id = ?", [body.nom, body.email, id]);
    return result[0];
};

exports.deleteClient = async (id, body) => {
    const result = await db.execute("DELETE FROM clients WHERE id = ?", [id]);
    return result[0];
};


