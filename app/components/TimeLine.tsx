"use client";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { getMonthString } from "../utils";
import { useEffect, useState } from "react";

const TimeLine = () => {
  const currentDate = new Date();
  const monthIndex = currentDate.getMonth();

  const MONTH = getMonthString(monthIndex)
  const YEAR = currentDate.getFullYear();
  const [month, setMonth] = useState(MONTH);
  const [year, setYear] = useState(YEAR);
  const [monthIdx, setMonthIdx] = useState<number>(monthIndex);

  useEffect(() => {
    setMonth(getMonthString(monthIdx));
  }, []);

  console.log({monthIdx})

  const navigateTLBack = () => {
    // setMonthIdx(monthIdx - 1);
    // console.log("I'm being clicked");
    
    // setMonth(getMonthString(monthIdx - 1));
    
    setMonthIdx((prevMonthIdx) => {
      console.log({ monthIdx });
      let newMonthIdx = prevMonthIdx - 1

      if(newMonthIdx < 0){
        newMonthIdx = 11
        setYear(year - 1)
      }
      setMonth(getMonthString(newMonthIdx))
      return newMonthIdx
    })
    
  };

  const navigateTLForward = () => {
    setMonthIdx((prevMonthIdx) => {
      let newMonthIdx = prevMonthIdx + 1;
      if(newMonthIdx >= 12){
        newMonthIdx = newMonthIdx % 12
        setYear(year + 1)
      }
      setMonth(getMonthString(newMonthIdx));
      return newMonthIdx;
    });
    // console.log({ monthIdx });
    // setMonthIdx(monthIdx + 1);
    // setMonth(getMonthString(monthIdx + 1));
  }

  return (
    <div className="flex justify-center items-center gap-8">
      <button onClick={navigateTLBack}>
        <FaAngleLeft />
      </button>
      <p>
        {month}, {year}
      </p>
      <button onClick={navigateTLForward}>
        <FaAngleRight />
      </button>
    </div>
  );
};

export default TimeLine;
