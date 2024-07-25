import express from 'express';
import { generarCancion, generarPlaylist } from '../controllers/userController.js';

const router = express.Router();

router.post("/generarCancion", generarCancion);
router.get('/playlists', generarPlaylist); 

export default router;