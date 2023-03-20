import { Router } from "express";
import cafeteriaCtrl from "../controllers/productos.controllers";

// creo una instacia de router

const router = Router();

// creo las rutas

router.route("/").get(cafeteriaCtrl.listarProductos).post(cafeteriaCtrl.post);

router.route("/:id").delete(cafeteriaCtrl.eliminarProducto).get(cafeteriaCtrl.obtenerProducto).put(cafeteriaCtrl.editarProducto);

export default router;
