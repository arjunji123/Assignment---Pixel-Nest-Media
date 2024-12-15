import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already authenticated (via token in localStorage)
    if (localStorage.getItem("authToken")) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <ProductList />
        </div>
      ) : (
        <LoginForm setIsAuthenticated={setIsAuthenticated} />
      )}
    </div>
  );
};

// Main Router Component
const MainApp = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<ProductList />} />
    </Routes>
  </Router>
);

export default MainApp;
