import './App.scss';
import axios from "axios";
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { add_To_Card, add_To_Favorite, initItem } from './redux/action';
import Header from './components/header/Header';
import ListItem from './ListItem';
import { Route, Routes, HashRouter as Router } from 'react-router-dom'
import ListFavorite from './Listfavorite';

function App() {
  const dispatch = useDispatch();

  async function p() {
    try {
      const post = await axios.get('https://6149ca8a07549f001755a5e0.mockapi.io/items');
      const favorite = await axios.get('https://6149ca8a07549f001755a5e0.mockapi.io/favorites');
      const card  = await axios.get('https://6149ca8a07549f001755a5e0.mockapi.io/cart');
      
      favorite.data.map((item) =>  dispatch(add_To_Favorite(item.favId, false)));
      dispatch(initItem(post));

      card.data.map((item) => dispatch(add_To_Card(post.data.find((e) => e.id === item.cardId))));

    } catch (error) {
      alert('Ошибка с сервером данных инициализации');
    }

  }

  useEffect(() => {
    p();

  }, [])

  return (
    <Router>
      <div className='body'>
        <Header/>
        <Routes>
          <Route path='/home' element={<ListItem />} />
          <Route path='/favorite' element={<ListFavorite />} />
          <Route path='*' element={<ListItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
