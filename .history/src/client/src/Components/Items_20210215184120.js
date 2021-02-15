import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getItems } from '../Store/Actions/itemAction';

const Items = () => {
    const dispatch = useDispatch()
    const itemsListData = useSelector(state => state.itemsList)
    const {loading, error, items} = itemsListData
    useEffect(() => {
        dispatch(getItems()) 
      }, [dispatch])
    return (
        <>
            {loading ? "Loading..." : error ? error.message : items.map(u => <h3>{u.name}</h3>)}
        </>
    )
}

export default Items