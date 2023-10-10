import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice.js"
import fromReducer from "./fromSlice.js"
import scrollToReducer from "./scrollToSlice.js"

export default configureStore({
    reducer: {
        darkMode: darkModeReducer,
        from: fromReducer,
        scrollTo: scrollToReducer,
    },
})