import React from 'react'
import ReactDOM from 'react-dom/client'
import { Greeting, UserCard } from './Greeating'
import Product, { Navbar } from './Product'
import { Button } from './Button'
import { TaskCard } from './task'
import { Saludar } from './Saludar'
import { Posts } from './Posts'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <Posts />
  </>
)
