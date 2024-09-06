"use client"

import React, { useState } from 'react';

const FinanceForm: React.FC = () => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [category, setCategory] = useState('savings');
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('USD');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const financeData = {
      month,
      day,
      category,
      note,
      amount: `${amount} ${currency}`,
    };

    console.log(financeData)

    try {
      const response = await fetch('/api/finances', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(financeData),
      });

      if (response.ok) {
        console.log('Finance data submitted successfully');
      } else {
        console.error('Error submitting finance data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="financeFormField flex items-center justify-center text-white">
    <form onSubmit={handleSubmit}>
      <div className="flex">
      <div>
        <label htmlFor="month">Month:</label>
        <input
          type="text"
          id="month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="day">Day of the Month:</label>
        <input
          type="number"
          id="day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          required
          min="1"
          max="31"
        />
      </div>

      </div>

      <div>
        <label htmlFor="category">Finance Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="savings">Savings</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
          <option value="investment">Investment</option>
          <option value="giving">Giving</option>
        </select>
      </div>

      <div>
        <label htmlFor="note">Note / Detail:</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="amount">Amount:</label>
        <input
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
        <label htmlFor="currency">Currency:</label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="NGN">NGN</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default FinanceForm;
