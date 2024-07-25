import express from 'express';
import userRoutes from './src/routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(userRoutes);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});