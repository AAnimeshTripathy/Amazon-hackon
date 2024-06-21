import mongoose, { Schema } from "mongoose";

const GiftVoucherDetailsSchema = new Schema({
  voucher_code: { type: String, required: true },
  details: { type: String },
  received_date: { type: Date, required: true },
  expiry_date: { type: Date, required: true },
});

const GiftVoucher = mongoose.model("GiftVoucher", GiftVoucherDetailsSchema);

export default GiftVoucher;
