import { useState } from 'react'

function App() {
  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])

  function onChangeInputTodo(event) {
    setInputTodo(event.target.value)
  }

  function addNewTodo() {
    setTodos([inputTodo, ...todos])
    setInputTodo('')
  }

  function deleteTodo(index) {
    let allTodos = [...todos]
    allTodos.splice(index, 1)
    setTodos(allTodos)
  }

  console.log(`Input Todos: ${inputTodo}`)
  console.log(`Todos list: ${todos}`)
  console.log(`Array Todos: ${[...todos]}`)

  return (
    <div>
      <header>
        <h1 className="font-semibold text-5xl">TODOS</h1>
      </header>
      <div>
        <div className="w-fit flex gap-3">
          <input
            className="w-80 px-2 rounded-md bg-[#efefef] outline-none"
            placeholder="type new todo..."
            type="text"
            value={inputTodo}
            onChange={onChangeInputTodo}
          />
          <button
            className="bg-slate-900 p-2 rounded-md text-slate-100"
            onClick={addNewTodo}
          >
            ADD
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index} className="max-w-[381px] flex justify-between">
                {todo}
                <button onClick={() => deleteTodo(index)}>
                  <img
                    className="w-6 h-6"
                    alt="Delete"
                    src="images/delete-icon.svg"
                  />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
