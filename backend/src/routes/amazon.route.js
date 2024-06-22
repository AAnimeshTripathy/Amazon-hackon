import { Router } from "express";

import User from "../models/user.model.js";
import Card from "../models/card.model.js";
import GiftVoucher from "../models/giftvoucher.model.js";
import Payment from "../models/payment.model.js";
import Purchase from "../models/purchase.model.js";
import Saving from "../models/saving.model.js";
import Product from "../models/product.model.js";
import Offer from "../models/offer.model.js";

const router = Router();



// // Helper function to insert data
// const insertData = async () => {
//   try {
//     // Insert data into collections
//     const cards = await Card.insertMany(cardData);
//     const giftVouchers = await GiftVoucher.insertMany(giftVoucherData);
//     const payments = await Payment.insertMany(paymentData);
//     const products = await Product.insertMany(productData);
//     const purchases = await Purchase.insertMany(purchaseData);
//     const savings = await Saving.insertMany(savingData);
//     const offers = await Offer.insertMany(offerData);
//     const users = await User.insertMany(userData);

//     await User.updateOne(
//       { email_id: "aanimeshtripathy@gmail.com" },
//       {
//         $push: {
//           card_details: { $each: cards.map((card) => card._id) },
//           gift_vouchers_details: {
//             $each: giftVouchers.map((voucher) => voucher._id),
//           },
//           payment_details: { $each: payments.map((payment) => payment._id) },
//           purchase_details: {
//             $each: purchases.map((purchase) => purchase._id),
//           },
//           savings_details: { $each: savings.map((saving) => saving._id) },
//         },
//       }
//     );

//     await User.updateOne(
//       { email_id: "erum.meraj23@gmail.com" },
//       {
//         $push: {
//           card_details: { $each: cards.map((card) => card._id) },
//           gift_vouchers_details: {
//             $each: giftVouchers.map((voucher) => voucher._id),
//           },
//           payment_details: { $each: payments.map((payment) => payment._id) },
//           purchase_details: {
//             $each: purchases.map((purchase) => purchase._id),
//           },
//           savings_details: { $each: savings.map((saving) => saving._id) },
//         },
//       }
//     );

//     console.log("Dummy data inserted successfully");
//   } catch (error) {
//     console.error("Error inserting dummy data:", error);
//   }
// };



// Route for inserting data
router.route("/hello").get(async (req, res) => {
  console.log("Hello Amazon");
});

export default router;
