import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './reduceres/loginSlice'
import demoReducer from './reduceres/demoSlice'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        demo: demoReducer,
    },
})