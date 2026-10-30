import db from "../../config/dbconexion.js";

export const ProductoModel = {
    findAll: async () => {
        const sql = "SELECT * FROM producto ORDER BY descripcion";
        const [rows] = await db.query(sql);
        return rows;
    },

    findById: async (codigo) => {
        const sql = "SELECT * FROM producto WHERE codigo = ?";
        const [rows] = await db.query(sql, [codigo]);
        return rows;
    },

    delete: async (codigo) => {
        const sql = "DELETE FROM producto WHERE codigo = ?";
        const [rows] = await db.query(sql, [codigo]);
        return rows;
    },

    create: async (data) => {
        const sql = "INSERT INTO producto SET ?";
        const [rows] = await db.query(sql, [data]);
        return rows;
    },

    update: async (codigo, data) => {
        const sql = "UPDATE producto SET ? WHERE codigo = ?";
        const [rows] = await db.query(sql, [data, codigo]);
        return rows;
    },
};
