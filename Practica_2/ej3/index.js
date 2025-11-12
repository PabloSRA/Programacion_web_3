const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tienda"
});

db.connect(err => {
  if (err) console.error("Error de conexión:", err);
  else console.log("Conectado a MySQL");
});

// === 3. GET /categorias/:id ===
app.get("/categorias/:id", (req, res) => {
  const id = req.params.id;
  const sqlCat = "SELECT * FROM categorias WHERE id = ?";
  const sqlProd = "SELECT * FROM productos WHERE categoria_id = ?";
  db.query(sqlCat, [id], (err, catResult) => {
    if (err) return res.status(500).json({ error: err.message });
    if (catResult.length === 0) return res.status(404).json({ message: "Categoría no encontrada" });
    db.query(sqlProd, [id], (err, prodResult) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ categoria: catResult[0], productos: prodResult });
    });
  });
});
