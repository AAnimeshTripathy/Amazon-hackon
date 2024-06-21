import mongoose, { Schema } from "mongoose";

const SavingsDetailsSchema = new Schema({
  payment_id: { type: String },
  purchase_id: { type: String },
  amount: { type: Number, required: true },
});

const Saving = mongoose.model("Saving", SavingsDetailsSchema);

export default Saving;
