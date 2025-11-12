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

// === 6. POST /productos ===
app.post("/productos", (req, res) => {
  const { nombre, precio, stock, categoria_id } = req.body;
  const sql = "INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)";
  db.query(sql, [nombre, precio, stock, categoria_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Producto agregado", id: result.insertId });
  });
});