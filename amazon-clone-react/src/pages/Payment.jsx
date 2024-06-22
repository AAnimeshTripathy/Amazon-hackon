import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectItems, selectTotal } from "../features/basket/basketSlice";
import CheckoutItem from "../components/CheckoutItem";

function Payment() {
  const [selectedPayment, setSelectedPayment] = useState("");
  const checkoutProducts = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const navigate = useNavigate();

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleNextPage = () => {
    if (selectedPayment) {
      alert(`Proceeding with ${selectedPayment}`);
    } else {
      alert("Please select a payment method.");
    }
  };

  const handleGoToCart = () => {
    navigate("/checkout");
  };

  return (
    <div className="p-4 w-full  flex justify-between">
      <div className="w-2/4 p-4 border border-gray-300 rounded mr-4">
        <h1 className="font-bold text-center text-3xl mt-6 mb-8">Checkout</h1>

        <div className="mb-4">
          <label className="block text-base font-bold mb-2">Available Gift Cards</label>
          <input
            type="text"
            placeholder="Enter gift card code"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-base font-bold mb-2">Apply Coupon Code</label>
          <input
            type="text"
            placeholder="Enter coupon code"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <h2 className="text-lg font-bold mb-4">Select Payment Method</h2>

        <div className="mb-4">
          <input
            type="radio"
            id="amazonWallet"
            name="paymentMethod"
            value="Amazon Wallet"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="amazonWallet" className="text-base">
            Amazon Wallet <span className="text-sm text-gray-500">(5% cashback, Success Rate: 98%)</span>
          </label>
        </div>

        <h3 className="text-base font-bold mb-2">Credit Cards</h3>

        <div className="mb-4">
          <input
            type="radio"
            id="rupayCreditCard"
            name="paymentMethod"
            value="Rupay Credit Card"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="rupayCreditCard" className="text-base">
            Rupay Credit Card <span className="text-sm text-gray-500">(2% cashback, Success Rate: 95%)</span>
          </label>
        </div>

        <div className="mb-4">
          <input
            type="radio"
            id="axisBankCreditCard"
            name="paymentMethod"
            value="Axis Bank Credit Card"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="axisBankCreditCard" className="text-base">
            Axis Bank Credit Card <span className="text-sm text-gray-500">(3% cashback, Success Rate: 97%)</span>
          </label>
        </div>

        <div className="mb-4">
          <input
            type="radio"
            id="iciciBankCreditCard"
            name="paymentMethod"
            value="ICICI Bank Credit Card"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="iciciBankCreditCard" className="text-base">
            ICICI Bank Credit Card <span className="text-sm text-gray-500">(4% cashback, Success Rate: 96%)</span>
          </label>
        </div>

        <div className="mb-4">
          <input
            type="radio"
            id="hdfcBankCreditCard"
            name="paymentMethod"
            value="HDFC Bank Credit Card"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="hdfcBankCreditCard" className="text-base">
            HDFC Bank Credit Card <span className="text-sm text-gray-500">(5% cashback, Success Rate: 98%)</span>
          </label>
        </div>

        <h3 className="text-base font-bold mb-2">UPI Options</h3>

        <div className="mb-4">
          <input
            type="radio"
            id="amazonPay"
            name="paymentMethod"
            value="Amazon Pay"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="amazonPay" className="text-base">
            Amazon Pay <span className="text-sm text-gray-500">(2% cashback, Success Rate: 99%)</span>
          </label>
        </div>

        <div className="mb-4">
          <input
            type="radio"
            id="googlePay"
            name="paymentMethod"
            value="Google Pay"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="googlePay" className="text-base">
            Google Pay <span className="text-sm text-gray-500">(1.5% cashback, Success Rate: 98%)</span>
          </label>
        </div>

        <div className="mb-4">
          <input
            type="radio"
            id="phonePe"
            name="paymentMethod"
            value="PhonePe"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="phonePe" className="text-base">
            PhonePe <span className="text-sm text-gray-500">(1% cashback, Success Rate: 97%)</span>
          </label>
        </div>

        <div className="mb-4">
          <input
            type="radio"
            id="paytm"
            name="paymentMethod"
            value="Paytm"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="paytm" className="text-base">
            Paytm <span className="text-sm text-gray-500">(2% cashback, Success Rate: 96%)</span>
          </label>
        </div>

        <h3 className="text-base font-bold mb-2">Cash on Delivery</h3>

        <div className="mb-4">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="COD"
            onChange={handlePaymentChange}
            className="mr-2"
          />
          <label htmlFor="cod" className="text-base">Cash on Delivery</label>
        </div>

        <button
          onClick={handleNextPage}
          className="mt-4 p-2 w-full bg-green-500 text-white font-bold rounded"
        >
          Next
        </button>
      </div>

      <div className="w-2/6 p-4 border border-gray-300 rounded">
        <h2 className="font-bold text-lg mb-4">Product Summary</h2>
        <div className="space-y-4">
          {checkoutProducts.map((product) => (
            <CheckoutItem key={product.id} data={product} />
          ))}
        </div>
        <p className="mt-4 text-lg">
          Subtotal ({checkoutProducts.length} items): <strong>{total?.toFixed(2)} Rs</strong>
        </p>
        <button
          onClick={handleGoToCart}
          className="mt-4 p-2 w-full bg-green-500 text-white font-bold rounded"
        >
          Go to Cart
        </button>
      </div>
    </div>
  );
}

export default Payment;
