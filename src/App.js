import { useState } from 'react';
import './App.css'
import ShopingIcon from './assets/shopping-icon.svg'
function App() {
  return (
    <>
      <nav className="nav">
        <img src={ShopingIcon} alt="shopping_icon" className="nav-icon" />
        <h1 className="nav-title">Shooping List</h1>
      </nav>
    </>
  );
}

export default App;
