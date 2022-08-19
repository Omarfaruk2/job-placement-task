import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Navber from './Pages/Home/Navber'
import Login from './Pages/Login/Login'
import Sineup from './Pages/Login/Sineup'

// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sineup />} />

      </Routes>



    </div>
  )
}

export default App
