import styles from './Copyright.module.css'

const Copyright = ({ children }) => {
  return (
    <p className={styles.copyright}>
      {children}
    </p>
  )
}

export default Copyright