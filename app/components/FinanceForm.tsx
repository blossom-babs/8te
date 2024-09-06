'use client';

import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../libs/hooks';
import { toggleForm } from "../libs/features/formSlice";
import Modal from './Modal';
import { getMonthString, getTimestamp } from '../utils';

interface IForm{
  month: string,
  year: number,
  timestamp?: string
}

export const Form: React.FC<IForm> = ({month, year, timestamp}) => {
	const [category, setCategory] = useState('');
	const [type, setType] = useState('');
	const [note, setNote] = useState('');
	const [amount, setAmount] = useState('');

  const initialState = () => {
    setCategory('');
    setType('');
    setNote('');
    setAmount('');
  }

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const financeData = {
			month,
			year,
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
				console.log('Finance data submitted successfully');
        initialState()
			} else {
				console.error('Error submitting finance data');
			}
		} catch (error) {
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
            className='rounded-sm w-full h-28 bg-[#eeee]'
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
          className='w-full rounded-sm'
						id="category"
						value={category}
						onChange={(e) => setCategory(e.target.value)}>
						<option value="transportation">transportation</option>
						<option value="food">food</option>
						<option value="rent">rent</option>
						<option value="school">school</option>
						<option value="medical">medical</option>
						<option value="salary">salary</option>
						<option value="gift">gift</option>
					</select>
				</div>

        <div className='flex justify-between items-center mt-7'>
				<button className='bg-slate-300 text-black rounded-md py-2 px-5' type="button">Close</button>
				<button className='bg-[#FFA500] font-bold text-black rounded-md py-2 px-5' type="submit">Submit</button>
      </div>
			</form>
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

	const closeModal = () => {
    dispatch(toggleForm())
  }

	return (
		<>
			<Modal month={month} year={year} timestamp={timestamp}  style='bg-[#1d2839] md:mr-12 md:min-h-[25rem] z-50' parent='justify-end' isOpen={isVisible} onClose={closeModal}>
				<Form month={month} year={year}  timestamp={timestamp} />
			</Modal>
		</>
	);
};
export default FinanceForm;
