import mongoose, { Schema } from "mongoose";

const CardDetailsSchema = new Schema({
  card_number: { type: String, required: true },
  bank_name: { type: String },
  type: { type: String, enum: ["Credit", "Debit"], required: true },
  valid_till: { type: Date, required: true },
});

const Card = mongoose.model("Card", CardDetailsSchema);

export default Card;
