import React, { useState} from 'react'
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { add_To_Card, add_To_Favorite } from '../../redux/action'
import { Plus, Hearth } from '../svg/svg'

import styles from './item.module.scss'

const Item = ({ item }) => {

  const list_item = useSelector(state => state.initReducer.list_item);
  const favorite_list = useSelector(state => state.favoriteReducer.favoriteId);

  // const [id, setId] = useState(item.id);
  // const [name, setName] = useState(item.name);
  // const [price, setPrice] = useState(item.price);
  // const [url, setUrl] = useState(item.imageUrl);

  const [id] = useState(item.id);
  const [name] = useState(item.name);
  const [price] = useState(item.price);
  const [url] = useState(item.imageUrl);

  const [favorite, setFavorite] = useState(favorite_list.some((item) => item === id));
  const dispatch = useDispatch();


  async function addFav() {
    try {
      await axios.post('https://6149ca8a07549f001755a5e0.mockapi.io/favorites', { favId: id });
    } catch (error) {
      alert('проблема при добавлении в избранное ');
      console.error(error);
    }
    
  }

  async function removeFav(id) {
    //так как мокапи генерирует автоматически id, поэтому лучше сделать запрос для правильного удаления по id
    try {
      const { data } = await axios.get('https://6149ca8a07549f001755a5e0.mockapi.io/favorites');
      const findID = (data.find((item) => Number(item.favId) === Number(id)).id);

      await axios.delete(`https://6149ca8a07549f001755a5e0.mockapi.io/favorites/${findID}`);
    } catch (error) {
      alert('проблема при удалении из избранного ');
      console.error(error);
    }
  }

  async function addtoCardUrl() {
    try {
      await axios.post('https://6149ca8a07549f001755a5e0.mockapi.io/cart', { cardId: id });
     
    } catch (error) {
      alert('проблема при добавлении в корзину ');
      console.error(error);
    }
  }



  const addToCard = (id) => {
    const add_item = (list_item.find((e) => e.id === id));
    dispatch(add_To_Card(add_item));
    addtoCardUrl();
  };

  const addToFavorite = (id) => {
    setFavorite(!favorite);
    dispatch(add_To_Favorite(id, favorite));

    if (!favorite) addFav(); 
    else removeFav(id);
  };

console.log(url);


  return (
    <div className={styles.card_item}>
      <Hearth className={!favorite ? styles.hearthOn : styles.hearthOff} onClick={() => addToFavorite(id)} />
      <img className={styles.img_sneakers} src={url} alt='sneakers'></img>
      <p>{name}</p>
      <div className={styles.justify_beetwen}>
        <div className={styles.block}>
          <h3>ЦЕНА: </h3>
          <h6>{price}</h6>
        </div>
        <Plus className={styles.btn_add} onClick={() => addToCard(id)} />
      </div>
    </div>
  )
}

export default Item
