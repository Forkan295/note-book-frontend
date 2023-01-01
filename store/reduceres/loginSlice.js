import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  email:null,
  password:null,
  name:'Forkan'
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = true,
      state.email = state.email,
      state.password = state.password
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = loginSlice.actions

export default loginSlice.reducer