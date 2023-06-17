import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import Forgot from "./pages/forgot"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forgot' element={<Forgot/>}/>
      </Routes>
    </>    
  )
}

export default App
