const express = require("express"); // Import express
const ixcRoutes = require("../routes/ixcRoutes"); // Importe router module
const cors = require("cors"); // import cors

//App Init
const app = express();

app.use(express.json()); // Enable JSON in API Body

app.use(cors()); // User cors

//API Endpoint IXC
app.use("/api/ixc", ixcRoutes); // Enable router feature

module.exports = {
    app,
};
