const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const ErrorHandler = require("../middlewares/errorHandler");
const groceriesData = require("../constants/groceriesData")


const getAllGroceries = catchAsyncErrors(async (req, res, next) =>{
    try {
        res.status(201).json({
            groceriesData
          });
    } catch (error) {
        return next(new ErrorHandler(error.message, 500));
    }
})

module.exports = {
    getAllGroceries
}