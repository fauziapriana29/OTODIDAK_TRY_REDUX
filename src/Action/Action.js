import axios from 'axios'

export const ambilData = async () => {

    const data = await axios.get('https://ghibliapi.herokuapp.com/films')

    return {
        type: "AMBIL_DATA",
        data: data,
    }
}