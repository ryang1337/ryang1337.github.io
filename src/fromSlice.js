import { createSlice } from "@reduxjs/toolkit";

export const fromSlice = createSlice({
    name: "from",
    initialState:{
        value: "/",
    },
    reducers:{
        setFrom: (state, action) => {
            state.value = action.payload
        },
        resetFrom: (state) => {
            state.value = "/";
        }
    }
})

export const { setFrom, resetFrom } = fromSlice.actions
export default fromSlice.reducer