import { Router } from "express";
import musicaController from "../controllers/mongoose.controller.js";


const router = Router();

router.get("/", musicaController.obtenerMusica);
router.post("/nuevo", musicaController.crearMusica);
router.get("/:name", musicaController.obtenerMusicaPorNombre);
router.put("/:name", musicaController.actualizarMusica);
router.delete("/:name", musicaController.borrarMusica);

export default router;