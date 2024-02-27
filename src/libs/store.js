import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "../libs/features/cart/CartSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer
    }
  })
}