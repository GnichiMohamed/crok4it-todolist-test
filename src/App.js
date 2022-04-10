import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './Screens/HomeScreen'
import Login from './Screens/Login'

const App = () => {
  const [input, setInput] = useState('')
  // const [completed, setCompleted] = useState(false)
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState(null)

  useEffect(() => {
    const getTodos = async () => {
      const todosFromApi = await fetchTodos()
      setTodos(todosFromApi)
    }

    getTodos()
  }, [])

  // Fetch Todos
  const fetchTodos = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=20'
    )
    const data = await res.json()

    console.log(data)
    return data
  }

  return (
    <Router>
      <>
        <Header />
        <main className='py-3'>
          <Container fluid>
            <Routes>
              <Route
                path='/'
                element={
                  <HomeScreen
                    input={input}
                    setInput={setInput}
                    // completed={completed}
                    // setCompleted={setCompleted}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                  />
                }
                exact
              />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App
