import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Buys() {
  const location = useLocation(); // Get state from navigation
  const navigate = useNavigate(); // Initialize navigate
  const { book } = location.state || {}; // Destructure the passed book data

  if (!book) {
    return <p>No book selected. Please go back and select a book to buy.</p>;
  }

  const handlePurchase = () => {
    alert("Thank you for your purchase!");
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-800">
      <div className="w-full max-w-4xl p-6 border border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-6 dark:text-white text-center">
          {book.title}
        </h2>
        <div className="relative w-full h-80 md:h-96 mb-6 overflow-hidden rounded-lg">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="dark:text-gray-200 text-lg mb-4">
          <strong>Category:</strong> {book.category}
        </p>
        <p className="text-lg font-semibold dark:text-gray-200 mb-4">
          <strong>Price:</strong> ${book.price}
        </p>
        <p className="text-base dark:text-gray-200 mb-6">
          <strong>Description:</strong> Dive into the captivating story and
          unlock new knowledge with this amazing book!
        </p>
        <div className="text-center">
          <button
            onClick={handlePurchase}
            className="mt-3 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          >
            Confirm Purchase
          </button>
        </div>
      </div>
    </div>
  );
}

export default Buys;
