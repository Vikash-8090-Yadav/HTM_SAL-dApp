import styles from "../styles/nav.module.css"
import Link from "next/link"
import Image from "next/image"
export default function  Lefts() {
  return (
    <>
    <div className="left-sidebar">
      <div className="imp-link">
        <Link href = "/addemp"><a><Image src ="/../public/images/Icon/teamwork.png" width ={30} height = {25}
        />Add Employe</a></Link>
        <Link href = "/emplist"><a><Image src ="/../public/images/Icon/to-do-list.png" width ={30} height = {25}
        />Employee List</a></Link>
        <Link href = "/empsal"><a><Image src ="/../public/images/Icon/wallet.png" width ={30} height = {25}
        />Pay salary</a></Link>
        <Link href = "/contractbal"><a><Image src ="/../public/images/Icon/salary.png" width ={30} height = {25}
        />Contract Balance</a></Link>
        <Link href = "/"><a><Image src ="/../public/images/Icon/setting.png" width ={30} height = {25}
        />Setting</a></Link>
      </div>
      <div className="feed">
        <p>Having Queries ?</p>
      </div>
    </div>
    </>
  )
}
