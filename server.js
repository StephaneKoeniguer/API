const http = require("http");
const express = require("express");
const factureRoute = require("./routes/factureRoute");
const clientRoute = require("./routes/clientRoute");


//init APP
const app = express();
app.use(express.json());


// routes
app.use("/api",factureRoute);
app.use("/api",clientRoute);

const server = http.createServer(app);

// port d'accès
server.listen(3001);
