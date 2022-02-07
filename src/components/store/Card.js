import React, { useState, useEffect } from 'react'
import { Delete } from '../svg/svg'
import styles from './Card.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import  CardItem  from './Card_item'

const Card = ({ open, closedCard, amountItem }) => {
    const card = useSelector(state => state.cardReducer.card);
    let Sum = 0;

    useEffect(() => {
        amountItem(card.length);
    }, [card])
    

    const closed = () => { closedCard();}

    return (
        <div className={open ? styles.card_main + ' ' + styles.main_true : styles.card_main}>
            <div className={styles.card}>
                <h1>Корзина</h1>
                <Delete className={styles.btn_delete} onClick={() => closed()} />
            </div>
            <div className={styles.scroll}>
                {card.map((item, index) => { Sum= Sum + item.price;
                    return (  
                        <CardItem item={item} key={+new Date() + Math.random() + index} className={styles.item}/>
                        
                    )
                })}
            </div>
            

            <div className={styles.sum}>
                <p>Сумма:</p>
                <p></p>
                <p>{Sum} руб</p>

            </div>
            <div className={styles.order}>

                <p>Сделать заказ</p>
            </div>





        </div>
    )
}

export default Card
