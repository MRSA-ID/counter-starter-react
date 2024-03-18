import { useState } from 'react';

import Navbar from './components/Navbar';
import Container from './components/Container';
import SearchInput from './components/SearchInput';
import Info from './components/Info';
import Todos from './components/Todos';
import Empty from './components/Empty';

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
          <Info 
            todosLength={todos.length}
            totalCounts={getTotalCounts()}
            onDelete={() => setTodos([])}
          />

          {todos.length > 0 ? (
            <Todos 
              todos={todos}
              onSubstraction={(i) => HandleSubstractionCount(i)}
              onAddition={(i) => HandleAdditionCount(i)}
            />
          ):(
            <Empty />
          )}
        </Container>
    </>
  );
}

export default App;
