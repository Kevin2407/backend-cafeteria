import {Router} from 'express';
import cafeteriaCtrl from '../controllers/productos.controllers';

// creo una instacia de router

const router = Router();

// creo las rutas

router.route('/',).get(cafeteriaCtrl.getPrueba).post(cafeteriaCtrl.postPrueba);

export default router;