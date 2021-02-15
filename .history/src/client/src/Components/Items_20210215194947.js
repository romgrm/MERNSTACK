import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getItems } from '../Store/Actions/itemAction';

const Items = () => {
    const dispatch = useDispatch()
    const itemsListData = useSelector(state => console.log(state))
    console.log(itemsListData)
    const {items, loading} = itemsListData
    useEffect(() => {
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