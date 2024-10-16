import styles from './Footer.module.css'
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Copyright>
        Desenvolvido por Vinicius Farias
      </Copyright>
    </footer>
  )
}

export default Footer