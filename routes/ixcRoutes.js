const ixcController = require("../controllers/ixcController");

const router = require("express").Router();

router.get("/", ixcController.getClients);

module.exports = router;
