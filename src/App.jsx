import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Authentication/Login.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import PrivateRoute from './routes/PrivateRoute.jsx'
import ScrollToTop from './components/ScrollToTop';

import Home from "./pages/Home.jsx"
import AppLayout from './layout/AppLayout.jsx'

const App = () => {
  return (
<>

<Routes>
        <Route path="/home" element={<AppLayout><Home /></AppLayout>} />
         <Route path="/" element={<Login />} />
       {
        AppRoutes.map((route)=>{
       return <Route path={route.path} element={<AppLayout><PrivateRoute>{route.element}</PrivateRoute></AppLayout>} />
        })
       }
</Routes>


</>
  )
}

export default App