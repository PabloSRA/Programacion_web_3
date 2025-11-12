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

// === 4. PUT /categorias/:id ===
app.put("/categorias/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, descripcion } = req.body;
  const sql = "UPDATE categorias SET nombre=?, descripcion=?, fecha_act=CURRENT_TIMESTAMP WHERE id=?";
  db.query(sql, [nombre, descripcion, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Categoría actualizada" });
  });
});
