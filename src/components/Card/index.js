import styles from './Card.module.css'
import { useFavoritesContext } from 'Contexts/Favorites'

import iconFavorite from './favorite.png'
import iconRemoveFavorite from './favorite_outline.png'
import { Link } from 'react-router-dom'

const Card = ({ id, title, coverImage }) => {

  const { favorites, addFavorite }= useFavoritesContext()
  const alreadyFavorite = favorites.some((favoriteItem) => favoriteItem.id === id)

  const icon = alreadyFavorite ? iconFavorite : iconRemoveFavorite

  return (
    <div className={styles.container}>
      <Link 
        className={styles.link}
        to={`/videos/${id}`}
      >
        <img 
          src={coverImage} 
          alt={title} 
          className={styles.cover} 
        />
      </Link>

      <div className={styles.cardFooter}>
        <Link 
          className={styles.link}
          to={`/videos/${id}`}
        >
          <h2>{title}</h2>
        </Link>
        
        <img 
          src={icon}
          alt="Favoritar filme" 
          className={styles.favorite}
          onClick={() => {
            addFavorite({ id, title, coverImage })
          }} 
        />
      </div>
    </div>
  )
}

export default Card