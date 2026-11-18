
import express from "express"; // Importamos la librería Express
import "dotenv/config";
import cors from "cors";
import rutausuario from "./src/modules/usuario/usuario.routes.js";

// Creamos una instancia de Express
const app = express();

// Puerto donde se ejecutará el servidor
const PORT = process.env.PORT || 4100;

// MIDDLEWARES
app.use(express.urlencoded({ extended: true })); // Permite recibir datos de formularios
app.use(express.json()); // Permite recibir datos en formato JSON
app.use(cors()); // Permite las peticiones desde otros dominios

// Ruta principal
app.get("/", (req, res) => {
  res.send("¡Hola, mundo!");
});

// Rutas de usuario
app.use("/api", rutausuario);

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
