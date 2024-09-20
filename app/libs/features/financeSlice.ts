import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchFinanceRecords = createAsyncThunk(
  'finance/fetchRecords',
  async () => {
    const response = await fetch('/api/finances');
    const data = await response.json();
    return data.data
  }
);

export interface IRecord{ 
  id: number,
  date: string,
  timestamp: string,
  type: string,
  category: string,
  note: string,
  amount: number,
  createdAt: string
}

interface IFinance{
  records: IRecord[],
  loading: boolean,
  error: string | null
}

const initialState: IFinance = {
  records: [],
  loading: false,
  error: null
}

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    addRecord: (state, action) => {
      state.records.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFinanceRecords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFinanceRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.records = action.payload;
      })
      .addCase(fetchFinanceRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch records';
      });
  },
})

export const { addRecord } = financeSlice.actions;
export default financeSlice.reducer