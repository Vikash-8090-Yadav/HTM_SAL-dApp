import styles from "../styles/nav.module.css"
import Link from "next/link"
import Router, { useRouter } from "next/router"
import AddEmp from "../pages/addemp"
export default function  Mainc({children}) {
  return (
    <>
    <div className=  " bg-gray-100 flex-none overflow-y-scroll h-[50px] w-[180px] main-content">
    {children}
    </div>
    </>
  )
}
