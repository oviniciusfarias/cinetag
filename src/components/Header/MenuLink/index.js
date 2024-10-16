import styles from './MenuLink.module.css'
import { Link } from 'react-router-dom'

const MenuLink = ({ url, children }) => {
  return (
    <Link to={url} className={styles.link}>
      {children}
    </Link>
  )
}

export default MenuLink