import { createSlice } from "@reduxjs/toolkit"

interface CounterData {
    count: number
}

const initState: CounterData = {
    count: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        },
        increaseBy(state, actions) {
            state.count += actions.payload
        }
    }
})

export const {
    increment,
    decrement,
    increaseBy
} = counterSlice.actions;

export default counterSlice.reducer;