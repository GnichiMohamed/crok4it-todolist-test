import axios from 'axios'
import React from 'react'
import { Form, Button } from 'react-bootstrap'

const TodosList = ({ todos, setTodos, setEditTodo, dataSearch }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
    console.log('findTodo: ', findTodo)
  }

  // This delete function is not locally, it requests the API
  const handleDelete = ({ id }) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => setTodos(todos.filter((todo) => todo.id !== id)))
  }
  return (
    <div>
      {dataSearch.map((todo) => (
        <li key={todo.id}>
          <Form.Group>
            <Form.Control
              type='text'
              value={todo.title}
              className={`list ${todo.completed ? 'complete' : ''}`}
              onChange={(event) => event.preventDefault()}
            />
          </Form.Group>

          <div>
            <Button>
              <i
                className='fa fa-check-circle'
                onClick={() => handleComplete(todo)}
              ></i>
            </Button>
            <Button>
              <i className='fa fa-edit' onClick={() => handleEdit(todo)}></i>
            </Button>
            <Button onClick={() => handleDelete(todo)}>
              <i className='fa fa-trash'></i>
            </Button>
          </div>
        </li>
      ))}
    </div>
  )
}

export default TodosList
