import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getItems } from '../Store/Actions/itemAction';

const Items = () => {
    const dispatch = useDispatch()
    const itemsListData = useSelector(state => state.itemList)
    const {items, loading, error} = itemsListData
    useEffect(() => {
        dispatch(getItems()) 
      }, [dispatch])
      console.log(itemsListData)
    return (
        <>
            {items.map(u => <h3>{u.name}</h3>)}
        </>
    )
}

export default Items