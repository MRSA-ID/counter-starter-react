import { useState } from 'react';
import './App.css'
import ShopingIcon from './assets/shopping-icon.svg'
function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Semangka', count: 1},
  ])


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
        {todos.length > 0 ? (
          <div className='todos'>
            {todos.map((todo, i) => {
              return (
                <div key={i}>
                  {todo.title}
                  {todo.count}
                </div>
              )
            })}
          </div>
        ):(
          <div>Kosong</div>
        )}
      </section>
    </>
  );
}

export default App;
