import getDataByMonthAndYear from '../data/data.js';
import ApiError from '../utils/ApiError.js';
import asyncHandler from '../utils/asyncHandler.js';

const getSummary = asyncHandler(async (req, res, next) => {
    try {
        const { month, year } = req.query;
        
        if (!year || !parseInt(year)) {
            throw new ApiError(400, 'Year must be provided and must be a valid integer.');
        }

        if (month && (month < 1 || month > 12 || !parseInt(month))) {
            throw new ApiError(400, 'Invalid month. Month must be an integer between 1 and 12.');
        }

        const data = await getDataByMonthAndYear(parseInt(month), parseInt(year));
        const response = {
            status: 200,
            message: 'Success',
            data: data
        };
        res.status(200).json(response);
    } catch (error) {
        next(new ApiError(400, error.message));
    }
});

export default getSummary;
