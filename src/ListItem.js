import React from 'react'
import { useSelector } from 'react-redux';
import Item from './components/store/Item';

const ListItem = () => {

    const list_item = useSelector(state => state.initReducer.list_item);

    return (
        <div className='container'>
            <div className='title'>Все кроссовки:</div>
            <div className='store_container'>
                {list_item.map((item, index) => { return <Item key={+new Date() + Math.random() + index} item={item} /> })}
            </div>
        </div>

    )
}

export default ListItem
