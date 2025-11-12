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

// === 2. GET /categorias ===
app.get("/categorias", (req, res) => {
  db.query("SELECT * FROM categorias", (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});
