import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../store/Card';
import { Hearth } from '../svg/svg';
import styles from './header.module.scss';

const Header = () => {
    const [displayCard, setDisplayCard] = useState(false);
    const [amount_Item, setAmount_Item] = useState(0);
    const openCard = () => {
        setDisplayCard(true);
    }
    const closedCard = () => {
        setDisplayCard(false);
    }
    const amountItem = (e) => {
        setAmount_Item(e);
    }

    return (
        <header className={styles.header}>
            <Link to='/home'>
                <div className={styles.header_left}>
                    <img src='img/logo.png' alt='logo' />
                    <div>
                        <h3>Магазин Кроссовок</h3>
                        <p>(react + redux + scss)</p>
                    </div>
                </div>
            </Link>
            <div className={styles.header_right}>
                <img className={styles.c_p} onClick={() => openCard()} src='img/cart.svg' alt='card' />
                <p className={amount_Item < 1 ? "false" : amount_Item > 9 ? styles.amount10 : styles.amount} onClick={() => openCard()} >{amount_Item}</p>
                <Link to='/favorite'>
                    <Hearth className={styles.hearthOn} />
                </Link>
                <img className={styles.c_p} src='img/user.svg' alt='user' />
            </div>
            <Card open={displayCard} closedCard={closedCard} amountItem={amountItem} />
        </header>
    )
}

export default Header;
