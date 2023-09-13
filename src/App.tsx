import React from 'react'
import './App.css'
import AppRouter from './routes/AppRouter'
import { Header } from './modules/header/Header'

function App() {
  return (
    <div className='App'>
      <Header />
      <AppRouter />
    </div>
  )
}

export default App
