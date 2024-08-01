import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/mongoose.routes.js';
import connectDB from './config/mongoose.controller.js';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8080;

connectDB();
app.use('/api/musicas', router);
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});