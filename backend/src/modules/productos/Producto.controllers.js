import { ProductoModel } from "./Producto.model.js";

export const obtenerProductos = async (req, res) => {
    try {
        const results = await ProductoModel.findAll();
        res.json({ results });
    } catch (error) {
        res.status(500).json({
            error: `Error al listar productos: ${error}`,
        });
    }
};

export const obtenerProductoId = async (req, res) => {
    try {
        const results = await ProductoModel.findById(req.params.codigo);
        res.json({ results });
    } catch (error) {
        res.status(500).json({
            error: `Error al consultar producto: ${error}`,
        });
    }
};

export const crearProducto = async (req, res) => {
    if (!req.body || !req.body.codigo) {
        return res.status(400).json({
            error: "Debes enviar JSON con codigo, descripcion, unidad, costo y precio (Header Content-Type: application/json)",
        });
    }
    const datos = {
        codigo: req.body.codigo,
        descripcion: req.body.descripcion,
        unidad: req.body.unidad,
        costo: req.body.costo,
        precio: req.body.precio,
    };

    try {
        const results = await ProductoModel.create(datos);
        res.json({ results });
    } catch (error) {
        res.status(500).json({
            error: `Ocurrió un error al insertar el producto: ${error}`,
        });
    }
};

export const borrarProducto = async (req, res) => {
    try {
        const results = await ProductoModel.delete(req.params.codigo);
        res.json({ results });
    } catch (error) {
        res.status(500).json({
            error: `Ocurrió un error al eliminar el producto: ${error}`,
        });
    }
};

export const actualizarProducto = async (req, res) => {
    try {
        const results = await ProductoModel.update(req.params.codigo, req.body);
        res.json({ results });
    } catch (error) {
        res.status(500).json({
            error: `Ocurrió un error al actualizar el producto: ${error}`,
        });
    }
};
