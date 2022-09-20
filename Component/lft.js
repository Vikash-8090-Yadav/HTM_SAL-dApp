import Link from "next/link"
import Image from "next/image"
export default function  Lefts() {
  return (
    <>
    <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 left-sidebar ">
      <div className=" imp-link ">
        <ul>
          <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700">
        <Link class="" href = "/addemp"><a><Image src ="/../public/images/Icon/teamwork.png" width ={30} height = {25}
        />Add Employe</a></Link></li>

        <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700"><Link href = "/emplist"><a><Image src ="/../public/images/Icon/to-do-list.png" width ={30} height = {25}
        />Employee List</a></Link></li>
        <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700"><Link href = "/empsal"><a><Image src ="/../public/images/Icon/wallet.png" width ={30} height = {25}
        />Pay salary</a></Link></li>
        <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700"><Link href = "/contractbal"><a><Image src ="/../public/images/Icon/salary.png" width ={30} height = {25}
        />Contract Balance</a></Link></li>
        <li class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-indigo-200 dark:hover:bg-gray-700"><Link href = "/"><a><Image src ="/../public/images/Icon/setting.png" width ={30} height = {25}
        />Setting</a></Link></li>
        </ul>
      </div>
      <div className="feed">
        <p>Having Queries ?</p>
      </div>
    </div>
    </>
  )
}
