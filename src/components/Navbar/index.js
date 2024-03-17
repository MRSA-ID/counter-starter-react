import ShopingIcon from '../../assets/shopping-icon.svg'

const Navbar = () => {
  return (
    <nav className="nav">
      <img src={ShopingIcon} alt="shopping_icon" className="nav-icon" />
      <h1 className="nav-title">Shooping List</h1>
    </nav>
  )
}

export default Navbar