import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  isVisible: boolean;
}

const initialState: FormState = {
  isVisible: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    toggleForm: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { toggleForm } = formSlice.actions;
export default formSlice.reducer;