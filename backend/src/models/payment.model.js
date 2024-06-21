import mongoose, { Schema } from "mongoose";

const PaymentDetailsSchema = new Schema({
  paymentID: { type: String, required: true },
  payment_date: { type: Date, required: true },
  status: { type: String, enum: ["Success", "Failed"], required: true },
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  method: { type: String, enum: ["Credit Card", "Debit Card", "COD", "Amazon Pay Wallet", "UPI", "Failed"], required: true },
  bank_name: { type: String },
  upi_payment_platform: { type: String },
});

const Payment = mongoose.model("Payment", PaymentDetailsSchema);

export default Payment;
