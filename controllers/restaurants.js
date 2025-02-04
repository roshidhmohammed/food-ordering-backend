const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../middlewares/errorHandler");
const restaurantList = require("../constants/restaurantData.json");
const restaurantMenu = require("../constants/restaurantMenuCardData");

const getAllRestaurants = catchAsyncErrors(async (req, res, next) => {
  try {
    res.status(201).json({
      restaurantList,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

const getAllRestaurantsMenu = catchAsyncErrors(async (req, res, next) => {
  try {
    const { resId } = req.query;
    const restaurantCategories = restaurantMenu.restaurantMenu.find(
      (category) => category?.id === resId
    );
    res.status(201).json({
      restaurantCategories,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

module.exports = {
  getAllRestaurants,
  getAllRestaurantsMenu,
};
