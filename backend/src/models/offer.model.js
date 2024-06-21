import mongoose, { Schema } from "mongoose";

const OffersDetailsSchema = new Schema({
  offer_code: { type: String, required: true },
  offer_on: {
    type: String,
    enum: ["Credit Card", "UPI", "Amazon Pay Wallet"],
    required: true,
  },
  bank_name: { type: String, required: true },
  percentage_discount: { type: Number },
  amount_discount: { type: Number },
  minimum_purchase_value: { type: Number },
});

const Offer = mongoose.model("Offer", OffersDetailsSchema);

export default Offer;
