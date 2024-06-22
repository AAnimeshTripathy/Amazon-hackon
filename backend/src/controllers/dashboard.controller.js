import User from "../models/user.model.js";
import Card from "../models/card.model.js";
import GiftVoucher from "../models/giftvoucher.model.js";
import Payment from "../models/payment.model.js";
import Purchase from "../models/purchase.model.js";
import Saving from "../models/saving.model.js";
import Product from "../models/product.model.js";
import Offer from "../models/offer.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import mongoose from 'mongoose';

const getSummary = async (req, res, next) => {
    try {
        const { email, year, month } = req.query;

        if (!email || !year) {
            throw new ApiError("Email and year are required parameters", 400);
        }

        const startDate = new Date(year, month ? month - 1 : 0, 1);
        const endDate = month ? new Date(year, month, 0) : new Date(year, 11, 31);

        const user = await User.findOne({ email_id: email });
        if (!user) {
            throw new ApiError("User not found", 404);
        }

        const purchases = await Purchase.find({
            user_id: user._id,
            date_of_purchase: { $gte: startDate, $lte: endDate }
        });

        const savings = await Saving.find({
            user_id: user._id,
            date_of_saving: { $gte: startDate, $lte: endDate }
        });

        const spendingByCategory = {};
        const savingsByCategory = {};

        let totalSpending = 0;
        let totalSavings = 0;

        purchases.forEach(purchase => {
            const category = purchase.category || 'Uncategorized';
            spendingByCategory[category] = (spendingByCategory[category] || 0) + purchase.paid_amount;
            totalSpending += purchase.paid_amount;
        });

        savings.forEach(saving => {
            const category = saving.category || 'Uncategorized';
            savingsByCategory[category] = (savingsByCategory[category] || 0) + saving.amount;
            totalSavings += saving.amount;
        });

        const summary = {
            totalSpending,
            totalSavings,
            spendingByCategory,
            savingsByCategory
        };

        return res.status(200).json(new ApiResponse(200, "Summary data retrieved successfully", summary));
    } catch (error) {
        next(new ApiError("Failed to retrieve summary data", 500, error));
    }
};

export default {
    getSummary
};
