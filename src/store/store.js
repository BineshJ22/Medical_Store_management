import { configureStore } from "@reduxjs/toolkit";
import authReducer, { setUserFromLocalStorage } from "./authslice"




var store = configureStore({
    reducer:{
             auth: authReducer
    }
});
store.dispatch(setUserFromLocalStorage());
export default store;