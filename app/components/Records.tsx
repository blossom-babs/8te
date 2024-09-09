'use client';
import React, { useEffect, useState } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Spinner from './Spinner';
import { fetchFinanceRecords, IRecord } from '../libs/features/financeSlice';
import { useAppDispatch, useAppSelector } from '../libs/hooks';

const Records = () => {
  const dispatch = useAppDispatch()
  const {records, loading, error} = useAppSelector((state) => state.finance)
  // const [records, setRecords] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    dispatch(fetchFinanceRecords())
  }, [dispatch]); 

  if (loading) {
    return <div>
      <Spinner height='h-[50vh]'/>
    </div>;
  }

  // If there was an error fetching data, display the error message
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='flex justify-center items-center'>
      {records.length === 0 ? (
        <div className='flex flex-col gap-2 items-center justify-center h-[50vh]'>
          <IoDocumentTextOutline className='text-[4rem]'/>
          <p className='text-center w-[70%] mx-auto text-[#ddd]'>No records available. Tap + to keep track of your financial record.</p>
        </div>
      ) : (
        <ul>
          {/* Map through the records and display them */}
          {records.map((record: IRecord) => (
            <li key={record.id}>
            {record.month} {record.year} | 
              <strong>Type:</strong> {record.type} | <strong>Category:</strong> {record.category} | 
              <strong>Amount:</strong> ${record.amount} | <strong>Note:</strong> {record.note || 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Records;