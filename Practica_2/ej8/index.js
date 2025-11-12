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
// === 8. GET /productos/:id ===
app.get("/productos/:id", (req, res) => {
  const id = req.params.id;
  const sql = `
    SELECT p.*, c.nombre AS categoria
    FROM productos p
    JOIN categorias c ON p.categoria_id = c.id
    WHERE p.id = ?
  `;
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(result[0]);
  });
});
