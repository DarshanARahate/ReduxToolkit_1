import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";
import userReducer from "./features/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        users: userReducer
    },
});





