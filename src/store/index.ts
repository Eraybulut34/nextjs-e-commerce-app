import { createStore } from 'redux';
import { combineReducers } from 'redux';

const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function addFavorite(product:any) {
  return { type: ADD_FAVORITE, product }
}

export function removeFavorite(id:any) {
  return { type: REMOVE_FAVORITE, id }
}

function favorites(state = [], action:any) {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action];
    case REMOVE_FAVORITE:
      return state.filter((favorite) => favorite !== action.id);
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  favorites,
});

const store = createStore(rootReducer);

export default store;