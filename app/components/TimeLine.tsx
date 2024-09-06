import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const TimeLine = () => {
  return (
    <div className="flex justify-center items-center gap-8">
      <button><FaAngleLeft /></button>
      <p>September, 2024</p>
      <button><FaAngleRight />
      </button>
    </div>
  )
}

export default TimeLine