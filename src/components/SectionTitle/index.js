import styles from './SectionTitle.module.css'

const SectionTitle = ({ children }) => {
  return (
    <div className={styles.text}>
      {children}
    </div>
  )
}

export default SectionTitle