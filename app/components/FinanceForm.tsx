'use client';

import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../libs/hooks';
import { toggleForm } from "../libs/features/formSlice";
import Modal from './Modal';
import { getDate, getMonthString, getTimestamp } from '../utils';
import { toast, ToastContainer } from 'react-toastify';
import { addRecord } from '../libs/features/financeSlice';

interface IForm{
  date: string,
  timestamp?: string
}

export const Form: React.FC<IForm> = ({date, timestamp}) => {
	const dispatch = useAppDispatch()
	const [category, setCategory] = useState('');
	const [type, setType] = useState('');
	const [note, setNote] = useState('');
	const [amount, setAmount] = useState('');
	const [formErr, setFormErr] = useState(true);
	const [loading, setLoading] = useState(false);

  const initialState = () => {
    setCategory('');
    setType('');
    setNote('');
    setAmount('');
  }

	useEffect(() => {
		if(category !== "" && type !== "" && note !== "" && amount !== ""){
			setFormErr(false)
		} else{
			setFormErr(true)
		}
	},[category, type, note, amount])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true)

		const financeData = {
			date,
      timestamp,
      type,
			category,
			note,
			amount
		};

		try {
			const response = await fetch('/api/finances', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(financeData)
			});

			if (response.ok) {
			dispatch(addRecord(financeData))
			toast.success('Data saved', {theme: "colored"});
			setLoading(false)
    	initialState()
		} else {
			toast.error('Oops. Try again.', {theme: "colored"});
			setLoading(false)  
			}
		} catch (error) {
			toast.error('Oops. Try again.', {theme: "colored"});
			setLoading(false)    
			console.error('An error occurred:', error);
		}
	};

	return (
		<div className="financeFormField pt-3">
			<form className='grid gap-2' onSubmit={handleSubmit}>
				<div>
					<label className='block' htmlFor="type">Type</label>
					<select
            className='w-full rounded-sm'
						id="type"
						value={type}
						onChange={(e) => setType(e.target.value)}>
						<option value="" disabled selected>Select finance type</option>
						<option value="income">Income</option>
						<option value="expense">Expense</option>
						<option value="savings">Savings</option>
						<option value="investment">Investment</option>
						<option value="giving">Giving</option>
					</select>
				</div>


				<div>
					<label className='block' htmlFor="note">Note:</label>
					<textarea
            className='rounded-sm w-full h-28 p-2 bg-[#eeee]'
						id="note"
						value={note}
						onChange={(e) => setNote(e.target.value)}
						required
					/>
				</div>

				<div>
					<label className='block' htmlFor="amount">Amount:</label>
					<input
          className='w-full rounded-sm text-black bg-[#eeee] p-2'
						type="number"
						id="amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						required
						min="0.01"
						step="0.01"
					/>
				</div>

    
				<div>
					<label className='block' htmlFor="type">Category:</label>
					<select
          className='w-full rounded-sm text-[#747A80]'
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}>
						<option className='text-[#ddd]' value="" disabled selected>Select category</option>
						<option value="transportation">transportation</option>
						<option value="food">food</option>
						<option value="rent">rent</option>
						<option value="school">school</option>
						<option value="medical">medical</option>
						<option value="salary">salary</option>
						<option value="gift">gift</option>
						<option value="data">data</option>
						<option value="airtime">airtime</option>
						<option value="phone">phone</option>
						</select>
				</div>

        <div className='flex justify-between items-center mt-7'>
				<button className='bg-slate-300 text-black rounded-md py-2 px-5' type="button">Close</button>
				<button disabled={formErr || loading} className={`bg-[#FFA500] font-bold text-black rounded-md py-2 px-5 ${formErr || loading ? 'opacity-60': ''}`} type="submit">
					{loading ? 'Loading...' : 'Submit'}
				</button>
      </div>
			</form>
			<ToastContainer />
		</div>
	);
};

const FinanceForm: React.FC = () => {
	const isVisible = useAppSelector((state) => state.form.isVisible);
  const dispatch = useAppDispatch()
  const currentDate = new Date();
  const monthIndex = currentDate.getMonth();
  const month = getMonthString(monthIndex)
  const year = currentDate.getFullYear();  
  const timestamp = getTimestamp()
	const date = getDate()

	const closeModal = () => {
    dispatch(toggleForm())
  }

	return (
		<>
			<Modal date={date} timestamp={timestamp}  style='bg-[#1d2839] md:mr-12 overflow-y-scroll h-[80vh] lg:h-auto lg:min-h-[25rem] z-50' parent='justify-end' isOpen={isVisible} onClose={closeModal}>
				<Form date={date}  timestamp={timestamp} />
			</Modal>
		</>
	);
};
export default FinanceForm;
