import { Router } from "express";
import * as productoCtr from "./Producto.controllers.js";

const router = Router();

router.get("/productos", productoCtr.obtenerProductos);
router.get("/productos/:codigo", productoCtr.obtenerProductoId);
router.post("/productos", productoCtr.crearProducto);
router.delete("/productos/:codigo", productoCtr.borrarProducto);
router.put("/productos/:codigo", productoCtr.actualizarProducto);

export default router;
