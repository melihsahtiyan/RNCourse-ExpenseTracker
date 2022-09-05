import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expenses: [],
  },
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload.expense);
    },
    removeExpense: (state, action) => {
      state.expenses.splice(
        state.expenses.indexOf(action.payload.expense.id),
        1
      );
    },
    updateExpense: (state, action) => {
      return {
        expenses: state.expenses.forEach((expense) =>
          expense.id === action.payload.expense.id
            ? (expense = action.payload.expense)
            : expense.id
        ),
      };
    },
  },
});

export const addExpense = expensesSlice.actions.addExpense;

export const removeExpense = expensesSlice.actions.removeExpense;

export const updateExpense = expensesSlice.actions.updateExpense;

export default expensesSlice.reducer;
