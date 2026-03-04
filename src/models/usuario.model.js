import db from '../config/db.js';

export const createUsuario = async (email, passwordHash, nombre_completo) => {
    const [result] = await db.query(
        'INSERT INTO usuarios (email, password_hash, nombre_completo) VALUES (?, ?, ?)',
        [email, passwordHash, nombre_completo]
    );
    return {id: result.insertId, passwordHash, nombre_completo};
};

export const findUsuarioByEmail = async (email) => {
    const [rows] = await db.query(
        'SELECT id_usuario, email, password_hash, nombre_completo, rol FROM usuarios WHERE email = ?',
        [email]
    );
    return rows[0];
};