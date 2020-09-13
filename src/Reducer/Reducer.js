import { combineReducers } from 'redux'

const dataFilmReducer = (list = [], action) => {
    
    if (action.type === "AMBIL_DATA") {
        return action.data
    }

    return list
}

export default combineReducers({
    listFilm : dataFilmReducer
})