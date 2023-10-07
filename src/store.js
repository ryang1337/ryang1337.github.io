import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice.js"

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
})