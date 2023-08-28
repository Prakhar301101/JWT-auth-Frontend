import { Routes,Route } from "react-router"

//pages->routes

import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Successful from './Pages/Successful'

const App = () => {

  return (
   <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Successful" element={<Successful />} />
   </Routes>
  )
}

export default App