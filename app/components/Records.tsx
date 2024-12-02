'use client';
import React, { useEffect, useState } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Spinner from './Spinner';
import { fetchFinanceRecords, IRecord } from '../libs/features/financeSlice';
import { useAppDispatch, useAppSelector } from '../libs/hooks';
import { getRecordIcon } from '../utils';

const Records = () => {
  const dispatch = useAppDispatch()
  const {records, loading, error} = useAppSelector((state) => state.finance)
  const [groupedData, setGroupedData] = useState<any>()

  useEffect(() => {
    dispatch(fetchFinanceRecords())
  }, [dispatch]); 

  useEffect(() => {
        const groupedRecords: { [key: string]: IRecord[] } = records?.reduce((acc: { [key: string]: IRecord[] }, record: IRecord) => {
      const recordDate = record.date;
      if (!acc[recordDate]) {
        acc[recordDate] = [];
      }
      acc[recordDate].push(record);
      return acc;
    }, {});
  
    setGroupedData(groupedRecords)

  },[records, dispatch])

  if (loading) {
    return <div>
      <Spinner height='h-[50vh]'/>
    </div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  let x;
  if(groupedData){
//console.log(groupedData)
     x = Object.keys(groupedData)
  }

  // console.log(x); 

  if (!groupedData || Object.keys(groupedData).length === 0) {
    return (
    <div className='flex flex-col gap-2 items-center justify-center h-[50vh]'>
         <IoDocumentTextOutline className='text-[4rem]'/>
         <p className='text-center w-[70%] mx-auto text-[#ddd]'>No records available. Tap + to keep track of your financial record.</p>
      </div>
    ) 
  }

  return (
    <div className='pt-8 grid md:w-[600px] mx-auto items-center'>
      {(
        Object.keys(groupedData).map((date) => (
          <div className='border-b [&:not(:nth-last-child)]:pb-4 border-[#ddd]' key={date}>
            <h2 className="font-bold text-gray-400 text-lg my-4">{date}</h2>
            {groupedData[date].map((record:IRecord) => (
              <div key={record.id} className="mb-2 cursor-pointer">
              <div className='flex justify-between items-center'>
              <div>
                <div className="flex items-center gap-2">
              {getRecordIcon(record.type)}
              <div>
              <p className='capitalize'>{record.type}</p>
              <p className='text-gray-400 text-sm'>{record.category}</p>
              </div>
                </div>
              </div>
              <p>{record.amount}</p>
              </div>
              </div>
            ))}
            {/* <hr className="my-2" /> */}
          </div>
        ))
      
      )}
    </div>
  );
};

export default Records;