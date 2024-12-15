import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductForm from "./ProductForm";
import EditModal from "./EditModal";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa"; // Import icons
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addProductModalOpen, setAddProductModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  // Fetch the products from the API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Delete a product
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      fetchProducts(); // Re-fetch the products after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Open the edit modal and set the selected product
  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    setSelectedProduct(productToEdit);
    setEditModalOpen(true);
  };

  // Handle logout
  const handleLogout = () => {
    console.log("Logging out..."); // Debugging line
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    navigate("/"); // Navigate to the login page after logging out
  };

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-gray-50 rounded-lg ">
      <div className="flex justify-between items-center mb-6 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-900 tracking-tight">
          Product List
        </h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-2 px-6 rounded-lg text-sm font-medium transition duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Logout
        </button>
      </div>
      <div className=" justify-between items-center mb-6 p-4 bg-white shadow-[0_8px_16px_-4px_rgba(0,0,0,0.2),0_-8px_16px_-4px_rgba(0,0,0,0.2)] rounded-lg">
        <button
          className="bg-teal-600 text-white px-5 py-2 rounded-lg text-lg flex items-center gap-2 mb-6 transition-transform transform hover:scale-105 hover:bg-teal-700 ml-auto"
          onClick={() => setAddProductModalOpen(true)}
        >
          <span className="text-xl">
            <FaPlus />
          </span>{" "}
          Add Product
        </button>

        {/* Modern styled table */}
        <div className="overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full table-auto rounded-lg">
            <thead>
              <tr className="bg-teal-100">
                <th className="py-3 px-4 text-left text-teal-700 font-medium">
                  Name
                </th>
                <th className="py-3 px-4 text-left text-teal-700 font-medium">
                  Category
                </th>
                <th className="py-3 px-4 text-left text-teal-700 font-medium">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-teal-700 font-medium">
                  Quantity
                </th>
                <th className="py-3 px-4 text-left text-teal-700 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-teal-50">
                  <td className="py-4 px-4 text-gray-700">{product.name}</td>
                  <td className="py-4 px-4 text-gray-700">
                    {product.category}
                  </td>
                  <td className="py-4 px-4 text-gray-700">{product.price}</td>
                  <td className="py-4 px-4 text-gray-700">
                    {product.quantity}
                  </td>
                  <td className="py-4 px-4 flex space-x-2">
                    <button
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg text-sm transition-transform transform hover:scale-105 hover:bg-yellow-600"
                      onClick={() => handleEdit(product.id)}
                    >
                      <FaEdit /> {/* Edit icon */}
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm transition-transform transform hover:scale-105 hover:bg-red-600"
                      onClick={() => handleDelete(product.id)}
                    >
                      <FaTrashAlt /> {/* Delete icon */}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editModalOpen && selectedProduct && (
        <EditModal
          selectedProduct={selectedProduct}
          setEditModalOpen={setEditModalOpen}
          fetchProducts={fetchProducts} // Pass the fetchProducts function to refresh the list after editing
        />
      )}

      {/* Add Product Modal */}
      {addProductModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <ProductForm
            fetchProducts={fetchProducts}
            setFormOpen={setAddProductModalOpen} // Close modal after adding product
          />
        </div>
      )}
    </div>
  );
};

export default ProductList;
