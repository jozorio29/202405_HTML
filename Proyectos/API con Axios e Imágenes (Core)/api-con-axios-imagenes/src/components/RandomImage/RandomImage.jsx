import { useState, useEffect } from 'react'
import axios from 'axios'


const RandomImage = () => {

    const [image, setImage] = useState(null)

    useEffect(() => {
        getImage()
    }, [])

    const getImage = () => {
        axios
            .get('https://dog.ceo/api/breeds/image/random')
            .then((response) => {
                setImage(response.data.message)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (!image) return null

    return (
        <div>
            <img src={image} alt="random image" style={{ width: '800px', height: '800px', borderRadius: '50px'}}/>
            <div>
                <button onClick={getImage}  type="button" className="btn btn-primary btn-lg mt-5">
                    Fetch New Random Image
                </button>
            </div>
        </div>
    );
    
};

export default RandomImage;