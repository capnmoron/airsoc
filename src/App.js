import React from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <Header/>
      <div className='app_css'>
        <About/>
        <Contact/>
      </div>
    </>
  )
}
