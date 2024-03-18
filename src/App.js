import { useState } from 'react';
import './App.css'
import classNames from 'classnames';

import PlusIcon from './assets/plus-icon.svg'
import MinusIcon from './assets/minus-icon.svg'
import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';

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
      title: value,
      count: 1
    }]
    setTodos(addedTodos)
    setValue('')
  }

  const HandleAdditionCount = (index) => {
    const newTodos = [...todos]
    newTodos[index].count = newTodos[index].count + 1
    setTodos(newTodos)
  }

  const HandleSubstractionCount = (index) => {
    const newTodos = [...todos]
    if (newTodos[index].count > 0) {
      // selama jumlah count masih diatas 0
      // Bisa melakukan pengurangan
      newTodos[index].count = newTodos[index].count - 1
    } else {
      // kalau sudah 0 dan masih dikurangi 
      // hapus array value dengan index yang sesuai
      newTodos.splice(index, 1)
    }
    setTodos(newTodos)
  }

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count
    },0)
    return totalCounts
  }
  
  return (
    <>
      <Navbar/>

        <Container>
         
          <SearchInput 
            onSubmit={HandleSubmit} 
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <div className="info">
            <div className="info-total">
              <p>{`Total List: ${todos.length}`}</p>
            </div>

            <div className="info-total">
              <p>{`Total Counts: ${getTotalCounts()}`}</p>
            </div>
            
            <button onClick={() => setTodos([])} className="delete-all-button">
              Delete All List
            </button>
          </div>

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
        </Container>
    </>
  );
}

export default App;
