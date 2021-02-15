export const GET_ITEM = 'GET_ITEM';
export const ITEM_ERROR = 'ITEM_ERROR'


const initialState = {
    items:[],
    loading:true
}

export default function(state = initialState, action){

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