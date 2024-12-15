import { useState } from "react";
import axios from "axios";

const EditModal = ({ selectedProduct, setEditModalOpen, fetchProducts }) => {
  const [name, setName] = useState(selectedProduct.name);
  const [category, setCategory] = useState(selectedProduct.category);
  const [price, setPrice] = useState(selectedProduct.price);
  const [quantity, setQuantity] = useState(selectedProduct.quantity);

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/products/${selectedProduct.id}`,
        {
          name,
          category,
          price,
          quantity,
        }
      );
      fetchProducts();
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-lg shadow-xl transform transition-all duration-300 ease-in-out scale-100 hover:scale-105">
        <button
          className="absolute top-4 right-4 text-2xl font-bold text-gray-700 hover:text-gray-500"
          onClick={() => setEditModalOpen(false)}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Edit Product
        </h2>
        <form>
          <div className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => {
                  const value = e.target.value;
                  // Prevent setting negative value or invalid input
                  if (value >= 0 || value === "") {
                    setPrice(value);
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Quantity
              </label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  const value = e.target.value;
                  // Prevent setting negative value or invalid input
                  if (value >= 0 || value === "") {
                    setQuantity(value);
                  }
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleSave}
                className="px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold text-lg hover:bg-teal-700 transition duration-300"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditModalOpen(false)}
                className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
