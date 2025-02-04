const express = require("express");
const { getAllRestaurants, getAllRestaurantsMenu } = require("../controllers/restaurants");
const router = express.Router();

router.route("/get-all").get(getAllRestaurants)
router.route("/get-all-restaurants-menu").get(getAllRestaurantsMenu)

module.exports = router;
