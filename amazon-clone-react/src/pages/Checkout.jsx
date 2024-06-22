import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Banner from "../assets/banner2.png";
import CheckoutItem from "../components/CheckoutItem";
import { selectItems, selectTotal } from "../features/basket/basketSlice";
import { selectUser } from "../features/user/userSlice";
import { signInWithGooglePopup } from "../utils/firebase.config";
import { toast } from "react-toastify";

export default function Checkout() {
  const checkoutProducts = useSelector(selectItems);
  const user = useSelector(selectUser);
  const total = useSelector(selectTotal);
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignIn = () => {
    signInWithGooglePopup()
      .then(() => {
        toast.success("Signed in successfully");
        navigate("/checkout/payment"); // Navigate to the payment page on successful sign-in
      })
      .catch(() => toast.error("Something went wrong"));
  };

  const handleProceedToCheckout = () => {
    navigate("/checkout/payment");
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left */}
      <div className="lg:basis-4/5 basis-full">
        <img src={Banner} alt="Banner" className="w-full mb-5 h-[250px]" />
        <div className="bg-white p-4">
          <h2 className="text-4xl">Shopping Basket</h2>
          <hr className="my-4" />
          <div className="space-y-16 p-4">
            {checkoutProducts.map((product) => (
              <CheckoutItem key={product.id} data={product} />
            ))}
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="lg:basis-1/5 lg:ml-4 mt-5 lg:mt-0 bg-white p-4 h-fit">
        <p className="mb-4 text-lg">
          Subtotal ({checkoutProducts.length > 0 ? checkoutProducts.length : 0}{" "}
          items): <strong>{total?.toFixed(2)} Rs</strong>
        </p>
        <button
          onClick={user ? handleProceedToCheckout : handleSignIn}
          className="btn w-full"
        >
          {user ? "Proceed to checkout" : "Sign in to checkout"}
        </button>
      </div>
    </div>
  );
}
