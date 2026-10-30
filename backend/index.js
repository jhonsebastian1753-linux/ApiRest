import express from "express";
import cors from "cors";
import rutausuario from './src/modules/usuario/usuario.routes.js'
import rutaproducto from './src/modules/productos/Producto.routes.js'

const app = express();
const PORT = 4100;

// Middlewares
app.use(express.json()); // Para que el servidor entienda JSON en el body
app.use(cors());

app.use("/api", rutausuario);
app.use("/api", rutaproducto);
app.listen(PORT, (req, res) => {
  console.log(`Server iniciado en : http://localhost:${PORT}`);
});