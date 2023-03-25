export const favoritesReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite: any) => favorite.id !== action.payload.id
        )
      };
  }
}


