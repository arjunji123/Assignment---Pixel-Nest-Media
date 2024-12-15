import { useState } from "react";
import axios from "axios";

const ProductForm = ({ setFormOpen, fetchProducts }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddProduct = async (e) => {
    e.preventDefault();

    const newProduct = { name, category, price, quantity };

    try {
      await axios.post("http://localhost:5000/api/products", newProduct);
      setName("");
      setCategory("");
      setPrice("");
      setQuantity("");
      fetchProducts();
      setFormOpen(false); // Close the form after adding the product
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-xl transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-gray-500"
          onClick={() => setFormOpen(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Add New Product
        </h2>
        <form onSubmit={handleAddProduct} className="space-y-6">
          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter product name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Category
            </label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter category"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => {
                // Check if the input value is negative or invalid, and prevent it
                const value = e.target.value;
                if (value >= 0 || value === "") {
                  // Allow empty input or positive values
                  setPrice(value);
                }
              }}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter price"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-lg font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => {
                // Check if the input value is negative or invalid, and prevent it
                const value = e.target.value;
                if (value >= 0 || value === "") {
                  // Allow empty input or positive values
                  setQuantity(value);
                }
              }}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter quantity"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:bg-teal-700"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
