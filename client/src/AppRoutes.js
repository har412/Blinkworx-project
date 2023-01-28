import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import BookOrder from "./Components/BookOrder";
import Dashboard from "./Components/Dashboard"

const AppRoutes= ()=>{
    return(
        
       <BrowserRouter>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/bookOrder" element={<BookOrder></BookOrder>} />
        </Routes>
       </BrowserRouter>
    )
}

export default AppRoutes;