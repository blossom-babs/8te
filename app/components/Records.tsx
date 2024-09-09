'use client';
import React, { useEffect, useState } from 'react';
import { IoDocumentTextOutline } from 'react-icons/io5';
import Spinner from './Spinner';

interface IRecord{ 
  id: number,
  month: string,
  year: number,
  timestamp: string,
  type: string,
  category: string,
  note: string,
  amount: number,
  createdAt?: string
}
const Records = () => {
  // State to store finance records and handle loading/errors
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch finance records from the API when the component mounts
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch('/api/finances'); // Assuming your API route is '/api/finances'
        if (!response.ok) {
          throw new Error('Failed to fetch records');
        }
        const data = await response.json();
        setRecords(data.data); // Assuming the data is in `data.data` as per the API response
      } catch (err:any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []); // Empty dependency array to fetch data once on mount

  // If data is still loading, display a loading message
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
              <strong>Amount:</strong> ${record.amount.toFixed(2)} | <strong>Note:</strong> {record.note || 'N/A'}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Records;