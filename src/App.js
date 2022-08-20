import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Navber from './Pages/Home/Navber'
import Login from './Pages/Login/Login'
import Footer from './Pages/Share/Footer'
import ServiceDetails from './Pages/Home/ServiceDetails'
import RequireAuth from './RequireAuth/RequireAuth'
import Sineup from './Pages/Login/Sineup'

function App() {
  return (
    <div className="">
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="service/:serviceId" element={
          <RequireAuth>
            <ServiceDetails />
          </RequireAuth>

        } />

        <Route path="/signup" element={<Sineup />} />

      </Routes>
      <Footer />



    </div>
  )
}

export default App
