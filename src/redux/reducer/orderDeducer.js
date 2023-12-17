import { increment, decrement } from "../actions";
import { createReducer } from "@reduxjs/toolkit";

const orderReducer = createReducer(0, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      return state + 1;
    })
    .addCase(decrement, (state, action) => {
      if (state <= 0) {
        return state;
      }
      return state - 1;
    })
}
)

export default orderReducer;