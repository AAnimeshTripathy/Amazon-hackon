import mongoose, { Schema } from "mongoose";

const PurchaseDetailsSchema = new Schema({
  product_id: {
    type: String,
    required: true,
  },
  paid_amount: { type: Number, required: true },
  saving_on: { type: Number },
  date_of_purchase: { type: Date, required: true },
});

const Purchase = mongoose.model("Purchase", PurchaseDetailsSchema);

export default Purchase;
