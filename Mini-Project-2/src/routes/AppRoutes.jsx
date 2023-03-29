import { Routes, Route } from "react-router-dom"

function AppRoutes() {

    return (

        <Routes>
            <Route path='/' element={<About {...props} />} />
            <Route path='/heroes' element={<About {...props} />} />
        </Routes>
    )
}

export default AppRoutes