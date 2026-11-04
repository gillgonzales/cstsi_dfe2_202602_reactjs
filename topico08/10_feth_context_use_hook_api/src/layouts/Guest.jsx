
import Header from "../components/Header"
import { Navbar } from "../components/Navbar"
import {Outlet} from "react-router"

function Guest() {
  return (
    <>
    <Navbar/>
    <Header/>
    <main className='flex w-full justify-center p-3 sm:p-10 '>
       <Outlet/>
    </main>
    </>
  )
}

export default Guest