import { Routes, Route } from "react-router-dom"
import CardPage from "../pages/CardPage"
import HomePage from "../pages/HomePage"
import CardList from "../components/CardList"
import CardDetails from "../components/CardDetails"

function AppRoutes() {

    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/characters' element={<CardPage />} >
                <Route index element={<CardList />} />
                <Route path=":characterid" element={<CardDetails />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes