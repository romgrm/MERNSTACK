// On créer les actions de notre itemReducer
export const GET_ITEM = 'GET_ITEM';
export const ITEM_ERROR = 'ITEM_ERROR'

// On initialise le state de base qui accueillera les données fecth de l'API 
const initialState = {
    items:[],
    loading:false
}

// Function qui va prendre un state(avec en valeur l'inital state) et des actions 
export default function(state = initialState, action){

    // Différentes actions réalisées en fonction du type d'action exécuté 
    switch(action.type){

        case GET_ITEM:
        return {
            ...state,
            items:action.payload,
            loading:false

        }
        case ITEM_ERROR:
            return{
                loading: false, 
                error: action.payload 
            }
        default: return state
    }

}