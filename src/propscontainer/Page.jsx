import React from 'react'
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';


const Page = () => {
  return (
    <div>
         <BrowserRouter>
      
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/crt' element={<Create/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
         <Route path='/read' element={<Read/>}></Route>
      </Routes>
      </BrowserRouter>
    
      
    </div>
  )
}

export default Page
