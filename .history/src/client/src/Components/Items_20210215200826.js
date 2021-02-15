// Importation de React + useEffect pour fetch les data avant que le component soit monté 
import React, {useEffect} from 'react'
// Importation des 2 hooks de Redux pour fetch nos data
import {useDispatch, useSelector} from 'react-redux'
// Importation de notre itemAction qui contient l'appel Axios GET de nos datas 
import { getItems } from '../Store/Actions/itemAction';

// On créer une React Fonctionnal Component appellée "Items"
const Items = () => {
    // On stock notre hook Dispatch dans une const, Dispatch va permettre de récupérer les data dans notre store 
    const dispatch = useDispatch()
    // On utilise useSelector pour sélectionner le state qui contient les data que l'on veut. Il va directement chercher dans notre combinedReducers le Reducers correspondant, ici itemList
    const itemsListData = useSelector(state => state.itemList)
    console.log(itemsListData)
    // Ensuite, on extrait de notre reducer stocké dans itemsListData, les données correspondant à celles de notre API 
    const {items, loading} = itemsListData
    
    // Enfin, on utilise useEffect pour injecter les données à notre components avant qu'il soit monté 
    useEffect(() => {
        // Dispatch va chercher la data directement dans notre itemAction ou Axios fait l'appel. [dispatch] permet d'eviter un appel infini, on l'appel qu'une seule fois. 
        dispatch(getItems()) 
      }, [dispatch])
    return (
        <>
           <h1>
               {items.map((elem) =>(
                   elem.name
               ))}
           </h1>
        </>
    )
}

export default Items