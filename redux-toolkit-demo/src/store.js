import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";
import userReducer from "./features/userSlice";
import { jsonApi } from "./services/jsonApi";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        users: userReducer,
        [jsonApi.reducerPath]: jsonApi.reducer,
    },

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(jsonApi.middleware),
});





