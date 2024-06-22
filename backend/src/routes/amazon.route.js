import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import getDataByMonthAndYear from "../data/data.js";
import ApiError from "../utils/ApiError.js";

const router = Router();

// Define the new route
router.route('/summary').get(
    asyncHandler(async (req, res, next) => {
        try {
            const { month, year } = req.query;

            // Check if year is provided and it's a valid integer
            if (!year || isNaN(parseInt(year))) {
                throw new ApiError(400, 'Year must be provided and must be a valid integer.');
            }

            // Check if month is provided, it's a valid integer, and it's within the range 1-12
            if (month && (isNaN(parseInt(month)) || parseInt(month) < 1 || parseInt(month) > 12)) {
                throw new ApiError(400, 'Invalid month. Month must be an integer between 1 and 12.');
            }

            // Parse month and year as integers
            const parsedMonth = parseInt(month);
            const parsedYear = parseInt(year);

            // Call the function to get data by month and year
            const data = await getDataByMonthAndYear(parsedMonth, parsedYear);
            
            // Prepare response
            const response = {
                status: 200,
                message: 'Success',
                data: data
            };

            // Send response
            res.status(200).json(response);
        } catch (error) {
            // Handle errors
            next(new ApiError(400, error.message));
        }
    })
);

export default router;
