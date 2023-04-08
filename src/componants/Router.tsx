import React from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Reg from '../Reg';
import Home from '../pages/Home';
import Login from '../Login';
import Cads from '../Cads';
import Thanks from '../Thanks';

function Router() {
  return (
  <BrowserRouter>
  <Routes>

    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/register' element={<Reg></Reg>} ></Route>
    <Route path='/Login' element={<Login></Login>} ></Route>
    <Route path='/Cards' element={<Cads></Cads>} ></Route>
    <Route path='/Thanks' element={<Thanks></Thanks>} ></Route>

  </Routes>
  
  
  </BrowserRouter>
  )
}

export default Router