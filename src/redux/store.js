import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import catalogReducer from './slices/catalogSlice'
import userReducer from './slices/userSlice'



export const store = configureStore({
    reducer: {
        cart: cartReducer,
        catalog: catalogReducer,
        user: userReducer,
    }
})






