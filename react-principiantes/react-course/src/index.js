import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Counter() {
  const [mensaje, setMensaje] = useState('')

  return (
    <div>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />
      <button on onClick={()=>{alert('El mensaje es: '+ mensaje)}}>Save</button>
    </div>
  )
}

root.render(
  <>
    <Counter />
  </>
)
