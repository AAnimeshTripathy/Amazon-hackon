import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
  price: { type: Number, required: true },
  detail: { type: String, required: true },
  category: { type: String, required: true },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
