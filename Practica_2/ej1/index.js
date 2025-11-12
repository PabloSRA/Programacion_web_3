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
// === 1. POST /categorias ===
app.post("/categorias", (req, res) => {
  const { nombre, descripcion } = req.body;
  const sql = "INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)";
  db.query(sql, [nombre, descripcion], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Categoría creada", id: result.insertId });
  });
});
