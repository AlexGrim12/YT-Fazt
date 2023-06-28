import React from 'react'
import ReactDOM from 'react-dom/client'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

const users = [
  { id: 1, name: 'Alex', image: 'https://robohash.org/usuario1' },
  { id: 2, name: 'Leo', image: 'https://robohash.org/usuario2' },
  { id: 3, name: 'Juan', image: 'https://robohash.org/usuario3' },
]

root.render(
  <>
    {users.map((user, index) => (
      <div key={index}>
        <h1>{user.name}</h1>
        <img src={user.image} alt="" />
      </div>
    ))}
  </>
)
