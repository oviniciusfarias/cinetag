import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import MenuLink from './MenuLink'
import Container from 'components/Container'

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Link to="./">
          <img src="/images/logo.png" alt="Logo da Cinetag" />
        </Link>
        <nav>
          <MenuLink url="./">
            Home
          </MenuLink>
          <MenuLink url="./favoritos">
            Favoritos
          </MenuLink>
        </nav>
      </Container>
    </header>
  )
}
export default Header