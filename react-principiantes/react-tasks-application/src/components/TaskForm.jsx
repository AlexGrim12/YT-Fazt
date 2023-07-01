import { useState } from 'react'

function TaskForm({ createTask }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createTask({ title, description })
    setTitle('')
    setDescription('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button>Guardar</button>
      </form>
    </div>
  )
}

export default TaskForm
