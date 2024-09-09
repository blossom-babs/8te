"use client";

import { FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../libs/hooks";
import { toggleForm } from "../libs/features/formSlice";
import { RxCross2 } from "react-icons/rx";
interface iAddButton{
}

const AddButton: React.FC<iAddButton> = ({}) => {
  const isVisible = useAppSelector((state) => state.form.isVisible);
  const dispatch = useAppDispatch()

  return (
    <div className="fixed z-30 bottom-6 right-6">
    <div className="bg-[#1d2839] shadow-lg rounded-full">
      <button onClick={() =>{ 
        dispatch(toggleForm())}} className="cursor-pointer h-16 w-16 rounded-full flex justify-center items-center">
      {isVisible ?
      <RxCross2 className="text-white text-2xl" />
    :
      <FaPlus className="text-white text-2xl" />
    }
      </button>
      </div>
    </div>
  )
}

export default AddButton