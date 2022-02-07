import React from 'react'

import { useSelector } from 'react-redux';
import Item from './components/store/Item';

const ListFavorite = () => {

    
    const list_item = useSelector(state => state.initReducer.list_item);
    const favorite_item = useSelector(state => state.favoriteReducer.favoriteId);
    const favorite = list_item.filter((item) => item.id === favorite_item.find((id) => id === item.id ));

    return (


        <div className='container'>
            <div className='title'>Избранное:</div>
            <div className='store_container'>
                {favorite.map((item, index) => { return <Item key={+new Date() + Math.random() + index} item={item} /> })}
            </div>
        </div>

    )
}

export default ListFavorite
