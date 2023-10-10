import { createSlice } from "@reduxjs/toolkit";

export const scrollToSlice = createSlice({
    name: "scrollTo",
    initialState:{
        value: "",
    },
    reducers:{
        setScrollTo: (state, action) => {
            state.value = action.payload
        },
        resetScrollTo: (state) => {
            state.value = "";
        }
    }
})

export const { setScrollTo, resetScrollTo } = scrollToSlice.actions
export default scrollToSlice.reducer