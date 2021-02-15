// Importation du store de Redux ainsi que l'utilisation de middleware 
import {createStore, applyMiddleware} from 'redux'
// Importation du middleware Thunk pour les opés asynchrones 
import thunk from 'redux-thunk'
// Importation du devtools pour google 
import {composeWithDevTools} from 'redux-devtools-extension'
// Importation de tous les reducers combinés 
import combineReducers from './Reducers/combineReducers'

// Déclaration du state initial vide
const initalState = {

}

// Déclaration du middleware Thunk pour les requêtes async
const middleware = [thunk]

// Création du store global, avec en paramètres nos reducers, notre initialState, le devTools et Thunk à travers la const Middleware
const store = createStore(combineReducers, initalState, composeWithDevTools(applyMiddleware(...middleware)))

// Exportation du store 
export default store;