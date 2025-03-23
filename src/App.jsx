import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import HomePage from './Pages/HomePage'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import About from './Pages/About'
import Individual from './Pages/Individual'
import Blog from './Pages/Blog'

const App = () => {
  return (
   <>
  <Router>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="/individual" element={<Individual/>}/>
      <Route path="/blog" element={<Blog/>}/>
    </Routes>
  </Router>
   </>

  )
}

export default App
