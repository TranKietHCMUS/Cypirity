const express= require("express");
const SupplyData = require("../Controllers/storiesController")
const router = express.Router();

router.get('', SupplyData);

module.exports = router;