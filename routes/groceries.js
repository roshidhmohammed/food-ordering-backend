const express = require("express");
const { getAllGroceries } = require("../controllers/groceries");
const router = express.Router();

router.route("/get-all-groceries").get(getAllGroceries)

module.exports = router;
