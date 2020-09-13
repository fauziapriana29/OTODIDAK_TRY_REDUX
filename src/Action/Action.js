import axios from 'axios'

export const ambilData = () => {

    return async function (dispatch) {
      const data = await axios.get("https://ghibliapi.herokuapp.com/films");

        dispatch({
          type: "AMBIL_DATA",
          data: data,
        });
    };

}