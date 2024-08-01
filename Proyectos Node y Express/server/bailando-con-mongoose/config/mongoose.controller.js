import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const MONGO_URL = process.env.MONGODB_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Base de datos conectada exitosamente");
    } catch (error) {
        console.log("Error al conectar a MongoDB: " + error);
    }
}

export default connectDB;