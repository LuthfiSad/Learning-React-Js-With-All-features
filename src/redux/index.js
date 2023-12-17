import { configureStore } from "@reduxjs/toolkit"
import orderReducer from "./reducer/orderDeducer"

const store = configureStore({
  reducer: {
    order: orderReducer,
  }
})

export default store;