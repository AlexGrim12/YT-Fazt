import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeating'
import Product, { Navbar } from './Product'
import { Button } from './Button'
import { TaskCard } from './task'
import { Saludar } from './Saludar'

const root = ReactDOM.createRoot(document.getElementById('root'))

const handleChange = (e) => {
  console.log(e.target.value + '...')
}

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Saludar" />
    <input
      id="hola"
      onChange={handleChange}
      onDoubleClick={() => console.log('double click')}
    />
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert('Enviando datos del form...')
      }}
    >
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form>
  </>
)
