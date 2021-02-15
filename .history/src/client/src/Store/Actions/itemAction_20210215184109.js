// Import des actions initialisées dans notre reducer 
import {GET_ITEM, ITEM_ERROR} from '../Reducers/itemReducer'
// Import d'axios pour faciliter l'appel à l'API 
import axios from 'axios'

// Function asynchrone qui va récupérer les items de notre api 
export const getItems = () => async dispatch => {
    
    // Requête GET vers notre API + dispatch qui définie le type d'action et ce qu'elle fait (payload) 
    try{
        const res = await axios.get(`http://localhost:5000/api/item/`)
        dispatch( {
            type: GET_ITEM,
            payload: res.data
        })
    }
    //  Gestion de l'error 
    catch(error){
        dispatch( {
            type: ITEM_ERROR,
            payload: error,
        })
    }

}