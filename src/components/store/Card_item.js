import React, { useState, useEffect } from 'react'
import { Delete } from '../svg/svg'
import styles from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { delete_To_Card } from '../../redux/action'
import axios from 'axios'

const CardItem = ({ item }) => {
    const [index, setindex] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        setindex(item.index);
    }, [])
    

   async function deletetoCard() {
         //так как мокапи генерирует автоматически id, поэтому лучше сделать запрос для правильного удаления по id
    try {
        const { data } = await axios.get('https://6149ca8a07549f001755a5e0.mockapi.io/cart');
        const findID = (data.find((card) => Number(card.cardId) === Number(item.id)).id);
        console.log(findID);
        await axios.delete(`https://6149ca8a07549f001755a5e0.mockapi.io/cart/${findID}`);
      } catch (error) {
        alert('проблема при удалении из корзины ');
        console.error(error);
      }

   }

    const deleteItem = () => {
        dispatch(delete_To_Card(index));
        deletetoCard()
          
   
    }

    return (
        <div className={styles.item}>
            <img className={styles.img_sneakers} src={item.imageUrl} alt='sneakers'></img>
            <div className={styles.block}>
                <h3>{item.name}</h3>
                <h6>{item.price} руб.</h6>
            </div>
            <Delete className={`${styles.btn_delete} '' + ${styles.btn_scale}`} onClick={() => deleteItem()} />
        </div>
    )

}

export default CardItem;