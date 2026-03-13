import { createSlice } from "@reduxjs/toolkit"
// Define Type or Interface
export interface CounterState {
    value: number;
}

// 1. define initialState
const initialState: CounterState = {
    value: 0
}
// 2. Define reducer
export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: { 
        increment: (state, action) => {
            state.value += 1
        },
        decrement: (state, action) => {
            state.value -=1
        }
    }
})
// export action of reducer
export const {increment, decrement} = counterSlice.actions
// 3. Export reducer
export default counterSlice.reducer
