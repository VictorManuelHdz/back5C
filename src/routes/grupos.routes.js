import { Router } from 'express';
import verificarToken from '../middlewares/auth.middleware.js';
import * as ctrl from '../controllers/grupos.controller.js';

const router = Router();

// Rutas publicas
router.get('/', ctrl.getAllGrupos);
router.get('/:id', ctrl.getGrupoById)

// Rutas protegidas
router.post('/', verificarToken, ctrl.createGrupo);

export default router;