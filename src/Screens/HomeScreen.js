import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Container, Form, Button } from 'react-bootstrap'

import TodosList from './TodosList'

const HomeScreen = ({
  input,
  setInput,
  //   completed,
  //   setCompleted,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const [filter, setFilter] = useState('')

  const searchText = (event) => {
    setFilter(event.target.value)
  }

  //   console.warn('filter', filter)

  // Search functionality
  let dataSearch = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    )
  })

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    )
    setTodos(newTodo)
    setEditTodo('')
  }

  const onInputChange = (event) => {
    setInput(event.target.value)
  }

  //   const onCompletedChange = (event) => {
  //     setCompleted(event.currentTarget.checked)
  //   }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
      //   setCompleted(editTodo.completed)
    } else {
      setInput('')
      //   setCompleted(false)
    }
  }, [setInput, editTodo])

  const onFormSubmit = (event) => {
    event.preventDefault()
    // Alert pleaze add text
    if (!input) {
      alert('Pleaze add a todo description!')
      return
    }
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }])
      setInput('')
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  return (
    <div>
      <Container>
        <Form onSubmit={onFormSubmit}>
          <Form.Group className='mb-3'>
            <Form.Group className='mb-3'>
              <Form.Label>
                <h5>Search</h5>
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Search in real time...'
                value={filter}
                onChange={searchText.bind(this)}
              />
            </Form.Group>
            <Form.Label>
              <h5>Todo</h5>
            </Form.Label>
            <Form.Control
              type='text'
              placeholder='Add Todo...'
              value={input}
              //   required
              onChange={onInputChange}
            />
          </Form.Group>

          {/* <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check
              type='checkbox'
              label='Completed!'
              value={completed}
              onChange={onCompletedChange}
            />
          </Form.Group> */}

          <Button variant='primary' type='submit'>
            {editTodo ? 'Ok' : 'Add'}
          </Button>
        </Form>
        <TodosList
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          //   completed={completed}
          //   setCompleted={setCompleted}
          dataSearch={dataSearch}
        />
      </Container>
    </div>
  )
}

export default HomeScreen
