import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counters/CounterSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi } from "../services/dummyData";


export const store = configureStore({
    reducer:{
        counter: counterReducer ,
        [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware)
})

setupListeners(store.dispatch)
