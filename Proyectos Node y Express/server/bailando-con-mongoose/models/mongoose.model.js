import { Schema } from "mongoose";
import mongoose from "mongoose";


const MusicaSchema = new Schema({
    name: { type: String, 
        required: [true, "El título es obligatorio"] 
    }, 
    artist: { type: String, 
        required: [true, "El autor es obligatorio"] 
    }, 
    album: { type: String, 
        required: [true, "El album es obligatorio"] 
    }, 
    genre: { type: String, 
        required: [true, "El genero es obligatorio"] 
    }, 
    duration: { type: Number, 
        required: [true, "La duracion es obligatorio"] 
    }, 
    year: { type: Date, 
        required: [true, "El año es obligatorio"] 
    }
}, { timestamps: true });

const Musica = mongoose.model("Musica", MusicaSchema);

export default Musica;