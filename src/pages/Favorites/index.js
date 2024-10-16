import Banner from 'components/Banner'
import styles from './Favorites.module.css'
import Container from 'components/Container'
import SectionTitle from 'components/SectionTitle'

import Card from 'components/Card'
import { useFavoritesContext } from 'Contexts/Favorites'

const PageFavorite = () => {

  const { favorites } = useFavoritesContext()



  return (
    <main>
      <Banner image="favoritos" />
      <Container>
        <SectionTitle>
          <h1>Meus Favoritos</h1>
        </SectionTitle>

        <section className={styles.container}>
          {favorites.map((favorite) => {
            return <Card 
              key={favorite.id}
              id={favorite.id}
              title={favorite.title}
              coverImage={favorite.coverImage}
            />
          })}
        </section>
      </Container>
    </main>
  )
}

export default PageFavorite