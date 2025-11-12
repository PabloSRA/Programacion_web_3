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
// === 5. DELETE /categorias/:id ===
app.delete("/categorias/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM categorias WHERE id=?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Categoría y productos eliminados" });
  });
});
