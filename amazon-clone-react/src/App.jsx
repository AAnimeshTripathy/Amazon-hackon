import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import AccountAndList from "./pages/AccountAndList";
import BudgetDashboard from "./pages/BudgetDashboard";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Payment from "./pages/Payment";
import ScrollUp from "./utils/ScrollUp";
import Chatbot from "./components/chatbot";

export default function App() {
  return (
    <div className="bg-gray-100 h-full">
      <Header />
      <main className="2xl:max-w-screen-2xl xl:max-w-screen-xl sm:px-4 mx-auto pb-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="accounts-lists" element={<AccountAndList />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/payment" element={<Payment />} />
          <Route
            path="accounts-lists/budget-dashboard"
            element={<BudgetDashboard />}
          />
        </Routes>
      </main>
      <ScrollUp />
      <ToastContainer />
      <Chatbot />
      <Footer />
    </div>
  );
}
