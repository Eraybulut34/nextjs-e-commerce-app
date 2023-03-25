import { createContext, useReducer } from "react";
import { favoritesReducer } from "./favoritesReducer";

interface favoritesContextType {
    favorites: any[];
}

const FavoritesContext: any = createContext<favoritesContextType | null>(null);
a
export const AuthProvider = ({ children }: any) => {
    const initialState: favoritesContextType = {
        favorites: [],
    };

    const [state, dispatch] = useReducer(favoritesReducer, initialState);

    return (
        <FavoritesContext.Provider value={{ ...state, dispatch }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContext;
