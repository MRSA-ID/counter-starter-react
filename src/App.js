import { useState } from 'react';
import './App.css'
import ShopingIcon from './assets/shopping-icon.svg'
function App() {
  const [value, setValue] = useState('')

  console.log(value)

  return (
    <>
      <nav className="nav">
        <img src={ShopingIcon} alt="shopping_icon" className="nav-icon" />
        <h1 className="nav-title">Shooping List</h1>
      </nav>

      <section className='container'>
        <form className='form'>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value} 
            className='input'
            type="text" 
            placeholder='List'
            />
          <button className='add-button' type='submit'>add</button>
        </form>
      </section>
    </>
  );
}

export default App;
