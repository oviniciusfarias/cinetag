import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  return (
    <FavoritesContext.Provider
      value={{favorites, setFavorites}}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider;

export const useFavoritesContext = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext)

  const addFavorite = (newFavorite) => {
    const alreadyFavorite = favorites.some(item => item.id === newFavorite.id)

    if (!alreadyFavorite) {
      return setFavorites([...favorites, newFavorite])
    } 

    return setFavorites(favorites.filter((item) => item.id !== newFavorite.id))
  }

  return {
    favorites, 
    addFavorite
  }
}