import ShopingIcon from '../../assets/shopping-icon.svg'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img src={ShopingIcon} alt="shopping_icon" className={styles.navIcon} />
      <h1 className={styles.navTitle}>Shooping List</h1>
    </nav>
  )
}

export default Navbar