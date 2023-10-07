import { createSlice } from "@reduxjs/toolkit";

const initialState = !!JSON.parse(localStorage.getItem('theme'))

export const darkModeSlice = createSlice({
    name: "darkMode",
    initialState:{
        value: initialState,
    },
    reducers:{
        setDarkMode: (state) => {
            state.value = true
        },
        setLightMode: (state) => {
            state.value = false;
        }
    }
})

export const { setDarkMode, setLightMode } = darkModeSlice.actions
export default darkModeSlice.reducer