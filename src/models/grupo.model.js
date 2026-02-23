import db from '../config/db.js';

export const getAllGrupos = async () => {
    // Solo lógica de DB
    const [rows] = await db.query('SELECT * FROM grupos WHERE activo = 1');
    return rows;
};

export const getGroupById = async(id) =>{
    const [rows] = await db.query('SELECT * FROM grupos WHERE activo = 1 AND id_grupo = ?', [id])
    return rows[0]
}

export const createGrupo = async ({ nombre_grupo, descripcion, activo}) => {
    const [result] = await db.query(
        'INSERT INTO grupos (nombre_grupo, descripcion, activo) VALUES (?,?,?)',
        [nombre_grupo, descripcion||null, activo]
    );
    return { id: result.insertId, nombre_grupo, activo};
};