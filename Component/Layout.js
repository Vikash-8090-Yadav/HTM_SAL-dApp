import NavL from "./navL"
import NavM from "./navM"
import NavR from "./navR"
import Lefts from "./lft"
import Rights from "./rht"
import Mainc from "./mnc"
import Cat from "./Cool"
import About from "./about"
import Contact from "./contact"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
export default function Layout({children}) {

  console.log(children);
  return (
    <>
    <ToastContainer/>
    <headerall className="nav">
    <NavL/>
    <NavM/>
    <NavR/>
    </headerall>
    <Cat/>
    <lms className="container">
    <Lefts/>
    <Mainc>{children}</Mainc>
    <Rights/>
    </lms>
    
    {/*
    THis lsm stand for the LEFT MAIN  and RIGHT-SIDE 
  */}

    <main className = "mn">
      <About/>
      <Contact/>
    </main>
    </>
  )
}

