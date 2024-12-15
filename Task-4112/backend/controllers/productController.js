exports.getAllProducts = async (req, res, db) => {
  try {
    const [rows] = await db.query("SELECT * FROM products");
    res.json(rows);
  } catch (err) {
    console.error("Error fetching products:", err.message);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

exports.addProduct = async (req, res, db) => {
  const { name, category, price, quantity } = req.body;

  try {
    const [result] = await db.query(
      "INSERT INTO products (name, category, price, quantity) VALUES (?, ?, ?, ?)",
      [name, category, price, quantity]
    );

    res.status(201).json({
      message: "Product added successfully",
      productId: result.insertId,
    });
  } catch (err) {
    console.error("Error adding product:", err.message);
    res.status(500).json({ error: "Failed to add product" });
  }
};

exports.updateProduct = async (req, res, db) => {
  const { id } = req.params;
  const { name, category, price, quantity } = req.body;

  try {
    const [result] = await db.query(
      "UPDATE products SET name = ?, category = ?, price = ?, quantity = ? WHERE id = ?",
      [name, category, price, quantity, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully" });
  } catch (err) {
    console.error("Error updating product:", err.message);
    res.status(500).json({ error: "Failed to update product" });
  }
};

exports.deleteProduct = async (req, res, db) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM products WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error("Error deleting product:", err.message);
    res.status(500).json({ error: "Failed to delete product" });
  }
};
