import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./conter";
import authSlice from "./auth";

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});
export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
