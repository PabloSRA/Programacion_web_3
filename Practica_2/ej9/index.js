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

// === 9. PUT /productos/:id ===
app.put("/productos/:id", (req, res) => {
  const id = req.params.id;
  const { nombre, precio, stock, categoria_id } = req.body;
  const sql = `
    UPDATE productos
    SET nombre=?, precio=?, stock=?, categoria_id=?, fecha_act=CURRENT_TIMESTAMP
    WHERE id=?
  `;
  db.query(sql, [nombre, precio, stock, categoria_id, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Producto actualizado" });
  });
});