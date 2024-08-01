import Musica from "../models/mongoose.model.js";

const musicaController = {

    crearMusica: async (req, res) => {
        try {
            const nuevaMusica = await Musica.create(req.body);
            res.json(nuevaMusica);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    obtenerMusica: async (req, res) => {
        try {
            const todasLasMusica = await Musica.find();
            res.json(todasLasMusica);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }, 

    obtenerMusicaPorNombre: async (req, res) => {
        const nombre = req.body.name;
        try {
            const actualizada = await Musica.findOne({ name: nombre });
            if(!actualizada) {
                res.status(404).json({ message: "No se encontro la cancion" });
                return;
            }
            res.json(actualizada);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    actualizarMusica: async (req, res) => {
        const nombre = req.body.name;
        try {
            const actualizada = await Musica.findOneAndUpdate({ name: nombre }, req.body, { new: true });
            if(!actualizada) {
                res.status(404).json({ message: "No se encontro la cancion" });
                return;
            }
            res.json(actualizada);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    borrarMusica: async (req, res) => {
        const nombre = req.body.name;
        try {
            const eliminarMusica = await Musica.findOneAndDelete({ name: nombre });
            if(!eliminarMusica) {
                res.status(404).json({ message: "No se encontro la cancion" });
                return;
            }
            res.json(eliminarMusica);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
};

export default musicaController;