import { createStore } from 'redux';
import { combineReducers } from 'redux';

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const SET_FAVORITES = 'SET_FAVORITES';

export function addFavorite(product:any) {
  localStorage.setItem('favorites', JSON.stringify([...JSON.parse(localStorage.getItem('favorites') || '[]'), product]));
  return { type: ADD_FAVORITE, product }
}

export function removeFavorite(product:any) {
  localStorage.setItem('favorites', JSON.stringify(JSON.parse(localStorage.getItem('favorites') || '[]').filter((favorite:any) => favorite.id != product.id)));
  return { type: REMOVE_FAVORITE, product }
}

export function setFavorites(favorites:any) {
  return { type: SET_FAVORITES, favorites }
}

function favorites(state = [], action:any) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action];
    case REMOVE_FAVORITE:
      console.log(action,state);
      return state.filter((favorite:any) => favorite.product.id != action.product.id);
    case SET_FAVORITES:
      return action
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorites,
});

const store = createStore(rootReducer);

export default store;