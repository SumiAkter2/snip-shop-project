import { Outlet } from "react-router-dom"

import Footer from "../Share/Footer"
import Header from "../Share/Header"


function Main() {
    return (
        <div >
            <Header />
            <Outlet />
            <Footer/>
        </div>
    )
}

export default Main
