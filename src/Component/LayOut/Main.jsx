import { Outlet } from "react-router-dom"
import Home from "../Home/Home"
import Footer from "../Share/Footer"


function Main() {
    return (
        <div >
            <Home />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Main
