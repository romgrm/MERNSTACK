// Import de la fonction combineReducers 
import { combineReducers } from 'redux'
// Importation du premier Reducer 
import itemReducer from './itemReducer'

// List des Reducers combinés 
export default combineReducers({
  itemList: itemReducer
})