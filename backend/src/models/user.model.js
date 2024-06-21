import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  email_id: { type: String, required: true, unique: true },
  payment_details: [{ type: Schema.Types.ObjectId, ref: "Payment" }],
  gift_vouchers_details: [{ type: Schema.Types.ObjectId, ref: "GiftVoucher" }],
  card_details: [{ type: Schema.Types.ObjectId, ref: "Card" }],
  savings_details: [{ type: Schema.Types.ObjectId, ref: "Saving" }],
  purchase_details: [{ type: Schema.Types.ObjectId, ref: "Purchase" }],
});

const User = mongoose.model("User", UserSchema);

export default User;
