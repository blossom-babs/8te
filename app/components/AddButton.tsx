"use client";

import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";

interface iAddButton{
}

const AddButton: React.FC<iAddButton> = ({}) => {
  const dispatch = useDispatch()
  
  const displayForm = () => {
    console.log(dispatch)
  }

  return (
    <div className="z-10">
    <div className="absolute bg-[#1d2839] bottom-20 right-[5rem] shadow-lg rounded-full">
      <button onClick={displayForm} className="cursor-pointer h-16 w-16 rounded-full flex justify-center items-center">
      <FaPlus className="text-white text-2xl" />
      </button>
      </div>
    </div>
  )
}

export default AddButton