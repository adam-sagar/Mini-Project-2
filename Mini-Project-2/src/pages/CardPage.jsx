import React from "react"
import { Outlet } from "react-router-dom"

 function CardPage() {

  return (
    
    <div>
        <h1>Heroes</h1>
        <Outlet />
    </div>
  )
}

export default CardPage