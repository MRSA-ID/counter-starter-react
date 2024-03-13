import { useState } from 'react';
import './App.css'
import classNames from 'classnames';
import ShopingIcon from './assets/shopping-icon.svg'
import PlusIcon from './assets/plus-icon.svg'
import MinusIcon from './assets/minus-icon.svg'

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([
    {title: 'Susu Ultra', count: 1},
    {title: 'Tahu Sumedang', count: 1},
    {title: 'Semangka', count: 1},
  ])

  const HandleSubmit = (e) => {
    e.preventDefault()

    const addedTodos = [...todos, {
      tittle: value,
      count: 1
    }]

    setTodos(addedTodos)
  }

  const HandleAdditionCount = (index) => {
    const newTodos = [...todos]
    newTodos[index].count = newTodos[index].count + 1
    setTodos(newTodos)
  }

  const HandleSubstractionCount = (index) => {
    const newTodos = [...todos]
    newTodos[index].count = newTodos[index].count - 1
    setTodos(newTodos)
  }

  return (
    <>
      <nav className="nav">
        <img src={ShopingIcon} alt="shopping_icon" className="nav-icon" />
        <h1 className="nav-title">Shooping List</h1>
      </nav>

      <section className='container'>
        <form className='form' onSubmit={HandleSubmit}>
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
            {todos.map((todo, i, arr) => {
              return (
                <div className={`todo ${!(arr.length === i + 1) && 'todo-divider'}`} key={i}>
                  {todo.title}
                  <div className='todo-icon-wrapper'>
                    <div className='todo-count'>
                      {todo.count}
                    </div>
                    <button onClick={() => HandleSubstractionCount(i)} className='todo-action-button'>
                      <img src={MinusIcon} alt="minus icon"/>
                    </button>
                    <button onClick={() => HandleAdditionCount(i)} className='todo-action-button'>
                      <img src={PlusIcon} alt="plus icon"/>
                    </button>
                  </div>
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
