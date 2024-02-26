const factureService = require("../service/factureService");

exports.fetchAll = async (req, res) => {
    const factures = await factureService.fetchAllFacture();
    
    //formatage (objet data)
    const response = {
        status: "sucess",
        data: factures
    }
    res.status(200).json(response);
}
