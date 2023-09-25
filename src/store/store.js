import { configureStore } from "@reduxjs/toolkit";
import scoreSlice from './scores'

const store =configureStore({
    reducer:{score: scoreSlice.reducer },
})

export default store;

