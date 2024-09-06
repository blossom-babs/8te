import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className="responsive-layout navbar pt-7">
      <div className="flex justify-between">
    <Link href="/" className="text-3xl">8te.</Link>
    <ul className="flex justify-center items-center gap-8">
      <li>Records</li>
      <li>Analysis</li>
      <li>Budget</li>
      <div className="flex gap-1 items-end">
      <a href="#">Sign in</a>
      <button><RiArrowDropDownLine className="text-lg"/></button>
      </div>
    </ul>
      </div>
    </div>
  )
}

export default Navbar