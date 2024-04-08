import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'


const Rout = () => {
  return (
    <>
    
      <Routes>
      <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     
    </>
      
  )
}

 export default Rout




 