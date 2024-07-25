import { faker } from '@faker-js/faker';


const generarCancion = (req, res) => {
    const data = req.body;
    console.log(data);  

    const obj = {
        id: faker.string.uuid(),
        titulo: faker.music.songName(),
        artista: faker.person.fullName(),
        album: faker.animal.bear(),
        genero: faker.music.genre(),
        duracion: faker.number.int({ min: 3, max: 10 }),
        fechaLanzamiento: faker.date.past()
    }

     res.send(obj);

}

const generarPlaylist = (req, res) => {
    const playlist = [];
    for (let i = 0; i < 10; i++) {
        playlist.push({
            id: faker.string.uuid(),
            titulo: faker.music.songName(),
            artista: faker.person.fullName(),
            album: faker.animal.bear(),
            genero: faker.music.genre(),
            duracion: faker.number.int({ min: 3, max: 10 }),
            fechaLanzamiento: faker.date.past()
        })
    }
    res.send(playlist);
}

export { generarCancion, generarPlaylist };