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
// === 10. PATCH /productos/:id/stock ===
app.patch("/productos/:id/stock", (req, res) => {
  const id = req.params.id;
  const { cantidad } = req.body;
  const sql = "UPDATE productos SET stock = stock + ?, fecha_act=CURRENT_TIMESTAMP WHERE id=?";
  db.query(sql, [cantidad, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Stock actualizado" });
  });
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
