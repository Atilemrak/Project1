import {combineReducers} from 'redux';
import { initReducer } from './initReducer';
import { cardReducer } from './cardReducer';
import { favoriteReducer } from './favoriteReducer';


export const rootReducer = combineReducers( {
    initReducer, 
    cardReducer,
    favoriteReducer
})
