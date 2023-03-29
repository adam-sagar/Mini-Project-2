import React from "react"
import { Outlet } from "react-router-dom"
import CardList from "../components/CardList"

 function CardPage() {

  return (
    
    <div>
        <Outlet />
    </div>
  )
}

export default CardPage